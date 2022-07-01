/* eslint-disable no-unused-vars */
import { ChartBarIcon, CogIcon, SaveIcon } from '@heroicons/react/solid';
import { Button, Modal } from 'antd';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../utils/context/globalContext';
import styles from "./details.module.css"


const EquipmentDetail = () => {
  const [isModalVisible,setIsModalVisible] = useState(true);
  const {equipmentDetails,setEquipmentDetails} = useContext(GlobalContext);
  console.log(equipmentDetails)
  const route = useNavigate();
  
  const handleNext = () => {
    setIsModalVisible(false);
    route("/dailyInspection");
  };

  const handleRescan = () => {
    setIsModalVisible(false);
    setEquipmentDetails({})
  };
  const equipment = JSON.parse(equipmentDetails);
  console.log(equipment)
  return (
    <>
      <Modal title="Equipment Detail" visible={isModalVisible} footer={[
          <Button key="back" onClick={handleRescan}>
            Rescan
          </Button>,
            <Button key="next" onClick={handleNext}>
             Next
            </Button>
        ]} >
         <span className={styles.icons}>
            <CogIcon className={styles.icon} />
            <ChartBarIcon className={styles.icon} />
         </span>
       
        <section className={styles.details}>
            
            {Object.keys(equipment).map(function(key, index) {
                return <p key={index}>{key}: <span>{equipment[key]}</span> </p>
            })}
        </section>
      </Modal>
    </>
  );
};

export default EquipmentDetail;