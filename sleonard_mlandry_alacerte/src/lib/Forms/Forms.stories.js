import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button, message, Checkbox, Space} from 'antd';

export default {
    title: "Forms",
    component: Form, Input, Button, Checkbox,
}

export const FormConnexion = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };

  export const FormUrl = () => {
    
        const [form] = Form.useForm();
      
        const onFinish = () => {
          message.success('Submit success!');
        };
      
        const onFinishFailed = () => {
          message.error('Submit failed!');
        };
      
        const onFill = () => {
          form.setFieldsValue({
            url: 'https://taobao.com/',
          });
        };
      
        return (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="url"
              label="URL"
              rules={[
                {
                  required: true,
                },
                {
                  type: 'url',
                  warningOnly: true,
                },
                {
                  type: 'string',
                  min: 6,
                },
              ]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={onFill}>
                  Fill
                </Button>
              </Space>
            </Form.Item>
          </Form>
        );
      };
  