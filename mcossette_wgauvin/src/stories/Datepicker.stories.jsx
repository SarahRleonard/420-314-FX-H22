import React from 'react';
import './style.css'

import { Datepicker } from '../components/Datepicker/Datepicker';

export default {
  title: 'Components-TP1/Datepicker',
  component: Datepicker
};

const Template = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  bordered: true,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  bordered: false,
};





