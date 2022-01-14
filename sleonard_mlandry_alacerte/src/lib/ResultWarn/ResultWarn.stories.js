import {React} from 'react';
import 'antd/dist/antd.css';
import {Result, Button} from 'antd';

export default {
    title: "Warning screens",
    component: Result,
    component: Button,
}

export const Warning = () => {
    return (
        <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
        />
    )
}

export const Success = () => {
    return (
        <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
        <Button type="primary" key="console">
            Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
        ]}
        />
    )
}

Success.storyName = "Success screen";
Warning.storyName = "Security warning";