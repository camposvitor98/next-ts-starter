import { darken, lighten } from "polished";
import styled from "styled-components";

interface ContainerProps {
  width: string;
}

export const Container = styled.label<ContainerProps>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width};

  gap: 0.5rem;

  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: (${({ theme }) => darken(0.1, `${theme.colors.primary}`)});

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 0.75rem 1.5rem;

    border: 1px solid ${({ theme }) => darken(0.1, `${theme.colors.primary}`)};
    border-radius: 0.25rem;

    background-color: ${({ theme }) =>
      lighten(0.1, `${theme.colors.secondary}`)};

    height: 3.5rem;

    input {
      background-color: transparent;
      border: 0;
      width: 100%;

      font-size: ${({ theme }) => theme.font.size[18]};
      font-weight: ${({ theme }) => theme.font.weight.regular};
      color: ${({ theme }) => theme.colors.primary};

      &::placeholder {
        font-size: ${({ theme }) => theme.font.size[18]};
        font-weight: ${({ theme }) => theme.font.weight.regular};
        color: ${({ theme }) => lighten(0.1, `${theme.colors.primary}`)};
      }
    }

    svg {
      font-size: ${({ theme }) => theme.font.size[20]};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
