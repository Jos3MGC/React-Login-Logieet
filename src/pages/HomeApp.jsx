import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "./Dashboard";
import Blank from "./Blank";
import Table from "./Tables";

export default function HomeApp() {
    return (
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="tables" element={<Table />} />
                    <Route path="graph" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                </Route>
            </Routes>
    );
}