import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import {
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Form,
  Bar,
  Line,
  Pie,
  FAQ,
  Geography,
  Calendar,
  Stream,
  SHGListing,
  SHGDetail,
  FundingPage,
  AddShg,
  QueriesList,
  QueryDetails,
  Trainors,
  TraineesAdmin,
  AdminUpload,
  LoginSignup,
  FeedbackForm,
  Trainees,
  LearningModule
} from "./scenes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list_SHG's" element={<SHGListing/>}/>
          <Route path="/shg/:id" element={<SHGDetail/>} />
          <Route path="/get_donations" element ={<FundingPage/>}/>
          <Route path="/add-shg" element ={<AddShg/>}/>
          <Route path="/follow_ups" element ={<QueriesList/>}/>
          <Route path="/query-details/:id" element={<QueryDetails/>}/>
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path='/products' element={<Shop/>}/> */}
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/trainors" element={<Trainors />} />
          <Route path="/trainees" element={<TraineesAdmin />} />
          <Route path="/adminupload" element={<AdminUpload />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/get_trainees" element={<Trainees />} />
          <Route path="/learning-module" element={<LearningModule />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
