import React from "react";
import Header from "../components/header";
import Container from "../components/container";
import styles from "../styles/works.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Works1 from "../public/works/works1.png";
import Works2 from "../public/works/works2.png";
import Works3 from "../public/works/works3.png";
import Works4 from "../public/works/works4.png";

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Container>
        <div className={styles.header}>
          <Header title="ワークス" />
          <nav className={styles.nav}>
            <Link href="/">
              <p className={styles.text}>トップ</p>
            </Link>
            <Link href="/about">
              <p className={styles.text}>アバウト</p>
            </Link>
            <Link href="/contact">
              <p className={styles.text}>コンタクト</p>
            </Link>
          </nav>
        </div>
        <div className={styles.imgsList}>
        <Link href="https://test-works1.vercel.app/" target="_blank" className={styles.imgs}>
          <Image src={Works1} width={330} height={200} alt="works1"></Image>
        </Link>
        <Link href="https://test-works2.vercel.app/" target="_blank" className={styles.imgs}>
          <Image
            src={Works2}
            width={330}
            height={200}
            alt="works2"
          ></Image>
        </Link>
        <Link href="https://test-works3.vercel.app/"  target="_blank" className={styles.imgs}>
          <Image
            src={Works3}
            width={330}
            height={200}
            alt="works3"
          ></Image>
        </Link>
      </div>
      </Container>
     
    </motion.div>
  );
};

export default Works;
