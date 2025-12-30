import { Navigate, Outlet } from "react-router-dom";
import { useDataStore } from "./modules/data/data.state";

function Layout() {
    const { data } = useDataStore();

    if(data != true) return <Navigate replace to="/data" />;

    return (
        <div>
            <div className="border border-amber-200 rounded-lg p-4 shadow-sm">
            <h1 className="text-center text-3xl text-amber-600 font-extrabold tracking-wide">COM 'BEAR' (仮)</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;