import React from 'react';
import 'antd/dist/antd.css';
import {Pagination} from 'antd';

export default {
    title: "Pagination",
    component: Pagination,
   
};

export const PagingOne = () =>
    <Pagination defaultCurrent={1} total={50} />;

export const PagingTwo = () =>
    <Pagination defaultCurrent={6} total={500} />;

  