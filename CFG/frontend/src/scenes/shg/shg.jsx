import React, { useState } from "react";
import "./ShgListing.css"; // Ensure you create this file for custom styles
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    name: "SHG 1",
    group:"Sankalp Group",
    grade: "B",
    trainer: "Charan Kumar",
    data: [
      { name: "Kanti Devi", age: 28, money: "₹50,000", moneyLent: "₹10,000" },
      { name: "Shakuntala", age: 32, money: "₹60,000", moneyLent: "₹15,000" },
      { name: "Kamla Thakur", age: 45, money: "₹70,000", moneyLent: "₹20,000" },
      { name: "Priya Sharma", age: 25, money: "₹80,000", moneyLent: "₹25,000" },
      { name: "Rajesh Kumar", age: 38, money: "₹90,000", moneyLent: "₹30,000" },
      { name: "Anita Singh", age: 29, money: "₹1,00,000", moneyLent: "₹35,000" },
      { name: "Amit Patel", age: 40, money: "₹1,10,000", moneyLent: "₹40,000" },
      { name: "Sunita Rani", age: 31, money: "₹1,20,000", moneyLent: "₹45,000" },
      { name: "Ravi Verma", age: 27, money: "₹1,30,000", moneyLent: "₹50,000" },
      { name: "Neha Gupta", age: 35, money: "₹1,40,000", moneyLent: "₹55,000" },
    ],
    image: "/images/img1.webp",
  },
  {
    id: 2,
    name: "SHG 2",
    group:"Udaan Collective",
    grade: "A",
    trainer:"Amit Singh",
    data: [
      { name: "Amitabh Bachchan", age: 40, money: "₹1,20,000", moneyLent: "₹60,000" },
      { name: "Deepika Padukone", age: 34, money: "₹1,50,000", moneyLent: "₹70,000" },
      { name: "Shah Rukh Khan", age: 50, money: "₹1,80,000", moneyLent: "₹80,000" },
      { name: "Alia Bhatt", age: 29, money: "₹2,00,000", moneyLent: "₹90,000" },
      { name: "Ranbir Kapoor", age: 38, money: "₹2,20,000", moneyLent: "₹1,00,000" },
      { name: "Katrina Kaif", age: 31, money: "₹2,40,000", moneyLent: "₹1,10,000" },
      { name: "Hrithik Roshan", age: 45, money: "₹2,60,000", moneyLent: "₹1,20,000" },
      { name: "Kareena Kapoor", age: 27, money: "₹2,80,000", moneyLent: "₹1,30,000" },
      { name: "Salman Khan", age: 35, money: "₹3,00,000", moneyLent: "₹1,40,000" },
      { name: "Priyanka Chopra", age: 28, money: "₹3,20,000", moneyLent: "₹1,50,000" },
    ],
    image: "/images/img2.avif",
  },
  {
    id: 3,
    name: "SHG 3",
    group:"Sahaara Team",
    grade: "B",
    trainer:"Ayush Kumar",
    data: [
      { name: "Aishwarya Rai", age: 33, money: "₹15,000", moneyLent: "₹5,000" },
      { name: "Ranveer Singh", age: 40, money: "₹16,000", moneyLent: "₹6,000" },
      { name: "Kangana Ranaut", age: 29, money: "₹17,000", moneyLent: "₹7,000" },
      { name: "Sidharth Malhotra", age: 35, money: "₹18,000", moneyLent: "₹8,000" },
      { name: "Vidya Balan", age: 42, money: "₹19,000", moneyLent: "₹9,000" },
      { name: "John Abraham", age: 27, money: "₹20,000", moneyLent: "₹10,000" },
      { name: "Sonam Kapoor", age: 37, money: "₹21,000", moneyLent: "₹11,000" },
      { name: "Anushka Sharma", age: 31, money: "₹22,000", moneyLent: "₹12,000" },
      { name: "Varun Dhawan", age: 28, money: "₹23,000", moneyLent: "₹13,000" },
      { name: "Radhika Apte", age: 36, money: "₹24,000", moneyLent: "₹14,000" },
    ],
    image: "/images/img3.jpg",
  },
  {
    id: 4,
    name: "SHG 4",
    group:"Nayi Asha",
    grade: "C",
    trainer:"Sumit Chauhan",
    data: [
      { name: "Sridevi", age: 40, money: "₹17,000", moneyLent: "₹7,000" },
      { name: "Rajnikanth", age: 34, money: "₹18,000", moneyLent: "₹8,000" },
      { name: "Madhuri Dixit", age: 45, money: "₹19,000", moneyLent: "₹9,000" },
      { name: "Kamal Haasan", age: 29, money: "₹20,000", moneyLent: "₹10,000" },
      { name: "Juhi Chawla", age: 37, money: "₹21,000", moneyLent: "₹11,000" },
      { name: "Sunny Deol", age: 28, money: "₹22,000", moneyLent: "₹12,000" },
      { name: "Rishi Kapoor", age: 36, money: "₹23,000", moneyLent: "₹13,000" },
      { name: "Amitabh Bachchan", age: 31, money: "₹24,000", moneyLent: "₹14,000" },
      { name: "Hema Malini", age: 27, money: "₹25,000", moneyLent: "₹15,000" },
      { name: "Dharmendra", age: 35, money: "₹26,000", moneyLent: "₹16,000" },
    ],
    image: "/images/img4.jpg",
  },
  {
    id: 5,
    name: "SHG 5",
    group:"Nirman Network",
    grade: "A",
    trainer:"Shruti Singh",
    data: [
      { name: "Pooja Hegde", age: 32, money: "₹14,000", moneyLent: "₹4,000" },
      { name: "Ranbir Kapoor", age: 35, money: "₹15,000", moneyLent: "₹5,000" },
      { name: "Kriti Sanon", age: 29, money: "₹16,000", moneyLent: "₹6,000" },
      { name: "Vicky Kaushal", age: 40, money: "₹17,000", moneyLent: "₹7,000" },
      { name: "Shilpa Shetty", age: 37, money: "₹18,000", moneyLent: "₹8,000" },
      { name: "Sanya Malhotra", age: 33, money: "₹19,000", moneyLent: "₹9,000" },
      { name: "Boman Irani", age: 38, money: "₹20,000", moneyLent: "₹10,000" },
      { name: "Kartik Aaryan", age: 28, money: "₹21,000", moneyLent: "₹11,000" },
      { name: "Ananya Panday", age: 42, money: "₹22,000", moneyLent: "₹12,000" },
      { name: "Siddhant Chaturvedi", age: 26, money: "₹23,000", moneyLent: "₹13,000" },
    ],
    image: "/images/img5.jpg",
  },
  {
    id: 6,
    name: "SHG 6",
    group:"Jeevan Club",
    grade: "B",
    trainer:"Akriti Sharma",
    data: [
      { name: "Amitabh Bachchan", age: 30, money: "₹16,000", moneyLent: "₹6,000" },
      { name: "Kajol", age: 32, money: "₹17,000", moneyLent: "₹7,000" },
      { name: "Saif Ali Khan", age: 28, money: "₹18,000", moneyLent: "₹8,000" },
      { name: "Rani Mukerji", age: 37, money: "₹19,000", moneyLent: "₹9,000" },
      { name: "Abhishek Bachchan", age: 35, money: "₹20,000", moneyLent: "₹10,000" },
      { name: "Riteish Deshmukh", age: 29, money: "₹21,000", moneyLent: "₹11,000" },
      { name: "Kajal Aggarwal", age: 31, money: "₹22,000", moneyLent: "₹12,000" },
      { name: "Ayushmann Khurrana", age: 36, money: "₹23,000", moneyLent: "₹13,000" },
      { name: "Emraan Hashmi", age: 28, money: "₹24,000", moneyLent: "₹14,000" },
      { name: "Aditi Rao Hydari", age: 34, money: "₹25,000", moneyLent: "₹15,000" },
    ],
    image: "/images/img6.jpg",
  },
  {
    id: 7,
    name: "SHG 7",
    group:"Sarthak Society",
    grade: "D",
    trainer:"Binod",
    data: [
      { name: "Vidya Balan", age: 31, money: "₹15,000", moneyLent: "₹5,000" },
      { name: "Varun Dhawan", age: 35, money: "₹16,000", moneyLent: "₹6,000" },
      { name: "Sushant Singh Rajput", age: 33, money: "₹17,000", moneyLent: "₹7,000" },
      { name: "Arjun Kapoor", age: 37, money: "₹18,000", moneyLent: "₹8,000" },
      { name: "Sidharth Malhotra", age: 42, money: "₹19,000", moneyLent: "₹9,000" },
      { name: "Radhika Apte", age: 27, money: "₹20,000", moneyLent: "₹10,000" },
      { name: "Aditya Roy Kapur", age: 31, money: "₹21,000", moneyLent: "₹11,000" },
      { name: "Bipasha Basu", age: 29, money: "₹22,000", moneyLent: "₹12,000" },
      { name: "Shraddha Kapoor", age: 36, money: "₹23,000", moneyLent: "₹13,000" },
      { name: "Ileana D'Cruz", age: 28, money: "₹24,000", moneyLent: "₹14,000" },
    ],
    image: "/images/img7.jpg",
  },
  {
    id: 8,
    name: "SHG 8",
    group:"Uday Group",
    grade: "A",
    trainer:"Prachi Sachdeva",
    data: [
      { name: "Naseeruddin Shah", age: 30, money: "₹14,000", moneyLent: "₹4,000" },
      { name: "Om Puri", age: 34, money: "₹15,000", moneyLent: "₹5,000" },
      { name: "Paresh Rawal", age: 29, money: "₹16,000", moneyLent: "₹6,000" },
      { name: "Boman Irani", age: 37, money: "₹17,000", moneyLent: "₹7,000" },
      { name: "Irrfan Khan", age: 35, money: "₹18,000", moneyLent: "₹8,000" },
      { name: "Manoj Bajpayee", age: 29, money: "₹19,000", moneyLent: "₹9,000" },
      { name: "Nawazuddin Siddiqui", age: 31, money: "₹20,000", moneyLent: "₹10,000" },
      { name: "Pankaj Tripathi", age: 36, money: "₹21,000", moneyLent: "₹11,000" },
      { name: "Rajkummar Rao", age: 28, money: "₹22,000", moneyLent: "₹12,000" },
      { name: "Vijay Raaz", age: 34, money: "₹23,000", moneyLent: "₹13,000" },
    ],
    image: "/images/img8.jpg",
  },
];

function calculateTotalRevenue(data) {
  return data.reduce((total, item) => {
    const value = parseInt(item.money.replace(/[^0-9]/g, ""), 10);
    return total + value;
  }, 0);
}

function SHGListing() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  const cards = cardData.map(card => ({
    ...card,
    revenue: `₹${calculateTotalRevenue(card.data).toLocaleString()}`,
  }));

  const selectedData = cards.find((card) => card.id === selectedCard)?.data || [];

  const handleEditShg = (id) => {
    navigate(`/edit-shg/${id}`);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>SHG Progress</h1>
        <button className="add-shg-button" onClick={() => navigate('/add-shg')}>Add SHG</button>
      </header>
      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.image} alt={card.name} className="card-image" />
            <div className="card-content">
              <h3>{card.name}</h3>
              <p className="group-name">{card.group}</p>
              <p>Total Revenue: {card.revenue}</p>
              <p>Grade: {card.grade}</p>
              <p>Trainer: {card.trainer}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="table-container">
          <h2>{cards.find(card => card.id === selectedCard)?.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Money</th>
                <th>Money Lent</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.money}</td>
                  <td>{item.moneyLent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SHGListing;