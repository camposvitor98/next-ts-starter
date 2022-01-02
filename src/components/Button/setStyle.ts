import { css, DefaultTheme } from "styled-components";
import { darken, lighten } from "polished";

export function setStyle(
  version: "primary" | "secondary",
  theme: DefaultTheme
) {
  const styles = {
    primary: css`
      background-color: #ccc;
      color: #222;
      &:hover {
        background-color: ${darken(0.2, `#ccc`)};
      }
    `,

    secondary: css`
      border: 1px solid #222;
      color: #222;

      &:hover {
        border-color: ${lighten(0.2, `#222`)};
        color: ${lighten(0.2, `#222`)};
      }
    `,
  };
  return styles[version];
}
