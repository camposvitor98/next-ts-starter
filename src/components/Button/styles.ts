import styled, { css } from "styled-components";
import { setStyle } from "./setStyle";

interface ContainerProps {
  size: number;
  version: "primary" | "secondary";
  width?: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    typeof props.width === "string" &&
    css`
      width: ${props.width};
    `}

  padding: 0 1rem;
  border-radius: 0.25rem;

  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  height: ${(props) => props.size + "rem"};

  transition: 250ms;

  ${({ version, theme }) => setStyle(version, theme)};

  user-select: none;
`;
