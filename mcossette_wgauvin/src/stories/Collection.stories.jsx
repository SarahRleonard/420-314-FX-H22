import React from 'react';
import './style.css'

import { Collection } from '../components/Collection/Collection';

export default {
  title: 'Components-TP1/Collection',
  component: Collection
};

const Template = (args) => <Collection {...args} />;

export const Small = Template.bind({});
Small.args = {
  width: 100,
};

export const Medium = Template.bind({});
Medium.args = {
  width: 200,
};

export const Large = Template.bind({});
Large.args = {
  width: 300,
};



