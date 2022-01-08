import React from "react";
import {Switch} from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export function Switched(...props){
    return(
      <Switch defaultChecked onChange={onChange} />
        
    );
};

export function SwitchedDisa(...props){
            return (
              <Switch disabled />

            );
          };
        


export default Switched;