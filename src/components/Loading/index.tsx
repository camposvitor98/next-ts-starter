import { Container } from "./styles";

interface LoadingProps {
  size?: number;
}

export function Loading(props: LoadingProps) {
  const { size = 48 } = props;

  return <Container size={size} />;
}
