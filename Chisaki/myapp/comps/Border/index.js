
import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const BorderStyle = styled.div`
    height:360px;
    width:90%;
    border:#82DED9 solid 2px;
    margin-left:20px;
    overflow:auto;
    `;


const BpStyle = styled.p`
color:#52A1C3;
font-family: 'Saira Semi Condensed', sans-serif;
text-align:left;
font-size:16px;

`;

const Header = styled.p`
color:#52A1C3;
font-family: 'Saira Semi Condensed', sans-serif;
text-align:left;
font-weight:bold; 
font-size:16px;

`;
const BorderUI=({
    
    })=> {
        return (
      <BorderStyle>
          <Header>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY</Header>
          <BpStyle>Psychological tests are formalized measures of mental functioning. Most are objective and quantifiable;</BpStyle>
          <BpStyle>however, certain projective tests may involve some level of subjective interpretation. Also known as inventories, measurements, questionnaires, and scales, psychological tests are administered in a variety of settings, including preschools, primary and secondary schools, colleges and universities, hospitals, outpatient healthcare settings, and social agencies. </BpStyle>
          <BpStyle>They come in a variety of formats, including written, verbal, and computer administered.</BpStyle>
          <Header>PRIVACY POLICY</Header>
          <BpStyle>We care about data privacy and security. Please review our Privacy Policy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. If you access the Site from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site or Services</BpStyle>
            <Header>USER DATA</Header>
          <BpStyle>We will maintain certain data that you transmit to the Site for the purpose of managing the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</BpStyle>
     </BorderStyle>
    )
} 
export default BorderUI;