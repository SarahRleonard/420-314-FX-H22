import React from 'react';
import './style.css'

import { Sider } from '../components/Menu/Menu';

export default {
  title: 'Components-TP1/Menu',
  component: Sider
};

const Template = (args) => <Sider {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  menuMode: 'vertical',
};

export const Inline = Template.bind({});
Inline.args = {
  menuMode: 'inline',
};





