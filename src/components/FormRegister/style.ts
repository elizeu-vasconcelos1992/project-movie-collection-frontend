import styled from "styled-components";

export const StyledFormRegister = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 1.5rem;

  label {
    width: 50%;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: 400;

    input {
      width: 100%;
      height: 2.5rem;
      padding: 0 10px 0 10px;
    }

    p {
      font-size: 0.75rem;
      color: var(--color-red);
    }
  }

  .div-password {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    font-size: 1rem;
    border: 0.063rem solid black;
    border-radius: 0.25rem;

    .input-password {
      width: 90%;
      font-size: 1rem;
      border: none;
      border-radius: 0.25rem;
      outline: none;
    }

    svg {
      margin-top: 10px;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  button {
    width: 50%;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.25rem;
    background-color: var(--color-gray);
    border: 1px solid var(--color-gray);
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: var(--color-yellow);
    }
  }

  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      color: var(--color-blue);
    }
  }
`;
