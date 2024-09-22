import styled from "styled-components";

export const SCProfilePage = styled.div`
  @import url(https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap);

  * {
    padding: 0;
    margin: 0;
  }

  .UserInfo {
    font-family: "SUSE", sans-serif;
    font-size: 20px;
  }

  .UserData {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .Logout {
    padding: 10px 20px;
    height: 60px;
    width: 250px;
    color: white;
    font-size: 20px;
    background-color: red;
    border: 0;
    border-radius: 20px;
    transition: 200ms;

    &:is(:hover, :focus) {
      box-shadow: 0px 0px 20px 0px ${(props) => props.theme.colors.red};
      translate: 0 -5px;
    }
  }

  .UserDataAll {
    display: flex;
    gap: 30px;
  }

  body {
    min-width: 530px;
    margin: 0;
    font-family: "SUSE", sans-serif;
    background-color: var(--bgc);
    color: var(--text-color);
  }
  .logo {
    font-size: 70px;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${(props) => props.theme.colors.textColor};
    display: flex;
  }
  a {
    text-decoration: none;
    font-family: "SUSE", sans-serif;
    color: ${(props) => props.theme.colors.primeColor};

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: ${(props) => props.theme.colors.primeColor};
    }
  }

  .letter {
    display: inline-block;
    animation: fadeColor 10s infinite; /* Анимация длится 2 секунды и повторяется бесконечно */
  }

  @keyframes fadeColor {
    0% {
      color: gray; /* Исходный цвет */
      opacity: 1;
    }
    50% {
      color: ${(props) => props.theme.colors.textColor}; /* Цвет при анимации */
    }
    100% {
      color: gray; /* Возврат к исходному цвету */
      opacity: 1;
    }
  }

  header {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    border-bottom: 4px solid ${(props) => props.theme.colors.primeColor};
  }
  
  header button {
    display: none;
    width: 100px;
  }

  .pages {
    font-family: "SUSE", sans-serif;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .pageItem {
    cursor: pointer;
    color: ${(props) => props.theme.colors.textColor};
  }

  .container {
    box-shadow: 0 0 5px ${(props) => props.theme.colors.primeColor};
    border-radius: 30px;
    border: solid 4px ${(props) => props.theme.colors.primeColor};
    background-color: ${(props) => props.theme.colors.elemsBgc}; /**cntr F**/
    margin: 0 auto;
    width: 80%;
    margin-top: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    @import url(https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap);
  }
`;
