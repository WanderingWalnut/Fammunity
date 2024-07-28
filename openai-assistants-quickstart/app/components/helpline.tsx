import React from "react";
import styles from "./helpline.module.css";

const HelpLineWidget = ({
  helpLineText = "Its Never Too Late Talk",
  helpLineNumber = "1-877-303-2642",
  helpLine = "Alberta Mental Health Help Line",
}) => {

  return (
    <div className={styles.containerColor}>
      <div className={styles.helpLineWidgetData}>
        <p>{helpLineText}</p>
        <h2>{helpLineNumber}</h2>
        <span>{helpLine}</span>
      </div>
    </div>
  );
};

export default HelpLineWidget;
