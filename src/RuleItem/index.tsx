import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const RuleItem: React.FC<any> = (props) => {
  const [form] = Form.useForm();
  const {
    value: { id, URL, webName, elementId, elementClassName, },
    sendForm,
    sendValue,
    // sendUrl
  } = props;

  const onFinish = (values: any) => {
    if (sendValue) {
      sendValue(Object.assign({}, values, { id }))
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (sendForm) {
      sendForm(form)
    }
    // chrome.tabs.getSelected(null, ({ url: fromUrl }: any) => {
    //   const [protocol, _, domain] = fromUrl.split('/');
    //   const URL = `${protocol}//${domain}`;
    //   form.setFieldsValue({ URL });
    //   sendUrl(URL);
    // });
  }, [])
  return (
    <Form
      name="basic"
      form={form}
      initialValues={{
        webName,
        URL: URL || '',
        elementId,
        elementClassName
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="网站名称"
        name="webName"
        rules={[
          {
            required: true,
            message: '请输入网站名称!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="网站地址"
        name="URL"
        rules={[
          {
            required: true,
            message: '请输入网站地址!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="元素ID"
        name="elementId"
      >
        <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode"></Select>
      </Form.Item>
      <Form.Item
        label="元素样式类名"
        name="elementClassName"
      >
        <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode"></Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RuleItem
