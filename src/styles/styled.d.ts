import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
    };
    font: {
      size: {
        12: string;
        14: string;
        16: string;
        18: string;
        20: string;
        24: string;
        32: string;
        40: string;
        48: string;
        56: string;
        64: string;
        72: string;
      };
      weight: {
        light: string;
        regular: string;
        medium: string;
        semiBold: string;
        Bold: string;
      };
    };
    gradient: {};
  }
}
