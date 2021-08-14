import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";

export default function MainLayout(props) {
    const {children, title} = props
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
           <Navigation />
           {children} 
           <Footer />
        </>
    )
}
MainLayout.defaultProps = {
    title: 'Ahmad Ridhoni'
}