import styled  from  'styled-components'
import React from 'react';

const Subtext =styled.div`
    color:#FFFFFF;
    text-align:centre; 
    fontfamily: 'Roboto sans-serif';
    width:100px; 
`; 

const SubtextUI =({
    text=""
}) => {
    return(
    <div>
    <Subtext>{text}</Subtext>
    </div>
    )
}

export default SubtextUI;
