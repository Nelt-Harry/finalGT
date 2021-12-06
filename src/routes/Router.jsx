import React from "react";

import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import Admin from "../pages/Admin";
import { Excercise } from "../pages/Excercise";

export default function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/question/:slug" element={<Excercise />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
