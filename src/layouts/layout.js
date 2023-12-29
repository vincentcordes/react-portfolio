import { Outlet } from "react-router-dom";
import Loader from "./loader";
import Navbar from "./navbar/navbar";
import { Suspense } from "react";
import '../assets/styles/layout.css';

export default function Layout() {
    return (
        <div>
            <svg className="design" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* <polygon className="poly" points="0,0 30,0 60,100 0, 100" /> */}
                <polygon className="polyleft" points="0,0 10,0 30,100 0, 100" />
                <polygon className="polyright" points="100,0 100,100 20,100 90, 0" />
                {/* <circle cx="10" cy="10" r="1" /> */}
            </svg>
            <div className="layout">
                <Navbar />
                <main>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    );
}