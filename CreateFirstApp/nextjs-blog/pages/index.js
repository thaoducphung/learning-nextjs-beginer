import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p className={utilStyles.heading1Xl}>Thao Phung</p>
          <p className="mt-11">
            Hello, I'm Thao. I'm a software developer. You can contact me on{" "}
            <a href="https://github.com/thaoducphung">Github</a>.
          </p>
          <p className="text-2xl font-bold">
            More information can be found in{" "}
            <Link href="/posts/first-post">My Profile</Link>
          </p>
        </section>
      </Layout>
      <h1 className="text-6xl font-bold">
        Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>
      <p className="mt-3 my-11">
        Get started by editing{" "}
        <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          pages/index.tsx
        </code>
      </p>
      <p className="mx-11 text-1xl">
        Instantly deploy your Next.js site to a public URL with Vercel.
      </p>
    </>
  );
}
