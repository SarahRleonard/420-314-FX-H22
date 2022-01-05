import React from 'react';
import './Header.css';


export function Header({...props}) {

    return (
        <h1>
         Hello Header
        </h1>
      );
    };

    export function HeaderStyled({...props}) {

      return (
          <h1 className='header'>
           Hello Header
          </h1>
        );
      }; 
export default Header;
