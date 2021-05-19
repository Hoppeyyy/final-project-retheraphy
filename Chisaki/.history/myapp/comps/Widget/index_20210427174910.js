import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const CardCont1 = styled.div`
  background-color:#A5E7E4;
  background-image: url("01.png");
  border-radius:20px;
  width: 110px;
  height: 85px;
  justify-content:center;
  display:flex;
  flex-direction:row;
  color:white;
`;

const CardCont2 = styled.div`
  background-color: #CDF0EE;
  border-radius:20px;
  width: 110px;
  height: 85px;
  justify-content:center;
  flex-direction:row;

  &>*{
    color:#52A1C3;
  }
`;

const CardCont3 = styled.div`
  background-color: #CDF0EE;
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  width: 113px;
  height: 100px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#52A1C3;
  }
`;

const CardCont4 = styled.div`
  background-color: #A5E7E4;
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  width: 113px;
  height: 100px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:white;
  }
`;

const CardCont5 = styled.div`
  background-color: #A5E7E4;
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  width: 113px;
  height: 100px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:white;
  }
`;

const CardCont6 = styled.div`
  background-color: #CDF0EE;
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  width: 113px;
  height: 100px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#52A1C3;
  }
`;
const CardCont7 = styled.div`
  background-color: #CDF0EE;
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  width: 113px;
  height: 100px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#52A1C3;
  }
`;

const CardCont8 = styled.div`
  background-color: #A5E7E4;
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  width: 113px;
  height: 100px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;

    color:white;
  }
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
display:block;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 20px;
text-align: center;
color:${props=>props.cr};
`;
const WidgetH2 = styled.span`
display:block;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 20px;
text-align: center;
color:${props=>props.cl};
`;
const Widgetcontent = styled.div`
vertical-align: top;
display: inline-block;
text-align: center;
`;


const Widget = ({
  text1="Feeling anxious or worried",
  text2="Feeling guilty or worthless",
  text3="Feeling depresseed or unhappy",
  text4="Quiet or withdrawn",
  text5="Substance abuse",
  text6="Emotional outbursts",
  text7="Sleep problems",
  text8="Changes in behavior or feeling"
}) =>{
  const router = useRouter();
  return <CardDiv>
        <WidgetDiv>
        <CardCont1 onClick={()=>router.push("/indicator_tab01")}><Widgetcontent><img src="../../logo/01.png"/><WidgetH>{text1}</WidgetH></Widgetcontent></CardCont1>
        <CardCont2 onClick={()=>router.push("/indicator_tab02")}><Widgetcontent><img src="../../logo/02.png"/><WidgetH2>{text2}</WidgetH2></Widgetcontent></CardCont2>
        <CardCont3 onClick={()=>router.push("/indicator_tab03")}><Widgetcontent><img src="../../logo/03.png"/><WidgetH2>{text3}</WidgetH2></Widgetcontent></CardCont3>
        <CardCont4 onClick={()=>router.push("/indicator_tab04")}><Widgetcontent><img src="../../logo/04.png"/><WidgetH>{text4}</WidgetH></Widgetcontent></CardCont4>
        <CardCont5 onClick={()=>router.push("/indicator_tab05")}><Widgetcontent><img src="../../logo/05.png"/><WidgetH>{text5}</WidgetH></Widgetcontent></CardCont5>
        <CardCont6 onClick={()=>router.push("/indicator_tab06")}><Widgetcontent><img src="../../logo/06.png"/><WidgetH2>{text6}</WidgetH2></Widgetcontent></CardCont6>
        <CardCont7 onClick={()=>router.push("/indicator_tab07")}><Widgetcontent><img src="../../logo/07.png"/><WidgetH2>{text7}</WidgetH2></Widgetcontent></CardCont7>
        <CardCont8 onClick={()=>router.push("/indicator_tab08")}><Widgetcontent><img src="../../logo/08.png"/><WidgetH>{text8}</WidgetH></Widgetcontent></CardCont8>
        </WidgetDiv>
  </CardDiv>
  
}


export default Widget
