import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'
import React from 'react'
import Button from '../comps/Button/index2'
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
     src="apps_pic/test.jpg"
     title="Take the test"
     subtext="Complete the 6 Question test"
     routeTo="/s_test"
     borderTop=""
      borderBottom="0"
     />
    
     <SelectionUI 
     src="apps_pic/result.jpg"
     title="Get the result"
     subtext="Get the result base on the mental test"
     routeTo="/s_result"
     borderTop="0"
     borderBottom="0"
     />
   
       <SelectionUI 
        src="apps_pic/img_learn.png"
        title="Take our suggestion"
        subtext="Result base on the mental test"
        routeTo="/s_suggestion"
        borderTop="0"
        borderBottom=""
        />
    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="Begin"
    subtext=""
    routeTo='/question1'
    />
    </div>
    </div>


    )
}