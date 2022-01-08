import React from "react";
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './avatar.css';

export function Badge(...props){
    return(
        <Avatar style={{backgroundColor: '#87d068',}}icon={<UserOutlined />} />
    );
};

export function BadgeInitial(...props){
    return(
        <Avatar style={{color: '#f56a00',backgroundColor: '#fde3cf',}}>
      U
    </Avatar>
    );
};

export default Badge;