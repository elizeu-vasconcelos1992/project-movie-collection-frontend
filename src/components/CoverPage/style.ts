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
    width: 500px;
    height: 300px;
  }

  h2 {
    width: 65%;
    font-size: 1.8rem;
    text-align: justify;
  }
`;
