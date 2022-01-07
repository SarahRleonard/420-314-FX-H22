import React from 'react';

export function Input({...props}) {

    return (
        <input type="text"/>
      );
    };

    export function InputPlaceholder({...props}) {

        return (
            <input type="text" placeholder="123-45-678"/>
          );
        };
export default Input;