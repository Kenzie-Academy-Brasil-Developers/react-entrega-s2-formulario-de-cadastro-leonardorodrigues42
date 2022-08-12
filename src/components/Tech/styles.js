import styled from "styled-components";

const TechDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0005;
    height: 40px;
    padding: 0 7px;

    &:hover {
        opacity: 0.8;
    }

    .container-right {
        display: flex;
        align-items: center;
        gap: 40px;
        font-size: 14px;
        color: #868E96;
    }

    .trash {
        background: #0000;
        border: none;
        color: #FFFF;
    }

    .trash:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

export default TechDiv