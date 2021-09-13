import styled from 'styled-components';

export const Wrapper = styled.div`
  .navbar {
    height: 70%;
    width: 100%;
    max-width: 300px;
    position: fixed;
    z-index: 1;
    top: 0;
    margin-top: 180px;
    display: block;
    @media (max-width: 480px) {
      height: 0;
      width: 100px;
      position: absolute;
      z-index: none;
      top: 10%;
      left: 30%;
    }
    @media (max-width: 768px) {
      position: absolute;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      height: 50%;
      width: 300px;
      margin-top: 120px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      height: 60%;
      margin-top: 150px;
    }
  }

  .navbar h1 {
    position: absolute;
    margin-top: -45px;
    padding-left: 30px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .navbar ul {
    margin: 0 auto;
    padding: 120px;
    list-style-type: none;
    padding-left: 40px;
    @media (max-width: 480px) {
      display: inline-block;
      margin: 0px;
      padding: 0px;
      padding-left: 0px;
      margin-right: 0px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      margin-top: -50px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      margin-top: -20px;
    }
  }

  .navbar h4 {
    position: absolute;
    padding-top: 75px;
    @media (max-width: 768px) {
      display: none;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      padding-top: 30px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      padding-top: 25px;
    }
  }

  .navbar-item {
    color: white;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
    margin-top: 29px;
    text-decoration: none;
    display: block;
    font-size: 20px;
    @media (max-width: 480px) {
      margin-top: 4%;
      font-size: 25px;
    }
  }

  .navbar-item:hover {
    color: skyblue;
  }
  .res-item {
    @media (max-width: 480px) {
      display: none;
    }
  }

  .vl {
    position: absolute;
    height: 680px;
    border-left: 6px solid #464360;
    margin-left: 300px;
    margin-top: -85px;
    @media (max-width: 480px) {
      position: absolute;
      height: 600px;
      border-bottom: 15px solid #464360;
      margin-left: -50px;
      margin-top: -400px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      height: 550px;
      margin-top: -80px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      height: 658px;
      margin-top: -150px;
    }
  }
`;
