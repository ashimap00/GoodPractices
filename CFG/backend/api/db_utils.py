from pymongo import MongoClient
from decouple import config

client = MongoClient(config('MONGO_URI'))
db = client.get_database('test')
