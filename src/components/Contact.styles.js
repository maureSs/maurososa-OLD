import styled from 'styled-components';

export const Wrapper = styled.div`
  .navbar-display {
    @media (max-width: 768px) {
      display: none;
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

  h2 {
    font-size: 40px;
    text-align: center;
    margin-left: 300px;
    @media (max-width: 480px) {
      font-size: 30px;
      text-align: center;
      margin-bottom: 30px;
      margin-left: 50px;
    }
  }

  .contact-container {
    width: 100%;
    max-width: 500px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 500px;
    @media (max-width: 480px) {
      width: 300px;
      height: 350px;
      margin-left: 80px;
      margin-top: 0px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      width: 500px;
      height: 350px;
      margin-left: 375px;
      margin-top: 30px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      width: 650px;
      height: 480px;
      margin-left: 405px;
    }
  }

  .form-control {
    width: 100%;
    max-width: 500px;
    height: 450px;
    @media (max-width: 480px) {
      width: 300px;
      height: 350px;
      font-size: 15px;
      margin-bottom: 0px;
      margin-left: 110px;
    }
  }

  .form-control input {
    width: 500px;
    font-size: 18px;
    font-family: 'Tahoma';
    padding: 1% 1% 1% 1%;
    border: none;
    border-radius: 5px;
    outline: none;
    @media (max-width: 480px) {
      width: 180px;
      font-size: 15px;
    }
  }

  .button-wrapper {
    position: fixed;
    top: 35%;
    left: 58%;
    transform: translate(-50%, -50%);
    @media (max-width: 480px) {
      top: 40%;
      left: 57%;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      top: 30%;
      left: 65%;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      top: 35%;
      left: 60%;
    }
  }

  .link-wrapper {
    position: relative;
  }

  .open-form-button {
    display: block;
    width: 250px;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    text-decoration: none;
    background: #383756;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 3px solid #fff;
    transition: all 0.35s;
    @media (max-width: 480px) {
      width: 200px;
    }
  }

  .open-form-button:hover {
    width: 200px;
    border: 3px solid #5de7d4;
    background: transparent;
    color: #5de7d4;
  }

  .open-form-button:hover + .icon {
    border: 3px solid #5de7d4;
    right: -25%;
  }

  .cancel-button {
    font-size: 20px;
    cursor: pointer;
    @media (max-width: 480px) {
      margin-left: 150px;
    }
  }

  .icon {
    width: 50px;
    height: 50px;
    border: 3px solid transparent;
    position: absolute;
    transform: rotate(45deg);
    right: 0;
    top: 0;
    z-index: -1;
    transition: all 0.35s;
  }

  .icon svg {
    width: 30px;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    transform: rotate(-45deg);
    fill: #5de7d4;
    transition: all 0.35s;
  }

  .message-input {
    height: 120px;
    width: 510px;
    font-size: 18px;
    font-family: 'Tahoma';
    border: none;
    border-radius: 5px;
    outline: none;
    resize: none;
    @media (max-width: 480px) {
      width: 185px;
      height: 70px;
      font-size: 15px;
    }
  }

  .submit-btn {
    display: inline-block;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-top: 5%;
    width: 100%;
    font-size: 20px;
    font-family: 'Tahoma';
    padding: 5px 5px;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    margin-left: 5px;
  }

  .submit-btn:hover {
    background-color: #8cb5cf;
  }

  .extra {
    margin-bottom: 7px;
    margin-top: 15px;
    font-size: 20px;
    @media (max-width: 480px) {
      margin-bottom: 5px;
      margin-top: 10px;
      font-size: 15px;
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
