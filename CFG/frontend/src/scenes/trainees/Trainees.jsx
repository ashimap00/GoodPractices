import React from 'react'
// import employeeData from '../../files/employee_data_indian.json';
import { useState, useEffect } from 'react';
import Trainee from './Trainee';
import image from "../../assets/images/trainee_image1.jpg"
import './Trainees.scss';

export default function Trainees() {
    const [data, setdata]= useState({});
    const [trainees, settrainees] = useState([
        {
            "Full Name": "Aarav Ramesh Sharma",

            "image": {image},
            "Position": "Trainee",
            "Employee ID": "EMP567890",
            "Email": "aarav.sharma@example.com",
            "Phone Number": "+91 9876543210",
            "Hire Date": "February 14, 2021",
            "Office Location": "Bengaluru, Karnataka",
            "Manager": "Priya Verma",
            "currentstep":5
        },
        {
            "Full Name": "Priya Anand Verma",
            "Position": "Trainee",
            "Employee ID": "EMP123987",
            "Email": "priya.verma@example.com",
            "Phone Number": "+91 9123456789",
            "Hire Date": "April 20, 2019",
            "Office Location": "Mumbai, Maharashtra",
            "Manager": "Anil Gupta",
            "currentstep":7
        },
        {
            "Full Name": "Anil Kumar Gupta",
            "Position": "Trainee",
            "Employee ID": "EMP876543",
            "Email": "anil.gupta@example.com",
            "Phone Number": "+91 9988776655",
            "Hire Date": "July 11, 2018",
            "Office Location": "Hyderabad, Telangana",
            "Manager": "Radhika Singh",
            "currentstep":2
        },
        {
            "Full Name": "Radhika Pratap Singh",
            "Position": "Trainee",
            "Employee ID": "EMP234876",
            "Email": "radhika.singh@example.com",
            "Phone Number": "+91 8899007766",
            "Hire Date": "December 5, 2017",
            "Office Location": "New Delhi, Delhi",
            "Manager": "Suresh Menon",
            "currentstep":3
        },
        {
            "Full Name": "Suresh Venkatesh Menon",
            "Position": "Trainee",
            "Employee ID": "EMP345789",
            "Email": "suresh.menon@example.com",
            "Phone Number": "+91 7766554433",
            "Hire Date": "September 10, 2016",
            "Office Location": "Chennai, Tamil Nadu",
            "Manager": "Kavita Rao",
            "currentstep":8
        }
    ]);
    const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    // setSelectedCard(name === selectedCard ? null : name);
    setdata(card);
    console.log(card);

  };

  const cards = trainees.map(card => ({
    ...card,
    // revenue: `₹${calculateTotalRevenue(card.data).toLocaleString()}`,
  }));

  const selectedData = cards.find((card) => card.id === selectedCard)?.data || [];

  return (
    <div className="App">
      <header className="header">
        <h1> Trainees</h1>
      </header>
      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card)}
          >
            <img src={image} alt={card.name} className="card-image" />
            <div className="card-content">
              <h3>{card["Full Name"]}</h3>
              {/* <p className="group-name">Name: {card.group}</p> */}
              {/* <p>E-mail: {card.revenue}</p> */}
            </div>
          </div>
        ))}
      </div>
      {Object.keys(data).length !== 0 ? (
  <Trainee 
    key={data["Employee ID"]}
    name={data["Full Name"]}
    position={data["Position"]}
    id={data["Employee ID"]}
    email={data["Email"]}
    number={data["Phone Number"]}
    date={data["Hire Date"]}
    location={data["location"]}
    currentStep={data["currentstep"]}
  />
) : ""}

    </div>
  );

}
