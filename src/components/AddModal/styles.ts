import styled from "styled-components";

const AddModalDiv = styled.div`

    width: 100%;
    background: #343B41;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: absolute;
    
    form {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 369px;
        height: fit-content;
        justify-content: center;
        gap: 15px;
        align-items: center;
        background: #212529;
        padding: 25px;
        border-radius: 5px;
        margin-bottom: 40px;
        opacity: 1;
    }

    .btn-close {
        background: red;
    }
    
    .inputArea {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
    
    input {
        box-sizing: border-box;
        height: 40px;
        border-radius: 4px;
        border: none;
        padding: 0 10px;
        background: #343B41;
        color: #fff;
    }

    span {
        font-size: 14px;
        color: #868E96;
    }

    button {
        height: 48px;
        width: 100%;

        color: #fff;
        font-weight: 600;
        background: #FF577F;

        font-size: 15px;
        border: none;
        border-radius: 3px;
    }

    select {
        box-sizing: border-box;
        height: 40px;
        border-radius: 4px;
        border: none;
        padding: 10px;
        background: #343B41;
        color: #fff;
    }

    button:hover {
        cursor: pointer;
    }
`

export default AddModalDiv