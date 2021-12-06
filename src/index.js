import React from "react";
import ReactDOM from "react-dom";
import "./asset/css/main.css";
import Layout from "./components/Layout";

import AuthProvider from "./context/AuthProvider";
import AppProvider from "./context/AppProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <AuthProvider>
                    <Layout />
                </AuthProvider>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
