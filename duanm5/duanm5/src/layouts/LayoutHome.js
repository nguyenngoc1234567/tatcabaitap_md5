import React from 'react';
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import Sidebar from "../includes/Sidebar";
function LayoutHome(props) {
    return (
        <div>
              <>
            <Header/>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
            <h1>LayoutHome</h1>
                </div>
            </section>
            <Footer/>
        </>
        </div>
    );
}

export default LayoutHome;