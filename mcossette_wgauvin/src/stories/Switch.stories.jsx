import React from 'react';

import { BasicSwitch } from '../components/Switch/Switch';

import './style.css'

export default {
  title: 'Components-TP1/Switch',
  component: BasicSwitch
};

const Template = (args) => <BasicSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
};

