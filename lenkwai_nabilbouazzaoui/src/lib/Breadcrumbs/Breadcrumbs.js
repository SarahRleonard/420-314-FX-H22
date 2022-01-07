import React from "react";
import {Breadcrumb} from 'antd';
import {HomeOutlined, QqOutlined} from '@ant-design/icons';

export function Breadcrumbs(...props){
    return(
        <Breadcrumb>
        <Breadcrumb.Item><a href="">Accueil</a></Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Lorem</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Active</Breadcrumb.Item>
      </Breadcrumb>
    );
};

export function BreadcrumbIcons(...props){
    return(
        <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <QqOutlined />
      <span>Lorem</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Active</Breadcrumb.Item>
  </Breadcrumb>
    );
};
export default Breadcrumbs;