import React from 'react'
import ProgressBar from './ProgressBar'
import { useState } from 'react';
import trainee_image1 from '../../assets/images/trainee_image1.jpg'
import './Trainee.scss';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,

    Tooltip,
    Legend
);

export default function Trainee(props) {
    const [currentStep, setCurrentStep] = useState(2); // Example: 2nd step is active
    const steps = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8', 'Module 9', 'Module 10'];
    return (
        <>
            <div className='trainee'>
                <div className='information'>
                    <div className='information_details'>
                        <strong>{props.name}</strong>

                    </div>
                    <img src={trainee_image1} />
                </div>
                <div className='details'>
                    <p>Name: {props.name}</p>
                    <p>Position: {props.position}</p>
                    <p>Employee ID: {props.id}</p>
                    <p>Email: {props.email}</p>
                    <p>Phone Number: {props.number}</p>
                    <p>Hire Date: {props.date}</p>
                    <p>Office Location:{props.location}</p>
                </div>
                <div className='header'>
                    <ProgressBar steps={steps} currentStep={props.currentStep} />
                </div>
                <div className='charts' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h1>Scores in Assignment</h1>
                    <div style={{width:"50vw"}}>
                        <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                labels: ["Assignment 1", "Assignment 2", "Assignment 3", "Assignment 4"],
                                datasets: [
                                    {
                                        // Label for bars
                                        label: "Score",
                                        // Data or value of your each variable
                                        data: [8, 7, 6, 9],
                                        // Color of each bar
                                        backgroundColor:
                                            ["aqua", "green", "red", "yellow"],
                                        // Border color of each bar
                                        borderColor: ["aqua", "green", "red", "yellow"],
                                        borderWidth: 0.5,
                                    },
                                ],
                            }}
                            // Height of graph
                            height={400}
                            options={{
                                maintainAspectRatio: false,
                                scales: {
                                    // yAxes: [
                                    //     {
                                    //         ticks: {
                                    //             // The y-axis value will start from zero
                                    //             beginAtZero: true,
                                    //         },
                                    //     },
                                    // ],
                                },
                                legend: {
                                    labels: {
                                        fontSize: 15,
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
