import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <h1 className="text-3xl text-blue-600">COM 'BEAR' (仮)</h1>
            <Outlet />
        </div>
    )
}

export default Layout;