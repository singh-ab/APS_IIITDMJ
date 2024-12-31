import React from "react";
import styles from "./Datacard.module.css";

function Datacard(props: {
  name: string;
  designation: string;
  email: string;
  phonenumber: string;
}) {
  return (
    <div className={styles.datacard}>
      <div>
        <p className={styles.namestyle}>{props.name}</p>
        <p>Designation: {props.designation}</p>
        <p>Email: {props.email}</p>
        {/* <p>Phone: {props.phonenumber}</p> */}
      </div>
    </div>
  );
}

export default Datacard;
