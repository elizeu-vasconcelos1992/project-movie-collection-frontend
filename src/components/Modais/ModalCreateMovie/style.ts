import styled from "styled-components";

export const StyledModalCreateMovie = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .div-container {
    width: 23.125rem;
    min-height: 29.375rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--color-gray);
    box-shadow: 0px 0.25rem 2.5rem 0.625rem rgba(0, 0, 0, 0.25);

    .div-header {
      width: 100%;
      height: 2.5rem;
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 0 1rem 0 1rem;

      svg {
        cursor: pointer;
      }
    }
  }
`;
