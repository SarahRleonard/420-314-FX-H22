import React from 'react';
import './Link.css';

 export function Link({...props}) {

    return (
        <a href="#">
          Cliquez ici
        </a>
      );
    };

    export function Linkdesabled({...props}) {

        return (
            <a className='link' >
              Cliquez ici
            </a>
          );
        };

export default Link;