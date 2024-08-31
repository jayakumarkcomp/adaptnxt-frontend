import React from 'react';
import Sidebar from './Sidebar';
import ChartContainer from './ChartContainer';
import PieChartComponent from './PieChartComponent';
import './App.css'

const App = () => {
 return (
    <div className='app'> 
    
    <Sidebar />
      <ChartContainer />
   < PieChartComponent />


    </div>
     
 )
        
};

export default App;