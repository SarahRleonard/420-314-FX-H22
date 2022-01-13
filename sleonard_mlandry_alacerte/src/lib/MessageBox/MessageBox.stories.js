import {React} from 'react';
import 'antd/dist/antd.css';
import {message, Button, Space} from 'antd';

const success = () => {
    message.success('This is a success message');
  };
  
  const error = () => {
    message.error('This is an error message');
  };

export default {
    title: "Message box Button",
    component: message,
    component: Button,
    component: Space,
};

export const Success = () => <Space><Button onClick={success}>Success</Button></Space>;
export const Error = () => <Space><Button onClick={error}>Error</Button></Space>;