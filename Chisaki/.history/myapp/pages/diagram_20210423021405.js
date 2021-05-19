import {useRouter} from 'next/router'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import React from 'react'
import TopBar from '../comps/TopBar'
import HeadlineUI from '../comps/S_Headline'
import OverlayUI from '../comps/Overlay'
import PicturebuttonUI from '../comps/Picturebutton'
import PictureUI from '../comps/Picture'
import ButtonUI from '../comps/Button'
import J_Head from '../comps/J_Head'





export default function Home() {

  const [buttonstate1, setButtonState1] = useState(false);  
    
import {useRouter} from 'next/router'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import React from 'react'
import HeadlineUI from '../comps/Headline'
import Overlay from '../comps/Overlay'
import PicBtn1 from '../comps/PicBtn1'
import PicBtn2 from '../comps/PicBtn2'
import PicBtn3 from '../comps/PicBtn3'
import PicBtn4 from '../comps/PicBtn4'
import PictureUI from '../comps/Picture'
import Button from '../comps/Button/index2.js'






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
      <HeadlineUI/>
      <div className={styles.containerbox}>

        <PictureUI className={styles.humanpic} />

        <PicBtn1 className={styles.humanbtn} 
          onClick={HandleClickButtonColor1} 
          bgcolor={buttonstate1 ? "#52A1C3" : "#DADADA"}
          />
          <Overlay className={styles.humantext} 
          onClick={HandleClickButtonColor1} 
          visivility={buttonstate1 ? "visible" : "hidden"}
          content="Headache: Headache occurs when anxiety take over, this is caused by worry and stress"
          />
          <PicBtn2 className={styles.humanbtn}
          onClick={HandleClickButtonColor2} 
          bgcolor={buttonstate2 ? "#52A1C3" : "#DADADA"}
          />
          <Overlay className={styles.humantext} 
          onClick={HandleClickButtonColor2} 
          visivility={buttonstate2 ? "visible" : "hidden"} 
          content="Impending feeling of doom: Anxiety incurrs a pending sense of doom that disarray your concentration"
          />
          <PicBtn3 className={styles.humanbtn}
          onClick={HandleClickButtonColor3} 
          bgcolor={buttonstate3 ? "#52A1C3"  : "#DADADA"}
          />
          <Overlay className={styles.humantext} 
          onClick={HandleClickButtonColor3} 
          visivility={buttonstate3 ? "visible" : "hidden"}  
          content="Irritability:Patient had an increasing sense of irratation and stress when anxiety disorder disturbed their nerve systems"
          />
          <PicBtn4 className={styles.humanbtn}
          onClick={HandleClickButtonColor4} 
          bgcolor={buttonstate4 ? "#52A1C3"  : "#DADADA"}
          /> 
          <Overlay className={styles.humantext} 
          onClick={HandleClickButtonColor4} 
          visivility={buttonstate4 ? "visible" : "hidden"}  
          content="Depression:Anxiety disorder greatly increased the chance of patient getting into a deep stage of depression due to the altering mental status"
          />
        
      </div>
      <br></br>
      <div className={styles.buttonBox}>
       <Button 
       title="NEXT"
       subtext=""
       routeTo="/suggestion"
       />
      </div>
      </div>
        
    )}