"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Welcome to FAMmunity! 🎉
      </div>
      <div className={styles.subtitle}>
        Connecting Families, Empowering Journeys.
      </div>
      <div className={styles.container}>
        <a className={styles.category} href="/examples/all">
          Begin Your Journey
        </a>
      </div>
    </main>
  );
};

export default Home;
