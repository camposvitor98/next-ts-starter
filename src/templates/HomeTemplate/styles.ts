import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  padding: none;
`;

export const Body = styled.div`
  flex: 1;

  background-color: #eff3f6;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    max-width: 1440px;
  }
`;
