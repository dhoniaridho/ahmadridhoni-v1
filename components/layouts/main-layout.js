import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";

export default function MainLayout(props) {
    const { children, title } = props
    return (
        <div className="bg-gradient-to-tr from-pink-800 to-blue-600">
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
                    {children}
            <Footer />
        </div>
    )
}
MainLayout.defaultProps = {
    title: 'Ahmad Ridhoni'
}