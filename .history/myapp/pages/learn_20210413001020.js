import Head from 'next/head'
import styled from 'styled-components';
import React, {useState} from 'react';
import styles from '../styles/Home.module.css'
import HeadingUI from '../comps/Heading'
import ContentUI from '../comps/Content/index2.js'
import ImgBoxUI from '../comps/ImgBox'




export default function Learn() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
    <HeadingUI />
    </div>
    <div className={styles.contentBox}>
    <ContentUI 
    heading="1: Anxiety disorders"
    content="Symptoms can include excessive worrying, feeling agitated, restlessness, fatigue, tense muscles, difficulty sleeping, and panic attacks."
    />
    <ContentUI
    heading="2: Major depressive disorder"
    content="Symptoms include depressed mood, diminished interest or pleasure, change in weight, appetite and sleep patterns, fatigue, and a feeling of worthlessness."
    />
    <ContentUI />
    </div>
    <div className={styles.imgbox}>
      <ImgBoxUI />
    </div>
    </div>

  )
}