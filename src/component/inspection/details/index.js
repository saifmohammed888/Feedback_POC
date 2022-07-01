import { Button, Modal, Space } from 'antd';

const info = () => {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),

    onOk() {},
  });
};

const EquipmentDetail = () => (
  <Space wrap>
    <Button onClick={info}>Info</Button>
  </Space>
);

export default EquipmentDetail;