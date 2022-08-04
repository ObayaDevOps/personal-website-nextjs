import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script 
            src= "https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => 
            console.log('Script Laded Bitch, window.FB has been populated')
            }
        />
        <h1>This is Obi's First Post !</h1>
        <h2>
            <Link href="/">
                <a>Click your heels, Dorothy!</a>
            </Link>
        </h2>
        </Layout>
    ) 
}