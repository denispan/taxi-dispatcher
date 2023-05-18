import React, {useState} from 'react';
import styles from "./Orders.module.scss";


const Orders = (ordersList) => {
  const [isOpenOrders, setIsOpenOrders] = useState(false);

  const onClickOrdersHandler = () => {
    setIsOpenOrders(!isOpenOrders);
  }

  return (
    <>
      <button className={'btn'} onClick={onClickOrdersHandler}>История заказов</button>
      { isOpenOrders &&
        (<div className={styles.orders_popup}>
          <ul>
            {/*{*/}
            {/*  ordersList.map((orderItem, index) =>*/}
            {/*  <li key={index}*/}
            {/*      className={styles.orders_item}*/}
            {/*  >*/}
            {/*    {orderItem.orderName}*/}
            {/*  </li>*/}
            {/*)}*/}
          </ul>
        </div>)}
    </>
  )
};

export default Orders;
