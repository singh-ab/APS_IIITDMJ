import React from 'react'
import styles from './page.module.css';

function Datacard(props: { name: string; designation: string; email: string; phonenumber: string; }) {

  return (

    <div className={styles.datacard}>
      <div>
        <p className={styles.namestyle}>
          {props.name}
        </p>
        <p>Desig: {props.designation}<br/></p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phonenumber}</p>
      </div>
      <div className={styles.ImgData}>
        Image
      </div>
    </div>
  )
}

export default Datacard
