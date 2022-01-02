import { ReactChild } from "react";
import { Container, Body, ContentArea } from "./styles";

interface HomeTemplateProps {
  children: ReactChild;
}

export function HomeTemplate(props: HomeTemplateProps) {
  const { children } = props;

  return (
    <Container>
      <ContentArea>
        <Body>{children}</Body>
      </ContentArea>
    </Container>
  );
}
