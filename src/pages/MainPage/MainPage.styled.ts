import styled from "styled-components";

export const SCMainPage = styled.div`

*{
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

/* button, */
input {
  border: 1px solid ${(props) => props.theme.colors.primeColor};
  outline: 0;
  font-family: "SUSE", sans-serif;
  font-size: 15px;
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


/* button {
  cursor: pointer;
  padding: 12px 15px;
  font-size: "SUSE", sans-serif;
  font-weight: 600;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.theme.colors.primeColor};
  transition: 200ms;
  width: 200px;

  &:disabled {
    background-color: var(--disabled-bgc);
  }

  &.primary {
    background-color: var(--prime-color);
    color: white;
  }

  &.secondary {
    background-color: var(--light-gray);
    color: var(--placeholder-color);
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  } */

  /* &:hover {
    translate: 0 -5px;
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.darkPrime};
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
} */

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
}

header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 4px solid ${(props) => props.theme.colors.primeColor};
}
header button {
  width: 100px;
}
.card {
    font-family: Arial, sans-serif;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 15px;
  }

.imgIcon img {
    width: 100%;
    height: auto;
    border-radius: 15px 15px 0 0 ;
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
    font-size: 24px;
    color: #333333;
}

.details {
   font-size: 16px; 
   color:#666666; 
}

.address {
   font-size:14px; 
   color:#666666; 
   margin-top :10px; 
}

.fav {
  background-color: white;
  padding: 13px;
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
}

.list-with-cards {
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}


@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}

`