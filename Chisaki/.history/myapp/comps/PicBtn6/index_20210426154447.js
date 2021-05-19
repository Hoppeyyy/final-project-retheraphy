import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:340px;
left:120px;
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


const PicBtn6 = ({
bgcolor="#DADADA",

onClick=()=>{}  
        }) => {
       return <Cont>
       <Dots onClick={onClick} bgcolor={bgcolor} />
       </Cont>
    }

export default PicBtn6;