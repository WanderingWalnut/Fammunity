"use client";

import React from "react";
import { useRouter } from "next/router";
import styles from "./page.module.css";
import Chat from "../../components/chat";
import FileViewer from "../../components/file-viewer";
import HelpLineWidget from "../../components/helpline";

const FunctionCalling = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <a className={styles.backButton} href="/">
          &#8592;
        </a>
        <div className={styles.column}>
          <HelpLineWidget/>
          <FileViewer />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
