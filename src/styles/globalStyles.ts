import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  :root {
    --background: #E5E5E5;
    --text: #2C2C2C;
    --text-body: #969cb3;
    --white: #fff;
    --background-Modal: #0F52BA;
    --Text-Modal: #000;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  body,input,textarea,button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  button{
    cursor: pointer;
  }
 
  .react-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .react-modal-content {
    height: 100%;
    background: var(--background-Modal);
    outline-style: none;
    position: relative;
    border-radius: 0.24;
    display: flex;
    flex-direction: column;
    
    .header {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    h1{
      width: 70%;
      color: var(--white);
    }
    
    .content-card {
      display: flex;
      flex-direction: column;
      height: 100%;

    button{
      width: 100%;
      background-color: #000;
      padding: 1rem;
      color: var(--white);
      font-size: 1.5rem;
      font-weight: 600;
    }
    .total{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding: 0.5rem;
      color: var(--white);

      span{
      font-size: 1.5rem;
    }
    }
  }
    
    .header-content {
      display: flex;
      flex-direction: column;
      height: 85%;
      padding: 1.4rem;
      overflow-y: auto;
      
    }
    
    

  }

  .img-modal{
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  .button-modal{
    cursor: pointer;
    border: 0;
    position: absolute;
    bottom: 91%;
    left: 85%;
    background: var(--background);
    color: var(--white);
    padding: 0.5rem;
    border-radius: 0.25rem;
    &:hover {
    filter: brightness(0.7);
  }
  }
`;
