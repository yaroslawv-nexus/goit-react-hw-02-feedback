import styled from "styled-components"

export const Title = styled.h2`
font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    margin-bottom: 20px;
`;

export const Container = styled.section`

  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;


@media screen and (min-width: 375px) {
  
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  
}

@media screen and (min-width: 768px) {
  
    width: 744px;
  
}

@media screen and (min-width: 1280px) {
  
    width: 1216px;
 
}

`