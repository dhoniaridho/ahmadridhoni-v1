import Footer from "./footer";
import Navigation from "./navigation";

export default function MainLayout(props) {
    const {children} = props
    return(
        <>
           <Navigation />
           {children} 
           <Footer />
        </>
    )
}