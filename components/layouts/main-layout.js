import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";

export default function MainLayout(props) {
    const { children, title } = props
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Navigation />
            <main className="bg-gradient-to-tr overflow-x-hidden from-pink-800 to-blue-600">
                    {children}
            </main>
            <Footer />
        </div>
    )
}
MainLayout.defaultProps = {
    title: 'Ahmad Ridhoni'
}