import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

const Imagery = styled.img`
    width: 350px;
    height: 460px;
    padding: 1px;
    border: 1px;
    borderColor: #52A1C3;
`;

  const SuggestionUI= ({
    src = "image/suggestion.png"
        }) => {
       return <Imagery src={src}/>
    }
    
    export default SuggestionUI;