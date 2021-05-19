import styled from 'styled-components'



const Headline = styled.h2`
display: flex;
position: relative;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 47px;
color: #52A1C3;
`;
const Subhead = styled.h3`
display: flex;
position: relative;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 28px;
color: #52A1C3;
`;

const TitleUI = ({
    title,
    subtitle
        }) => {
        return <div>
        <Headline>{title}</Headline>
        <Subhead>{subtitle}</Subhead>
        </div>
        }
        
        export default TitleUI;