import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const CardCont1 = styled.div`
background-color:#B6E4DE;
border-radius:10px;
width: 110px;
height: 85px;
justify-content:center;
align-items;center;
color:white;
margin:5px;
`;

const CardCont2 = styled.div`
  background-color: #FAF4F0;
  border-radius:10px;
  width: 110px;
  height: 85px;
  justify-content:center;
  align-items;center;
  color:#52A1C3;
  margin:5px;
`;

const CardCont3 = styled.div`
background-color: #FAF4F0;
border-radius:10px;
width: 110px;
height: 85px;
justify-content:center;
align-items;center;
color:#52A1C3;
margin:5px;
`;

const CardCont4 = styled.div`
background-color:#B6E4DE;
border-radius:10px;
width: 110px;
height: 85px;
justify-content:center;
align-items;center;
color:white;
margin:5px;
`;

const CardCont5 = styled.div`
background-color:#B6E4DE;
border-radius:10px;
width: 110px;
height: 85px;
justify-content:center;
align-items;center;
color:white;
margin:5px;
`;

const CardCont6 = styled.div`
background-color: #FAF4F0;
border-radius:10px;
width: 110px;
height: 85px;
justify-content:center;
align-items;center;
color:#52A1C3;
margin:5px;
`;
const CardCont7 = styled.div`
background-color: #FAF4F0;
border-radius:10px;
width: 110px;
height: 85px;
justify-content:center;
align-items;center;
color:#52A1C3;
margin:5px;
`;

const CardCont8 = styled.div`
background-color:#B6E4DE;
border-radius:10px;
width: 110px;
height: 85px;
justify-content:center;
align-items;center;
color:white;
margin:5px;
`;



const CardDiv = styled.div`
width: 377px;
display:flex;
justify-content:center;
align-items:center;

`;

const WidgetDiv = styled.div`
width:80%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
flex-wrap:wrap;
`;


const WidgetH = styled.span`
font-size: 13px;
margin:10px;
text-align: center;
color:${props=>props.cr};
`;
const WidgetH2 = styled.span`
font-size: 13px;
margin:10px;
text-align: center;
color:${props=>props.cl};
`;
const Widgetcontent = styled.div`
margin:8px;
text-align: center;
justify-content:center;
display:flex;
flex-direction:column;
align-items:center;
`;


const Wig = ({
  text1="Eat Welld",
  text2="Stretching",
  text3="Stop smoking",
  text4="Self-care",
  text5="Plan your goal",
  text6="Chatting",
  text7="Determine priorities",
  text8="Adopt positive attitude"
}) =>{
  const router = useRouter();
  return <CardDiv>
        <WidgetDiv>
        <CardCont1 onClick={()=>router.push("/suggestions_01")}><Widgetcontent><img src="../../suggestions/01.png"/><WidgetH>{text1}</WidgetH></Widgetcontent></CardCont1>
        <CardCont2 onClick={()=>router.push("/suggestions_02")}><Widgetcontent><img src="../../suggestions/02.png"/><WidgetH2>{text2}</WidgetH2></Widgetcontent></CardCont2>
        <CardCont3 onClick={()=>router.push("/suggestions_03")}><Widgetcontent><img src="../../suggestions/03.png"/><WidgetH2>{text3}</WidgetH2></Widgetcontent></CardCont3>
        <CardCont4 onClick={()=>router.push("/suggestions_04")}><Widgetcontent><img src="../../suggestions/04.png"/><WidgetH>{text4}</WidgetH></Widgetcontent></CardCont4>
        <CardCont5 onClick={()=>router.push("/suggestions_05")}><Widgetcontent><img src="../../suggestions/05.png"/><WidgetH>{text5}</WidgetH></Widgetcontent></CardCont5>
        <CardCont6 onClick={()=>router.push("/suggestions_06")}><Widgetcontent><img src="../../suggestions/06.png"/><WidgetH2>{text6}</WidgetH2></Widgetcontent></CardCont6>
        <CardCont7 onClick={()=>router.push("/suggestions_07")}><Widgetcontent><img src="../../suggestions/07.png"/><WidgetH2>{text7}</WidgetH2></Widgetcontent></CardCont7>
        <CardCont8 onClick={()=>router.push("/")}><Widgetcontent><img src="../../suggestions/08.png"/><WidgetH>{text8}</WidgetH></Widgetcontent></CardCont8>
        </WidgetDiv>
  </CardDiv>
  
}


export default Wig
