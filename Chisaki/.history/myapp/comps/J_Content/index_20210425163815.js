import React from 'react';
import styled from 'styled-components';

const ContentStyle = styled.div`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    margin-left:20px;
    font-size:16px;
    width:375px;
    `;

const Pstyle = styled.p`
    font-family: 'Saira Semi Condensed', sans-serif;
`;

const J_Content =({
content="abc"
})=> {
    return (
        <ContentStyle>
            <Pstyle>{content}</Pstyle>
        </ContentStyle>
     
    )
}
export default J_Content;