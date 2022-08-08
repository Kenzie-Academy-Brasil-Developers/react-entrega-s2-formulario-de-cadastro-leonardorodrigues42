import styled from "styled-components";

const DashboardDiv = styled.div`

    margin: 0;

    font-family: 'Inter', sans-serif;

    :hover {
        overflow: hidden;
    }

    color: #fff;
    background: #121214;
    height: 100vh;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .dashboard-header {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h2 {
            color: #FF577F;
        }

        button {
            width: 55px;
            height: 32px;

            background: #212529;
            color: #fff;
            border: none;
            border-radius: 4px;
        }

        button:hover, h2:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }

    .user-infos {
        width: 60%;
        height: 110px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 14px;
            color: #868E96;
        }
    }

    .dashboard-infos {
        width: 60%;

        
    }

    hr {
        width: 100%;
        opacity: 0.3;
    }

`

export default DashboardDiv
