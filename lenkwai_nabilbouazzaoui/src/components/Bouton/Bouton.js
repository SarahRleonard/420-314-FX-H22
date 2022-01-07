import React from "react";
import {Button} from 'antd';
import {PropTypes} from 'prop-types';

export function Bouton({backgroundColor, size, ...props}) {
    return (
        <Button>
          Exemple
        </Button>
      );
    };

Bouton.propTypes = {

    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Bouton.defaultProps = {
    backgroundColor: null,
    size: 'medium',
  };
  

export default Bouton;