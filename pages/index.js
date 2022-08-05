import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <section className={utilStyles.headingMd}>
        <p>'I wonder what this does.'</p>

        <p>
            Founder and Beekeeper at  <a href="http://humble-beeing.com/"> Humble Beeing </a>
        </p>

        <p>
          Code Artist and Tech Lead at <a href="https://www.afropocene.com/"> Afropocene StudioLab</a>
        </p>

        <p>
          I <a href="https://github.com/ObayaDevOps">build </a> random crypto-related trading bots - Optimus Dime, ArbiTriangle, F.A.C.K, TopsyTurvsy
        </p>

        <p>
          I <a href="https://foundation.app/@obaya">make </a> random crypto-related art
        </p>

        {/* <p>
          This page itself is an experiment! I wrote it in 'NextJS' a Javascript 
          library that promises, faster load times and better SEO 
          (Search Engine Optimisation)
        </p> */}
                <p>
          Welcome to my website - a space for my personal musings and experiments !
          {' '}
          <a href="https://twitter.com/ObayaThe42">Find me on Twitter</a>
        </p>

        <p>
          Background TLDR;
          I did CompSci at the University of Manchester, then did a summer internship at Credit Suisse London
           and then joined as a Technical Analyst after I graduated. 
        </p>
        <p>
           I worked in Electronic Bond Trading,
          connecting CS to a new Brokerage using FIX, then moved to a Big-Data Team, doing real-time stream processing and dashboarding (Java, SpringBoot, React, Kafka, Cassandra) at terabytes-per-second scale for FX Risk Data.
        </p>
        <p>
          After a few years I moved to another CS Team, Equity Derivatives IT. Working in Scala, a functional language, on the Real-time pricing, 
             taking in data from markets and risk engines to adjust prices for each derivative.
        </p>
        <p>
          Pandemic put things into perspective. Decided to resign and forge my own path.
        </p>

        {/* <p>
          Now I do whatever satisfies by daily curiosity!
        </p> */}

      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Articles</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
  
}