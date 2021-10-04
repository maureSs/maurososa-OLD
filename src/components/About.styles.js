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
    @media (max-width: 320px) {
      width: 180px;
      height: 350px;
      font-size: 12px;
      margin-left: 110px;
      margin-top: 0px;
    }
    @media (min-width: 321px) and (max-width: 480px) {
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

  /* +Info buttons */

  .first-button-container {
    position: absolute;
    left: 45%;
    top: 55%;
    @media (max-width: 480px) {
      position: relative;
      left: 0%;
      top: 0%;
      margin-top: 15px;
    }
  }

  .exp-position {
    position: absolute;
    left: 40%;
    top: 56%;
    font-size: 20px;
    @media (max-width: 320px) {
      font-size: 15px;
    }
    @media (max-width: 480px) {
      position: relative;
      left: 0%;
      top: 0%;
      margin-top: 15px;
    }
  }

  .second-button-container {
    position: absolute;
    left: 62%;
    top: 45%;
    @media (max-width: 480px) {
      position: relative;
      left: 0%;
      top: 0%;
      margin-top: 15px;
    }
  }

  .icons-container {
    position: absolute;
    left: 62%;
    top: 45%;
    @media (max-width: 480px) {
      position: relative;
      left: 0%;
      top: 0%;
      margin-top: 15px;
    }
  }

  .icon-design {
    width: 35px;
    margin: 10px;
    @media (max-width: 320px) {
      width: 25px;
    }
  }

  .btn {
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
    box-sizing: border-box;
    color: #121212;
    cursor: pointer;
    display: inline-flex;
    flex: 1 1 auto;
    font-family: Inter, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
    white-space: nowrap;
    border: 0;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    @media (max-width: 320px) {
      padding: 0.5rem 1rem;
      margin-left: -25px;
    }
    @media (max-width: 480px) {
      width: 220px;
    }
  }

  .btn:hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
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
