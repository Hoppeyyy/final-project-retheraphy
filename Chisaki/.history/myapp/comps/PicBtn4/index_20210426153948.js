import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:265px;
left:140px;
width: 375px;
height: 400px;
display: block;
`;

const Dots = styled.div`
postion: relative;
height: 13px;
width: 13px;
border-radius:5px;
background:${props=>props.bgcolor};
margin:30px 0;
`;


const PicBtn4 = ({
bgcolor="#DADADA",

onClick=()=>{}  
        }) => {
       return <Cont>
       <Dots onClick={onClick} bgcolor={bgcolor} />
       </Cont>
    }

export default PicBtn4;