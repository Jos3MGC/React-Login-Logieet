import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "./Dashboard";
import Graph from "./Graphs";
import AppTable from "./AppTable";

export default function HomeApp() {
    return (
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="tables" element={<AppTable />} />
                    <Route path="graph" element={<Graph />} />
                </Route>
            </Routes>
    );
}