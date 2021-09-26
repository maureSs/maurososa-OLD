import styled from 'styled-components';

export const Wrapper = styled.div`
  .navbar-display {
    @media (max-width: 768px) {
      display: none;
    }
  }

  h2 {
    font-size: 33px;
    font-family: 'Lato', sans-serif;
    margin-bottom: 45px;
    @media (max-width: 480px) {
      font-size: 25px;
      margin-bottom: 30px;
    }
  }

  .about-container {
    width: 100%;
    max-width: 650px;
    height: 200px;
    margin: 0 auto;
    margin-left: 450px;
    margin-top: 60px;
    font-size: 20px;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    @media (max-width: 480px) {
      width: 220px;
      height: 400px;
      font-size: 14px;
      margin-left: 110px;
      margin-top: 0px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      width: 400px;
      height: 200px;
      font-size: 14px;
      margin-left: 425px;
      margin-top: 45px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      max-width: 600px;
      margin-left: 350px;
      margin-top: 40px;
      font-size: 18px;
    }
  }

  .go-back {
    font-size: 30px;
    cursor: pointer;
    color: white;
    @media (min-width: 769px) {
      display: none;
    }
  }

  .about-container img {
    margin-top: 25px;
    width: 270px;
    @media (max-width: 768px) {
      margin-top: 0px;
      width: 150px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      width: 220px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      width: 240px;
    }
  }

  .vl {
    @media (max-width: 480px) {
      position: absolute;
      height: 600px;
      border-left: 6px solid #464360;
      margin-left: 70px;
      margin-top: -50px;
    }
  }
`;
