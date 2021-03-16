import React from 'react';
import './Activities.css';
import CreateActivity from './CreateActivity';


const listActivities = [
  {id:1, time: "2021-03-15 10:30", name: "WOD", gym: "Grottan", booked: 3},
  {id:2, time: "2021-03-16 10:30", name: "WOD", gym: "Grottan", booked: 4},
  {id:3, time: "2021-03-17 10:30", name: "WOD", gym: "Utegymmet", booked: 5}  
];

const Activities = () => {
  const act = listActivities.map((a) => (
    <tr key={a.id}>
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
        <CreateActivity />
    </div>
  );
}

export default Activities;
