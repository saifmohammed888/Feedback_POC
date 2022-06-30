import { HomeOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useContext } from 'react';
const { Option } = Select;

import React from 'react'
import { GlobalContext } from '../../utils/context/globalContext';

const SelectItem = () => {

  const {setWarehouse} = useContext(GlobalContext);
    
  return (
    <div>
        <Select
            showSearch
            onSelect={(value) => {
                console.log(value); 
                setWarehouse(value)}}
            style={{
            width: "80vw",
            margin: '0 auto',
            }}
            placeholder={<div><HomeOutlined/>  Select a Warehouse</div>}
            optionFilterProp="children"
        >
        <Option value="ICHI">ICHI</Option>
        <Option value="ICHIKAWA 1">ICHIKAWA 1</Option>
        <Option value="ICHIKAWA 2">ICHIKAWA 2</Option>
        <Option value="ICHIKAWA 3">ICHIKAWA 3</Option>
      </Select>
    </div>
  )
}

export default SelectItem
