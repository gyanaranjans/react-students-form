import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [attendance, setAttendance] = useState([]);
  const [rollNumber, setRollNumber] = useState('');
  const [name, setName] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  useEffect(() => {
    console.log(attendance);
  }, [attendance]);

  const handleRollNumberChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCheckInTimeChange = (e) => {
    setCheckInTime(e.target.value);
  };

  const handleCheckOutTimeChange = (e) => {
    setCheckOutTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttendance([
      ...attendance,
      {
        rollNumber,
        name,
        checkInTime,
        checkOutTime,
      },
    ]);
    setRollNumber('');
    setName('');
    setCheckInTime('');
    setCheckOutTime('');
  };

  const presentStudents = attendance.filter((student) => !student.checkOutTime);

  return (
    <div className="container">
      <h1>Student Attendance</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Roll Number:
          <input
            type="text"
            value={rollNumber}
            onChange={handleRollNumberChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Check-in Time:
          <input
            type="text"
            value={checkInTime}
            onChange={handleCheckInTimeChange}
          />
        </label>
        <br />
        <label>
          Check-out Time:
          <input
            type="text"
            value={checkOutTime}
            onChange={handleCheckOutTimeChange}
          />
        </label>
        <br />
        <button type="submit">Mark attendance</button>
      </form>
      <h2>Present Students:</h2>
      <ul>
        {presentStudents.map((student) => (
          <li key={student.rollNumber}>
            {student.rollNumber}: {student.name}
          </li>
        ))}
      </ul>
      <p>Total number of students present: {presentStudents.length}</p>
    </div>
  );
}

export default App;
