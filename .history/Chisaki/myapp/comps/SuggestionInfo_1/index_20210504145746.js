import React from 'react'
import styled from 'styled-components';

const Tabs = styled.div`
  background-color:${props=>props.bg};
  background-size: 100% 100%;
  padding:150px 28px 110px 28px;
  border-radius:20px;
  width: 322px;
  height: 411px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  vertical-align: center;
  display:inline-block;
  text-align: center;
  &>*{
    color:#FFF;
  }
`;
const Headstick = styled.img`
width:50px;
height:50px;
justify-content:center;
align-content: center;
display:inline-flex;
`;
const Detail = styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
text-align: center;
justify-content:center;
color: #52A1C3;
`;

const Tit = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
text-align: center;
color: #52A1C3;
justify-content:center;
align-content: center;
`;

const Spa = styled.span`
color: red;
`;
const SuggestionInfo_1 = ({
    bgcolor="#FAF4F0",
    src="",
    title="",
    text="",
    text2="",
  }) =>{
    return <Tabs bg={bgcolor}><Headstick src={src}/><Tit>{title}</Tit><Detail>{text}<Spa>{text2}</Spa></Detail>
    </Tabs>

}

export default SuggestionInfo_1