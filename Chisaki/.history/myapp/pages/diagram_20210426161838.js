import {useRouter} from 'next/router'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import React from 'react'
import J_head from '../comps/J_Head'
import Overlay from '../comps/Overlay'
import Overlay2 from '../comps/Overlay2'
import Overlay3 from '../comps/Overlay3'
import Overlay4 from '../comps/Overlay4'
import Overlay5 from '../comps/Overlay5'
import Overlay6 from '../comps/Overlay6'
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
          content="Headache: stress can trigger and intensity tension headaches"
          />
          <PicBtn2 className={styles.humanbtn}
          onClick={HandleClickButtonColor2} 
          bgcolor={buttonstate2 ? "#52A1C3" : "#DADADA"}
          />
          <Overlay2 className={styles.humantext} 
          onClick={HandleClickButtonColor2} 
          visivility={buttonstate2 ? "visible" : "hidden"} 
          content="Heartburn: stress increases the production of stomach acid, which could lead to heartburn or make it worse"
          />
          <PicBtn3 className={styles.humanbtn}
          onClick={HandleClickButtonColor3} 
          bgcolor={buttonstate3 ? "#52A1C3"  : "#DADADA"}
          />
          <Overlay3 className={styles.humantext} 
          onClick={HandleClickButtonColor3} 
          visivility={buttonstate3 ? "visible" : "hidden"}  
          content="Rapid breathing: The tensed muscle at the lung cause rapid breath and short-take of breathing. Which proves to be dangerous"
          />
          <PicBtn4 className={styles.humanbtn}
          onClick={HandleClickButtonColor4} 
          bgcolor={buttonstate4 ? "#52A1C3"  : "#DADADA"}
          /> 
          <Overlay4 className={styles.humantext} 
          onClick={HandleClickButtonColor4} 
          visivility={buttonstate4 ? "visible" : "hidden"}  
          content="Weaken immune system: Long term stress and irritation weaken your immune system and open you for infection "
          />
          <PicBtn5 className={styles.humanbtn}
          onClick={HandleClickButtonColor5} 
          bgcolor={buttonstate5 ? "#52A1C3"  : "#DADADA"}
          />
           <Overlay5 className={styles.humantext} 
          onClick={HandleClickButtonColor5} 
          visivility={buttonstate5 ? "visible" : "hidden"}  
          content="Stomachache: stress affects your body’s digestive system, which can lead to stomachaches and other tummy troubles"
          />
          <PicBtn6 className={styles.humanbtn}
          onClick={HandleClickButtonColor6} 
          bgcolor={buttonstate6 ? "#52A1C3"  : "#DADADA"}
          />
            <Overlay6 className={styles.humantext} 
          onClick={HandleClickButtonColor6} 
          visivility={buttonstate6 ? "visible" : "hidden"}  
          content="Tensed Muscle: Stress makes muscle tense up, and chronic stress leads to tension-related headache and backaches"
          />
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