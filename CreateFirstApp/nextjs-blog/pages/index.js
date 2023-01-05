import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export default function Home({ allPostsData }) {
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
          <div className="mt-10 flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm border">
              <h2 className="px-5 font-medium leading-tight text-3xl mt-5 mb-2 text-blue-800">
                My Blogs
              </h2>
              <ul className="list-inside">
                {allPostsData.map(({ id, date, title }) => (
                  <li className="font-bold p-5" key={id}>
                    <Link
                      className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                      href={`/posts/${id}`}
                    >
                      {title}
                    </Link>
                    <br />
                    <small>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
