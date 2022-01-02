import {
  Dispatch,
  InputHTMLAttributes,
  ReactChild,
  SetStateAction,
  useState,
} from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Container } from "./styles";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconLeft?: ReactChild;
  iconRight?: ReactChild;
  width?: string;
}

export function Input(props: InputTextProps) {
  const {
    label,
    iconLeft,
    iconRight,
    width = "100%",
    type = "text",
    ...rest
  } = props;

  const [password, setPassword] = useState(
    type === "password" ? "password" : ""
  );

  return (
    <Container width={width}>
      {label ?? label}

      {password && (
        <div>
          {iconLeft ?? iconLeft}
          <input type={password} {...rest} />
          <InnerCurrentIcon password={password} setPassword={setPassword} />
        </div>
      )}

      {!password && (
        <div>
          {iconLeft ?? iconLeft}
          <input type={type} {...rest} />
          {iconRight ?? iconRight}
        </div>
      )}
    </Container>
  );
}

interface CurrentIconProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

function InnerCurrentIcon({ password, setPassword }: CurrentIconProps) {
  if (password === "password") {
    return (
      <FiEyeOff
        style={{ cursor: "pointer", fontSize: "1.5rem" }}
        onClick={() => setPassword("text")}
      />
    );
  }

  return (
    <FiEye
      style={{ cursor: "pointer", fontSize: "1.5rem" }}
      onClick={() => setPassword("password")}
    />
  );
}
