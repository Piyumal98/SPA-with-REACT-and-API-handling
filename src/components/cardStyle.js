import styled from 'styled-components';

export const CardContainer = styled.div`
    width: auto;
    height: 400px;
    background-color: #B2BEB5;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    cursor: pointer;

    .img-container {
        width: 250px;
        height: 250px;
        border: 50%;
        overflow: hidden;
    }
    
    .img-container img {
        width: 100%;
        
    }

    .name {
        font-size: 25px;
        font-weight: 700;
        margin-top: 20px;
    }

    .email {
        font-size: 20px;
        font-weight: 500;
        margin-top: 20px;
    }
`