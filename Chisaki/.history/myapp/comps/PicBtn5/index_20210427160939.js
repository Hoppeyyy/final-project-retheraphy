import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:280px;
left:110px;
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


const PicBtn5 = ({
bgcolor="#DADADA",
left="0",
top="0",

onClick=()=>{}  
        }) => {
       return <Cont>
       <Dots onClick={onClick} bgcolor={bgcolor} />
       </Cont>
    }

export default PicBtn5;