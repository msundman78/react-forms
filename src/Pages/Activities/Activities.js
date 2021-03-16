import React from 'react';
import {useState} from 'react';

import './Activities.css';
import CreateActivity from './CreateActivity';


const listActivities = [
  {time: "2021-03-15 10:30", name: "WOD", gym: "Grottan", booked: 3},
  {time: "2021-03-16 10:30", name: "WOD", gym: "Grottan", booked: 4},
  {time: "2021-03-17 10:30", name: "WOD", gym: "Utegymmet", booked: 5}  
];

const Activities = () => {
  const [actState, setActState] = useState(listActivities);

  const addActivity = (data) => {
    console.log("Add Act");
    const NewList = [...actState, data
//      {time: "2021-03-18 10:30", name: "WOD", gym: "Hemma", booked: 5}
    ];
    setActState(NewList);
  }
  const act = actState.map((a, index) => (
    <tr key={index}>
      <td>{a.time}</td>
      <td>{a.name}</td>
      <td>{a.gym}</td>
      <td>{a.booked}</td>
    </tr>
  ));

  return (
    <div className="container">
      <table className="activities-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Gym</th>
            <th>Booked</th>
          </tr>
        </thead>
          <tbody>
            {act}
          </tbody>
        </table>
        <br />
        <CreateActivity addActivity={addActivity}/>
    </div>
  );
}

export default Activities;
