import { css, DefaultTheme } from "styled-components";
import { darken, lighten } from "polished";

export function setStyle(
  version: "primary" | "secondary",
  theme: DefaultTheme
) {
  const styles = {
    primary: css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      &:hover {
        background-color: ${darken(0.2, `${theme.colors.secondary}`)};
      }
    `,

    secondary: css`
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover {
        border-color: ${lighten(0.2, `${theme.colors.primary}`)};
        color: ${lighten(0.2, `${theme.colors.primary}`)};
      }
    `,
  };
  return styles[version];
}
