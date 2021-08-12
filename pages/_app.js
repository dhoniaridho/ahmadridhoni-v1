import Router from 'next/router';
import '../styles/globals.css'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

function MyApp({ Component, pageProps }) {

  Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

  return <Component {...pageProps} />
}

export default MyApp
