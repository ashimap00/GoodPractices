from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import bcrypt
from .db_utils import db
from bson.objectid import ObjectId
import requests
from decouple import config
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import pandas as pd
from bson import json_util

def healthcheck(request):
    if request.method == 'GET':
        return HttpResponse("API Active!")

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('name')
        email = data.get('email')
        password = data.get('password')
        # lang = data.get('language')
        role = data.get('role')  # Default role is 'user'

        if not username or not email or not password:
            return JsonResponse({'error': 'All fields are required'}, status=400)

        if db.users.find_one({'username': username}):
            return JsonResponse({'error': 'Username already exists'}, status=400)
        
        if db.users.find_one({'email': email}):
            return JsonResponse({'error': 'Email already exists'}, status=400)

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        user = {
            'username': username,
            'email': email,
            'password': hashed_password.decode('utf-8'),
            # 'lang': lang,
            'role': role
        }

        result = db.users.insert_one(user)
        return JsonResponse({
            'message': 'User registered successfully!',
            'user':{
                'name': username,
                'role': role,
                'id': str(result.inserted_id)
            }
        }, status=201)
    return JsonResponse({'error': 'Invalid method'}, status=405)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return JsonResponse({'error': 'All fields are required'}, status=400)

        user = db.users.find_one({'email': email})

        if not user or not bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

        return JsonResponse({
            'message': 'Login successful!',
            'user':{
                'name': user['username'],
                'role': user['role'],
                'id': str(user['_id'])
            }  
        }, status=200)
    return JsonResponse({'error': 'Invalid method'}, status=405)

def state_wise_shg(request):
   
    url = f'https://api.data.gov.in/resource/bfea3018-cf46-4000-be72-9abf67e56802?api-key={config("SHG_API_KEY")}&format=json&limit=10'

    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return JsonResponse({'records': data['records']}, status=200)
    else:
        return JsonResponse({'error': 'Request Failed'}, status=400)
    
@csrf_exempt
@require_POST
def import_baseline(request):
    file = request.FILES.get('file')
    if not file:
        return JsonResponse({'error': 'No file provided'}, status=400)
    file_path = default_storage.save(file.name, ContentFile(file.read()))
    try:
        df = pd.read_csv(file_path)
        data = df.to_dict(orient='records')
        db.baseline.insert_many(data)
        return JsonResponse({'message': 'File uploaded and data inserted successfully!'}, status=201)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    finally:
        default_storage.delete(file_path)

@csrf_exempt
@require_POST
def import_endline(request):
    file = request.FILES.get('file')
    if not file:
        return JsonResponse({'error': 'No file provided'}, status=400)
    file_path = default_storage.save(file.name, ContentFile(file.read()))
    try:
        df = pd.read_csv(file_path)
        data = df.to_dict(orient='records')
        db.endline.insert_many(data)
        return JsonResponse({'message': 'File uploaded and data inserted successfully!'}, status=201)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    finally:
        default_storage.delete(file_path)
        
def baseline_income(request):
    if request.method == 'GET':
        data = db.baseline.find({}, {'_id': 0, 'Age': 0, 'Loan Amount': 0})
        records_list = list(data)
        json_records = json.loads(json_util.dumps(records_list))
        return JsonResponse(json_records, safe=False, status=200)
    
def baseline_loan(request):
    if request.method == 'GET':
        data = db.baseline.find({}, {'_id': 0, 'Age': 0, 'Business Income': 0})
        records_list = list(data)
        json_records = json.loads(json_util.dumps(records_list))
        return JsonResponse(json_records, safe=False, status=200)