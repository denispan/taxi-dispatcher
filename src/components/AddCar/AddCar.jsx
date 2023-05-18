import React, {useState} from 'react';
import styles from "./AddCar.module.scss";



const AddCar = () => {
  const [isOpenAddCar, setIsOpenAddCar] = useState(false);

  const onClickAddCarHandler = () => {
    setIsOpenAddCar(!isOpenAddCar);
  }

  return (
    <>
      <button onClick={onClickAddCarHandler}>Добавить автомобиль</button>
    </>
  )
};


export default AddCar;
