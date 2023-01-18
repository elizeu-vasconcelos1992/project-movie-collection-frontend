import styled from "styled-components";

export const StyledControllerApp = styled.div`
  width: 100%;
  min-height: 15%;
  display: flex;
  padding: 0 1.5rem 0 1.5rem;
  gap: 1rem;
  box-shadow: 0px 0px 21px 3px rgba(239, 201, 0, 1);

  @media (max-width: 610px) {
    flex-direction: column;
    min-height: 25%;
    gap: 0;
  }
`;
