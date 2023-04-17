import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Topbar from "../includes/Topbar";

export default function LayoutMaster({ children }) {
    return (
        <>
            <Topbar/>
            <div id="wrapper" className="container">
                <Header/>
                <section className="main-content">
                    {children}
                </section>
                <Footer/>
            </div>
        </>
    );
}