import styled from "styled-components";

export const StyledCoverPage = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-yellow);

  img {
    width: 100%;
    height: 300px;
  }

  h2 {
    width: 65%;
    font-size: calc(1vw + 0.5rem);
    text-align: justify;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
