/* eslint-disable react/prop-types */
import { CogIcon } from '@heroicons/react/solid';
import { Tabs } from 'antd';
import styles from "./list.module.css"
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const cards = [
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    }
]

const cards1 = [
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    }
]

const cards2 = [
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    },
    {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II"],
        status:"Daily Inspection",
    },  {
        endTime:"14/20/2022 18.00",
        warehouse:["ICHIKAWA","ICHIKAWA II","PBI"],
        status:"Daily Inspection",
    }
]

const TabsCont = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="In Progress" key="1">
        <section  className={styles.cards}>
            {cards.map((card,index) => {
                return  <Cards key={index} CardItem={card} />
            })}
        </section>
    </TabPane>
    <TabPane tab="Completed" key="2">
        <section  className={styles.cards1}>
            {cards1.map((card,index) => {
                return  <Cards key={index} CardItem={card} />
            })}
        </section>
    </TabPane>
    <TabPane tab="Failed" key="3">
        <section  className={styles.cards2}>
            {cards2.map((card,index) => {
                return  <Cards key={index} CardItem={card} />
            })}
        </section>
    </TabPane>
  </Tabs>
);

export default TabsCont;

export const Cards  = ({CardItem}) =>{
    return(
        <div className={styles.card}>
            <h3><CogIcon className={styles.icon} /> {CardItem.status}</h3>
            <p>{CardItem.endTime}</p>
            {
                CardItem.warehouse.map((ware, index) => {
                    return (<p key={index}>{ware}</p>)
                })
            }
        </div>
    )
}