import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components'


const 


const Img = styled.img`
    margin:0,
    width:107px;
    height:62px;
    display: block
    text-align: center,
`;

const Headline = styled.h2`
font-family: Saira SemiCondensed;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 25px;
text-align: center;
color: #52A1C3;`;

const Subhead = styled.p`
font-family: Saira SemiCondensed;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
text-align: center;
color: #52A1C3;`;


    const SelectionUI = ({
      title="Take the test",
      subtext="Complete the 6 Questions test",
      src="https://placekitten.com/50/50",
      }) => {
        return <div styles={styles.containerbox}>
        <Img src={src} />
        <Headline>{title}</Headline>
        <Subhead>{subtext}</Subhead>
        </div>
      }
  
export default SelectionUI;
