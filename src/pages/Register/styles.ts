import styled from "styled-components";

const RegisterDiv = styled.div`
    font-family: 'Inter', sans-serif;

    color: #fff;
    background: #121214;
    height: 100vh;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .container-title {
        margin-top: 50px;
        width: 370px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 68px;
            background: #212529;
        }
    }

    .container-register {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 34px;
        color: #FF577F;
    }        
    
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

    a {
        font-style: none;
        text-decoration: none;
        color: #fff;
    }
`

export default RegisterDiv