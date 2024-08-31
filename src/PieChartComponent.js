import React from 'react';
import { PieChart, Pie, Cell, Legend,  } from 'recharts';
import './pies.css'
const data = [
  { name: 'WooCommerce Store', value: 1170 },
  { name: 'Shopify Store', value: 1489 },
];
const COLORS = ['#f4777f', '#43d1c3'];

const PieChartComponent = () => {
  return (
    <>
    
    <div className='pies'>
      
        
      <PieChart width={500} height={500}>
      <text x="50%" y={20} textAnchor="middle" dominantBaseline="middle" fontSize={24} fontWeight="bold" fill="#000">
    Portion Sales
  </text>
    
      <Pie
  data={data}
  dataKey="value"
  nameKey="name"
  cx="50%"
  cy="50%"
  outerRadius={120}
  fill="#8884d8"
  label={({ percent, value, name }) => `${name}-${value}-${Math.ceil(percent*100)}%`}
>
  {data.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  ))}
</Pie>
        <Legend verticalAlign="bottom" height={36} />
        <text>44%</text><text x="50%" y={260} textAnchor="middle" dominantBaseline="middle" fontSize={24} fontWeight="bold" fill="#000">
          2659 
        </text>
        <text x="50%" y={280} textAnchor="middle" dominantBaseline="middle" fontSize={14} fontWeight="bold" fill="#000">
          Total
        </text>
      </PieChart>
    </div>
    </>
  );
};

export default PieChartComponent;



