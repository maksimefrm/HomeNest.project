import styled from "styled-components";

export const SCLoginPage = styled.div`
  box-shadow: 0 0 5px ${(props) => props.theme.colors.primeColor};
  border-radius: 30px;
  border: solid 4px ${(props) => props.theme.colors.primeColor};
  background-color: ${(props) => props.theme.colors.elemsBgc}; /**cntr F**/
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  justify-content: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @import url(https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap);


body {
  min-width: 530px;
  margin: 0;
  font-family: "SUSE", sans-serif;
  background-color: var(--bgc);
  color: var(--text-color);
}

button,
input {
  border: 1px solid ${(props) => props.theme.colors.primeColor};
  outline: 0;
  font-family: "SUSE", sans-serif;
  font-size: 15px;
}

h1, p, span {
  font-family: "SUSE", sans-serif;
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


button {
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
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.darkPrime};
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
}

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

span {
  font-family: "SUSE", sans-serif;
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

@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}

`