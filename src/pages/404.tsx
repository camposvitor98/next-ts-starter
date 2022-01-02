import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div``;
interface NotFoundPageProps {}

const NotFoundPage: NextPage<NotFoundPageProps> = (props) => {
  const {} = props;

  return (
    <>
      <Head>
        <title>Not Found</title>
        <meta name="notFound" content="Not Found" />
      </Head>

      <Container>
        <h1>Página não encontrada</h1>
      </Container>
    </>
  );
};

export default NotFoundPage;
