import React from 'react';
import { Button, message } from 'antd';
const TestApp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };
  return (
    <>
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
      {contextHolder}
    </>
  );
};
export default TestApp;
