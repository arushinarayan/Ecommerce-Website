import React from "react";
import styles from './index.css'; 
 
const Popup = props => {
  return (
    <div className="popup" style={styles.popup}>
      <div className="box" style={styles.box}>
        <span className="close" onClick={props.handleClose} style={styles.close}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;