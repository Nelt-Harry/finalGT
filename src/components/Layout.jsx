import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import data from "../asset/fake-data/fake-data";
import { AuthContext } from "../context/AuthProvider";
import Router from "../routes/Router";
import { Header } from "./Header";

export default function Layout() {
    const { user } = React.useContext(AuthContext);

    useEffect(() => {
        const check = localStorage.getItem("data");
        if (!check) {
            localStorage.setItem("data", JSON.stringify(data));
        }
    });

    return (
        <>
            {user ? <Header /> : ""}?
            <Routes>
                <Route
                    path="/*"
                    element={
                        <div className="main">
                            <div className="container">
                                <Router />
                            </div>
                        </div>
                    }
                />
            </Routes>
        </>
    );
}
