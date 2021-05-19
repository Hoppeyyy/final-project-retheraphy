import React from 'react';
import styled from 'styled-components';

const ContentStyle = styled.div`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    text-indent:20px;
    font-size:18px;
    width:375px;
    `;

const Pstyle = styled.p`
    margin:5px;
`;

const J_Content =({
content
})=> {
    return (
        <ContentStyle>
            <Pstyle>{content}</Pstyle>
        </ContentStyle>
     
    )
}
export default J_Content;