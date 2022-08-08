import styled from "styled-components";

const LoginDiv = styled.div`
    font-family: 'Inter', sans-serif;

    color: #fff;
    background: #121214;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        margin-top: 77px;
        font-size: 34px;
        color: #FF577F;
    }        
    
    form {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 369px;
        height: 502px;
        justify-content: space-between;
        align-items: center;
        background: #212529;
        padding: 25px;
        border-radius: 5px;
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
        border: 1px solid white;
        padding: 0 10px;
        background: #343B41;
    }

    span {
        font-size: 14px;
        color: #868E96;
    }

    button {
        height: 48px;
        width: 100%;

        color: #fff;
        font-weight: 500;
        background: #868E96;

        font-size: 15px;
        border: none;
        border-radius: 3px;
    }

    .submit {
        background: #FF577F;
    }

    button:hover {
        cursor: pointer;
    }

`

export default LoginDiv