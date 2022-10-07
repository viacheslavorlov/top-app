import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>MyTop - лучший топ</title>
                <link  rel="icon" href="/favicon2.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
