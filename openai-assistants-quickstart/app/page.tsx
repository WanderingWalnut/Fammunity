"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        FAMunity
      </div>
      <div className={styles.horizontalline}></div>

      <div className={styles.subtitle}>
        <b>Connecting Families, Empowering Journeys.</b>
        <br></br>
        Alberta's Premier Family Support Network.
      </div>
      <div className={styles.textContent}>
      Welcome to FAMmunity, a platform designed to help families navigate the challenges of everyday life. Our AI-powered assistants are here to provide personalized support, guidance, and resources to help you and your loved ones thrive. Whether you're looking for advice on parenting, education, health, or more, FAMmunity is here to help.
      </div>
      <div className={styles.container}>
        <a className={styles.button} href="/examples/all">
          Begin Your Journey
        </a>
      </div>
    </main>
  );
};

export default Home;
