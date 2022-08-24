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
    /* background: rgba(0, 0, 0, 0.5); */
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
    padding: 1.5rem;
    position: relative;
    border-radius: 0.24;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

  .header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
   h1{
    width: 70%;
    color: var(--white);
    /* font-size: 1.5rem; */
   }
  }

  .img-modal{
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    /* border-radius: 0.25rem; */
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
