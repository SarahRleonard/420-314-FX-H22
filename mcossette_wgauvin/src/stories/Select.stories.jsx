import React from 'react';

import { SelectLabels } from '../components/Select/Select';

import './style.css'

export default {
  title: 'Components-TP1/Select',
  component: SelectLabels
};

const Template = (args) => <SelectLabels {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  variant: 'standard'
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Label',
  variant: 'filled'
};

