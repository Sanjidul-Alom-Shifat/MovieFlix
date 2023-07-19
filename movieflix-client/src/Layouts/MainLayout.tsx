// import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <NavigationBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;