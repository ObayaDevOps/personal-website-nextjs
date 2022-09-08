import '../styles/global.css';
export { reportWebVitals } from 'next-axiom'


export default function App({ Component, pageProps}) {
    return <Component {...pageProps} />
}