import styled from "styled-components";

export const SCMainPage = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    min-width: 530px;
    margin: 0;
    font-family: "SUSE", sans-serif;
    background-color: var(--bgc);
    color: var(--text-color);
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


.loader {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}
.loader:before,
.loader:after {
  content:"Loading...";
  grid-area: 1/1;
  -webkit-mask:linear-gradient(90deg,#000 50%,#0000 0) 0 50%/2ch 100%;
  animation: l11 1s infinite cubic-bezier(0.5,220,0.5,-220);
}
.loader:after {
  -webkit-mask-position:1ch 50%;
  --s:-1;
}
@keyframes l11 {100%{transform: translateY(calc(var(--s,1)*0.1%));}}


  input {
    padding: 12px 15px;
    width: 300px;
    border-radius: 10px;
    border: 2px solid;
    border-color: var(--prime-color);

    transition: 200ms;

    &:is(:hover, :focus) {
      border: 2px solid ${(props) => props.theme.colors.primeColor};
      box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.darkPrime};
    }
  }

  img {
    width: 70px;
    object-fit: cover;
    transition: 200ms;

    &:is(:hover, :focus) {
      width: 100px;
    }
  }

  .icons {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  .inputs {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    gap: 30px;
  }
  .logo {
    font-size: 70px;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${(props) => props.theme.colors.textColor};
    display: flex;
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
    color: ${(props) => props.theme.colors.textColor}
  }

  .card {
    font-family: Arial, sans-serif;
    max-width: 600px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin-bottom: 30px;
    margin-left: 30px;
    display: inline-block;
    transition: 200ms;

    &:hover {
    translate: 0 -5px;
    box-shadow: 0px 0px 20px 0px ${(props) => props.theme.colors.darkPrime};
    border: 1px solid ${(props) => props.theme.colors.primeColor};
  }
  }

  .imgIcon img {
    width: 100%;
    height: 100%;
    border-radius: 15px 15px 0 0;
    object-fit: cover; /* Обрезает изображение, чтобы оно заполнило контейнер */
  }

  .card-content {
    padding: 15px;
  }

  .new-listing {
    background-color: #007bff;
    color: white;
    padding: 5px 8px;
    border-radius: 5px;
  }

  .price {
    margin: 5px 0px;
    font-size: 24px;
    font-weight: 700;
    color: #333333;
  }

  .details {
    font-size: 16px;
    color: #666666;
  }

  .address {
    font-size: 14px;
    color: #666666;
    margin-top: 10px;
  }

  .fav {
    background-color: white;
    padding: auto;
    width: 50px;
    height: 50px;
    border-radius: 35px;
    border: 1px solid #ddd;
    position: absolute;
    right: 10px;
    bottom: 10px;

    &.active {
      background-color: ${(props) => props.theme.colors.darkPrime};
      color: white;
      border: 1px solid #ddd;
    }
  }

  .imgIcon {
    position: relative;
    width: 100%;
    height: 200px; 
    overflow: hidden; 
  }

  .list-with-cards {
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }

  /* @media (max-width: 730px) {
    input,
    button {
      padding: 10px 12px;
    }
  } */
`;
