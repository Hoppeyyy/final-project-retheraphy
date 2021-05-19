import React from 'react';
import styled from 'styled-components';

const ContentStyle = styled.div`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    font-size:16px;
    width:377px;
    `;

const Pstyle = styled.p`
    font-family: 'Saira Semi Condensed', sans-serif;
    margin-left:20px;
    width:90%;
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
=======
        <div className={styles.title}
        style={contentStyle()}>
          <p className={styles.title} style={pStyle()}>
           Retheraph is come from theraphist, our goal is to make our app be like your therphist that show the potential illness you may have.
         Mental health is always an issue across different country, people may easily ignore their mental health due to busy work life  
          Our main goal is to help people to record their mental issues , keep tracking their emotion/feeling everyday. Also, educate people to build a good mental health.
          </p>
        </div>
      )
}  
>>>>>>> 92180026e279c27027a0a44e85942217d07ab023
export default J_Content;