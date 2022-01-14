import {React} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Progress} from 'antd';

export default {
    title: "Progress Bars",
    component: Progress,
};

export const Finished = () => <Progress percent={100} />;
export const Error = () => <Progress percent={70} status="exception" />;

Finished.storyName = "Finished 100%";
Error.storyName = "Error alert";