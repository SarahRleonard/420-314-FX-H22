import React from 'react';
import {Checkbox} from 'antd';


function onChange(e) {console.log(`checked = ${e.target.checked}`);}

  export function Checkboite(...props){ 
    
    return(
      <section>
<Checkbox onChange={onChange}>Choix 1</Checkbox>
<br />
<Checkbox onChange={onChange}>Choix 2</Checkbox>
</section>
    );
  };

  const optionsWithDisabled = [
    {label: 'Choix 1', value: 'Choix 1'},
    {label: 'Choix 2', value: 'Choix 2', disabled: false},
  ];

  export function CheckboiteDisable(...props){
    return(
      <section>
            <Checkbox.Group options={optionsWithDisabled} disabled defaultValue={['Choix 1']} onChange={onChange}/>
      </section>
    )
  }
export default Checkboite;
