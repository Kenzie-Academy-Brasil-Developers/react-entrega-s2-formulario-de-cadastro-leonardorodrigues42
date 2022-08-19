import styled from "styled-components";

const DashboardDiv = styled.div`

    box-sizing: border-box; 
    margin: 0;

    font-family: 'Inter', sans-serif;

    overflow: auto;

    color: #fff;
    background: #121214;
    max-width: 100%;

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    .dashboard-header {
        width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid gray ;
        
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
        width: 800px;
        height: 110px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid gray ;

        span {
            font-size: 14px;
            color: #868E96;
        }
    }

    .dashboard-infos {
        width: 800px;        
    }

    hr {
        width: 100%;
        opacity: 0.3;
    }

`

export default DashboardDiv
