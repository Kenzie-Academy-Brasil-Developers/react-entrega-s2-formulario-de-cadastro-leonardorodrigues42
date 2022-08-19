import styled from "styled-components";

export const Img = styled.img`
    &:hover {
        cursor: pointer;
    }
`

const TechsDiv = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;

    box-sizing: border-box;
    width: 800px;
    height: 100%;
    
    background: #212529;
    padding: 20px;
    border-radius: 4px;

`

export const TechsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default TechsDiv