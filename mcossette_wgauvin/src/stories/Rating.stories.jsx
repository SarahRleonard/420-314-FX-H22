import React from 'react';

import { BasicRating } from '../components/Rating/Rating';

import './style.css'

export default {
  title: 'Components-TP1/Rating',
  component: BasicRating
};

const Template = (args) => <BasicRating {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: 'true',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: 'true',
};



