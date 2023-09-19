// import React from 'react';
import { LineChart as LC, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineChart = () => {
    const data = [
        {
          "studentName": "Student 1",
          "mathMarks": 85
        },
        {
          "studentName": "Student 2",
          "mathMarks": 92
        },
        {
          "studentName": "Student 3",
          "mathMarks": 78
        },
        {
          "studentName": "Student 4",
          "mathMarks": 88
        },
        {
          "studentName": "Student 5",
          "mathMarks": 95
        },
        {
          "studentName": "Student 6",
          "mathMarks": 80
        },
        {
          "studentName": "Student 7",
          "mathMarks": 89
        },
        {
          "studentName": "Student 8",
          "mathMarks": 75
        },
        {
          "studentName": "Student 9",
          "mathMarks": 91
        },
        {
          "studentName": "Student 10",
          "mathMarks": 84
        }
      ]
      
    return (
        <div className=' mt-20 flex justify-center'> 
            <LC width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}> <Line dataKey="mathMarks"></Line> 
            <XAxis dataKey="studentName"></XAxis>
            <YAxis></YAxis>
            </LC>

        </div>
    );
};

export default LineChart;