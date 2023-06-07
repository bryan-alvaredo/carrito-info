import styled from "styled-components";

const Main = styled.main`
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

const CardCargaProd = styled.section`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

const FormCargaProd = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Boton = styled.button`
  color: green;
`;

export { Boton, Main, CardCargaProd, FormCargaProd };
