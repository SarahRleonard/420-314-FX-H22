import {React} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Alert} from 'antd';

export default {
    title: "Alerts",
    component: Alert,
    describe: "This is a description."
};

export const Success = () => <Alert message="Success Text" type="success" />;
export const Info = () => <Alert message="Info Text" type="info" />;

Success.storyName = "Success alert";
Info.storyName = "Info alert";