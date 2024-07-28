import React from "react";
import styles from "./helpline.module.css";

const HelpLineWidget = () => {
  return (
    <div className={styles.containerColor}>
      <div className={styles.helpLineWidgetData}>
        <h1>It's OK to ASK for HELP</h1>
        <ul>
          <li>
            <strong>Addictions and Mental Health Services:</strong>
            <br />
            (403) 529-3500 EXT 1
          </li>
          <li>
            <strong>Distress Center Crisis Line:</strong>
            <br />
            1-800-784-2433
          </li>
          <li>
            <strong>Suicide Help Line:</strong>
            <br />
            1-800-784-2433
          </li>
          <li>
            <strong>Mental Health Help Line:</strong>
            <br />
            1-877-303-2642
          </li>
          <li>
            <strong>Kids Help Phone:</strong>
            <br />
            1-800-668-6868
            <br />
            Kids Crisis Text Line 686868
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpLineWidget;
