import React from 'react';
import './style.css'

import { PageNumber } from '../components/Pagination/Pagination';

export default {
  title: 'Components-TP1/Pagination',
  component: PageNumber
};

const Template = (args) => <PageNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};





