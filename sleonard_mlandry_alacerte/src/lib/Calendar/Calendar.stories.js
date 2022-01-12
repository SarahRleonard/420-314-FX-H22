import React from 'react';
import 'antd/dist/antd.css';
import {Calendar} from 'antd';


export default{
  title: "Calendrier",
  component: Calendar,
}

function onPanelChange(value, mode) {
  console.log(value, mode);
}



export const CalendarExemple1 = () => {
  return(
    
    <Calendar onPanelChange={onPanelChange} />
  
  )
};

export const CalendarExemple2 = () => {
  return(
    <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
  )
}


