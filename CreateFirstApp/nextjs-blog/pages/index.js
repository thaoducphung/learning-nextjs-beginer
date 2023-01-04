import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.heading1Xl}>Thao Phung</p>
        <p>
          Hello, I'm Thao. I'm a software developer. You can contact me on{" "}
          <a href="https://github.com/thaoducphung">Github</a>.
        </p>
      </section>
    </Layout>
  );
}
