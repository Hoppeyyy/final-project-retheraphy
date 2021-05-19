import {useRouter} from 'next/router'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import React from 'react'
import J_head from '../comps/J_Head'
import Overlay from '../comps/Overlay'
import PicBtn1 from '../comps/PicBtn1'
import PicBtn2 from '../comps/PicBtn2'
import PicBtn3 from '../comps/PicBtn3'
import PicBtn4 from '../comps/PicBtn4'
import PicBtn5 from '../comps/PicBtn5'
import PicBtn6 from '../comps/PicBtn6'
import PictureUI from '../comps/Picture'
import ButtonUI from '../comps/Button/index2.js'
import TopBar from '../comps/TopBar/index2'






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
        const [buttonstate5, setButtonState5] = useState(false);

        const HandleClickButtonColor5 = () =>{
          setButtonState5(!buttonstate5);
        }
        const [buttonstate6, setButtonState6] = useState(false);

        const HandleClickButtonColor6 = () =>{
          setButtonState6(!buttonstate6);
        }
    const router = useRouter();
    return (
      <div className={styles.base}>
      <TopBar />
      <J_head
      title="Physical Diagram"
      subhead="Mental health effects occur on different body parts"
      />
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
          <PicBtn5 className={styles.humanbtn}
          onClick={HandleClickButtonColor5} 
          bgcolor={buttonstate4 ? "#52A1C3"  : "#DADADA"}
          />
          <PicBtn6 />
      <br></br>
      <div className={styles.buttonBox}>
       <ButtonUI 
       title="BACK"
       subtext=""
       routeTo="/learn_more"
       bgcolor="#52A1C3"
       />
       {/*CHANGE the routeTo to suggestion */}
        <ButtonUI 
       title="SEE SUGGESTION"
       subtext=""
       routeTo="/advise"
       bgcolor="#52A1C3"
       />
      </div>
      </div>
        
    )}