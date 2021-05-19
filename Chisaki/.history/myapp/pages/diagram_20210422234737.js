import {useRouter} from 'next/router'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import React from 'react'
import HeadlineUI from '../comps/Headline'
import OverlayUI from '../comps/Overlay'
import PicturebuttonUI from '../comps/Picturebutton'
import PictureUI from '../comps/Picture'
import ButtonUI from '../comps/Button'
import J_Head from '../comps/J_Head'





export default function Home() {

  const [buttonstate1, setButtonState1] = useState(false);  
    
  const HandleClickButtonColor1 = () =>{
      setButtonState1(!buttonstate1);
    }
    const [buttonstate2, setButtonState2] = useState(false);  
    
    const HandleClickButtonColor2 = () =>{
        setButtonState2(!buttonstate2);
      }
      const [buttonstate3, setButtonState3] = useState(false);  
    
      const HandleClickButtonColor3 = () =>{
          setButtonState3(!buttonstate3);
        }
        const [buttonstate4, setButtonState4] = useState(false);

        const HandleClickButtonColor4 = () =>{
          setButtonState4(!buttonstate4);
        }
    const router = useRouter();
    return (
      <div>
      <J_Head/>
      <div className={styles.containerbox}>
        <PictureUI>
          <PicturebuttonUI onClick={HandleClickButtonColor1} 
      bgImage={buttonstate1 ? '/dot.png' : 'clicked.png'}/>
          <OverlayUI content="Impending feeling of doom: Anxiety incurrs a pending sense of doom that disarray your concentration"/>
          <PicturebuttonUI onClick={HandleClickButtonColor2} 
      bgImage={buttonstate2 ? '/dot.png' : 'clicked.png'}/>
          <OverlayUI content="Headache: Headache occurs when anxiety take over, this is caused by worry and stress"/>
          <PicturebuttonUI onClick={HandleClickButtonColor3} 
      bgImage={buttonstate3 ? '/dot.png' : 'clicked.png'}/>
          <OverlayUI content="Irritability:Patient had an increasing sense of irratation and stress when anxiety disorder disturbed their nerve systems"/>
          <PicturebuttonUI onClick={HandleClickButtonColor4} 
      bgImage={buttonstate4 ? '/dot.png' : 'clicked.png'}/> 
          <OverlayUI content="Depression:Anxiety disorder greatly increased the chance of patient getting into a deep stage of depression due to the altering mental status"/>
        </PictureUI>
      </div>
       <ButtonUI title="NEXT"
       routeTo='/suggestion'/>
      </div>
        
    )}