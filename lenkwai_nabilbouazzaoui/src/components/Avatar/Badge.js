import React from "react";
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

export function Badge(...props){
    return(
        <Avatar icon={<UserOutlined />} />
    );
};

export function BadgeInitial(...props){
    return(
        <Avatar>E</Avatar>
    );
};

export default Badge;