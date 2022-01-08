import React from "react";
import {Button} from 'antd';
import {PropTypes} from 'prop-types';
import './Bouton.css';



export function Bouton({backgroundColor, size, ...props}) {
    return (
        <Button className="bouton-default">
          Bouton
        </Button>
      );
    };

export const BoutonPrimary = () => {
      return (
          <Button type="primary" className="bouton-primaire">
            Primary
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