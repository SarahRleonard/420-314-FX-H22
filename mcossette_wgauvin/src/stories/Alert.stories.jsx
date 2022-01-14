import React from 'react';

import { BasicAlerts } from '../components/Alert/Alert';

import './style.css'

export default {
  title: 'Components-TP1/Alert',
  component: BasicAlerts
};

const Template = (args) => <BasicAlerts {...args} />;

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  content: 'You have succeeded',
  severity: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  content: 'This is a warning',
  severity: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  title: 'Info',
  content: 'Here is some information',
  severity: 'info',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  content: 'This is an error alert',
  severity: 'error',
};


