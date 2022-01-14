import React from 'react';

import { BasicButton } from '../components/Button/Button';

import './style.css'

export default {
  title: 'Components-TP1/Button',
  component: BasicButton
};

const Template = (args) => <BasicButton {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: 'Label',
  variant: 'contained'
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Label',
  variant: 'outlined'
};

