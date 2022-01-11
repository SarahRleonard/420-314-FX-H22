import React from 'react';
import './style.css'

import { ProgressBar } from '../components/Progress/Progress';

export default {
  title: 'Components-TP1/Progress',
  component: ProgressBar
};

const Template = (args) => <ProgressBar {...args} />;

export const Bar = Template.bind({});
Bar.args = {
  percent: '0',
};

export const Circle = Template.bind({});
Circle.args = {
  percent: '0',
  type: 'circle'
};

