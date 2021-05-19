import styled from "styled-components";

const First = styled.h3`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
text-align: left;
color: #52A1C3;
margin:0;
margin-top:10px;
margin-left:20px;
font-family: Saira SemiCondensed;
`;


const Second = styled.h2`
font-style: normal;
font-weight: bold;
font-size: 25px;
text-align: center;
color: #52A1C3;
margin:0;
margin-top:5px;
margin-left:30px;
margin-bottom:20px;

`;

const Fix = styled.div`
vertical-align: left;
display: inline-block;
text-align: center;
`;

const Tabhead = ({
    Sub="",
    title="",
  }) =>{
      return <Fix><First>{title}</First><Second>{Sub}</Second></Fix>


  }

  export default Tabhead