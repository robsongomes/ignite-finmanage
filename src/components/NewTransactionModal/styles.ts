import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Form = styled.form`
  margin: 3rem 2.5rem;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    background: var(--green);
    color: var(--shape);
    border: 0;
    border-radius: 0.25rem;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 1rem 0;
  height: 4rem;
`;

interface RadioButtonBoxProps {
  isActive: boolean;
  activeColor: "red" | "green";
}

const colors = {
  red: "#E52E4D",
  green: "#33CC95",
};

export const RadioButtonBox = styled.button<RadioButtonBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive ? transparentize(0.8, colors[props.activeColor]) : ""};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
