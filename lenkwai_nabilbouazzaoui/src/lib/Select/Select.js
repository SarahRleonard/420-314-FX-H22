import React from 'react';
import './Select.css';

export function Select({...props}) {
  return (
    <select name="items" id="items">
      <option value="item1">items</option>
      <option value="item2">Item-1</option>
      <option value="item3">Item-2</option>
      <option value="item4">Item-3</option>
    </select>
  );
}

export function SelectStyled({...props}) {
  return (
    
      <select name="items" id="items" className='styledSelec'>
        <option value="item1">Item-1</option>
        <option value="item2 ">Item-2</option>
        <option value="item3">Item-3</option>
        <option value="item4">Item-4</option>
      </select>
  );
}

export default Select;
