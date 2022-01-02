import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large" | "veryLarge";
  version?: "primary" | "secondary";
  width?: string;
}

export function Button(props: ButtonProps) {
  const {
    label,
    children,
    size = "large",
    version = "primary",
    type = "button",
    width,
    ...rest
  } = props;

  const content = children || label;

  const setSize = {
    small: 2,
    medium: 2.5,
    large: 3,
    veryLarge: 3.5,
  };
  return (
    <Container
      width={width}
      size={setSize[size]}
      version={version}
      type={type}
      {...rest}
    >
      {content}
    </Container>
  );
}
