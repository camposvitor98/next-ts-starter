import { Container } from "styles/homeStyles";

import type { NextPage } from "next";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import { ActionsExample } from "store/modules/example";
import { RootState } from "store/reducers";

import { Button } from "components/Button";
import { Loading } from "components/Loading";
import { useTranslation } from "react-i18next";

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = (props) => {
  const {} = props;
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.exampleReducer);

  function setLoading() {
    dispatch(ActionsExample.setLoading());
  }

  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="Home" content="Hello world!" />
      </Head>

      <Container>
        <h1>{t("hello world")}!</h1>

        {loading && <Loading />}
        {!loading && <Button onClick={setLoading}>Change Value</Button>}
      </Container>
    </>
  );
};

export default HomePage;
