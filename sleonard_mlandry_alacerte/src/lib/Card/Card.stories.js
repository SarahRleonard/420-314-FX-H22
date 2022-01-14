import React from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';

const {Meta} = Card;

export default {
    title: "Cards",
    component: Card,
};

export const CardOne = () =>{
    return (
        <Card hoverable
        style={{width: 240}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    )
}

export const CardTwo = () =>{

    return(
        <Card style={{width:300}}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
    )
};