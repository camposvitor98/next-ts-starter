import styled from "styled-components";
import { Spin } from "styles/animations";

interface ContainerProps {
  size: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  border-radius: 50%;
  border: 0.25rem solid #ddd;
  border-top: 0.25rem solid #666;

  animation: ${Spin} 800ms linear infinite;
`;
