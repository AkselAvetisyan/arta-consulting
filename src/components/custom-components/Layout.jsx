'use client'

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

function Layout({ children }) {
    return (
        <>
            <div className="page-layout">
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
            <style jsx={"true"}>{`
              .page-layout {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                background-color: var(--color-surface);
              }

              main {
                flex: 1;
              }
            `}</style>
        </>
    );
}

export default Layout;