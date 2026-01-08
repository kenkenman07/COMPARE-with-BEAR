import { Navigate, Outlet } from "react-router-dom";
import { useDataStore } from "./modules/data/data.state";

function Layout() {
    const { data } = useDataStore();

    if(data != true) return <Navigate replace to="/data" />;

    return (
        <div>
            
            <Outlet />
        </div>
    )
}

export default Layout;