import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './char.css'
const data = [{
    name: '6/30/2024',
    orders: 1.6,
    sales: 1.4,
    avgOrderValue: 351,
  },
  {
    name: '7/6/2024',
    orders: 1.2,
    sales: 1.2,
    avgOrderValue: 351,
  },
  {
    name: '7/13/2024',
    orders: 0.8,
    sales: 0.8,
    avgOrderValue: 351,
  },
  {
    name: '7/20/2024',
    orders: 0.8,
    sales: 0.6,
    avgOrderValue: 351,
  },
  {
    name: '7/27/2024',
    orders: 0.8,
    sales: 0.4,
    avgOrderValue: 351,
  },]

const ChartContainer = () => {
  return (
    <>
 
    <div className='char'>
        <h1> Order vs Sale</h1>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#FFA500" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sales" stroke="#4682B4" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div></>
    
  );
};

export default ChartContainer;