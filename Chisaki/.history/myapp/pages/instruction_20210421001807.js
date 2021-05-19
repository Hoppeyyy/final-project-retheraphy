import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'
import React from 'react'
import ButtonUI from '../comps/Button/index'
import TopBar from '../comps/TopBar/index2'
import SelectionUI from '../comps/Selection/index'
import J_Head from '../comps/J_Head'


export default function home() {
    

    const router = useRouter();

    return ( 
    <div styles={styles.body}>
    <TopBar />
    <J_Head
    title="How it works"
    subhead="Whole testing process"
    />
    <div styles={styles.containerbox}>
     <SelectionUI 
     src="../Step01.png"
     title="Take the test"
     subtext="Complete the 6 Question test"/>
     <img src="../arrow.png" styles={styles.arrow}/>
     <SelectionUI 
     src="/intro.png"
     title="Get the result"
     subtext="Get the result base on the mental test"/>
       <img src="../arrow.png" styles={styles.arrow}/>
       <SelectionUI 
     src="../Step03.png"
     title="Take our suggestion"
     subtext="Result base on the mental test"/>
    </div>
    <ButtonUI 
    title="Begin"
    subtext=""
    routeTo='/suggestion'/>
    </div>


    )
}