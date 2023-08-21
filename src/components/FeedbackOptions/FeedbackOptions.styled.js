import styled from "styled-components";

export const FeedButton = styled.button`
    display: inline-block;
    padding: 15px 30px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 50px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    

    &:hover {
       background-color: #45A049;
    transform: scale(1.05);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    }
` 

export const FeedButtonCont = styled.div`
:not(:first-child) {
        margin-left: 20px;
    }
`;