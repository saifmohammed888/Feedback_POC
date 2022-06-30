/* eslint-disable no-unused-vars */
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Modal } from 'antd';
import { useState } from 'react';
import styles from "./loader.module.css"


const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
);

export const Loader = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <>
      <Modal className={styles.modal} visible={isModalVisible}>
         Processing please wait... <Spin indicator={antIcon} />
      </Modal>
    </>
  );
};
