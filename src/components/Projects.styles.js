import styled from 'styled-components';

export const Wrapper = styled.div`
  .navbar-display {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .projects-container {
    width: 100%;
    max-width: 600px;
    height: 500px;
    margin: 0 auto;
    margin-left: 450px;
    margin-top: 15px;
    font-size: 18px;
    padding-left: 85px;
    @media (max-width: 480px) {
      width: 350px;
      height: 450px;
      font-size: 14px;
      margin-left: 0px;
      margin-top: 0px;
      overflow: auto;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      width: 450px;
      height: 400px;
      font-size: 14px;
      margin-left: 360px;
      margin-top: 5px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      width: 500px;
      height: 400px;
      margin-left: 320px;
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .projects-title {
    display: flex;
    width: 100%;
    font-size: 33px;
    font-family: 'Lato', sans-serif;
    margin-bottom: 0;
    margin-left: -70px;
    @media (max-width: 480px) {
      font-size: 25px;
      margin-bottom: 15px;
      margin-left: -30px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      font-size: 25px;
      margin-left: -40px;
      margin-bottom: 10px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      font-size: 35px;
      margin-left: 0px;
    }
  }

  .title {
    margin: 0 auto;
    @media (max-width: 480px) {
      padding-left: 0px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      padding-left: 0px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      padding-left: 0px;
      padding-right: 35px;
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

  /* Must-Watch / Gaming-Store / Quiz AE styles */
  .projects-style {
    width: 100%;
    max-width: 1000px;
    height: 20px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    margin-top: 0;
    position: relative;
    @media (max-width: 480px) {
      position: absolute;
      width: 220px;
      height: 220px;
      margin-top: 0px;
      margin-left: 60px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      padding-left: 30px;
      padding-right: 35px;
    }
  }

  .projects-style img {
    width: 35%;
    margin: 4%;
    padding-left: 8%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    @media (max-width: 480px) {
      width: 50%;
    }
  }

  .projects-style img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  .find-more-style {
    display: block;
    text-decoration: none;
    color: #c17787;
  }

  .find-more-style:hover {
    color: #ecc2c8;
  }

  .future-projects {
    width: 100%;
    max-width: 300px;
    margin-top: 10px;
    padding: 2% 2% 2% 2%;
    margin-left: 638px;
    @media (max-width: 480px) {
      width: 300px;
      font-size: 15px;
      padding: 0%;
      margin-top: -150px;
      margin-left: 122px;
    }
    @media (min-width: 769px) and (max-width: 1400px) {
      margin-left: 510px;
    }
    @media (min-width: 1400px) and (max-width: 1919px) {
      margin-top: 35px;
      margin-left: 510px;
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
