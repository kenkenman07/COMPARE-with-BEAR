import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            レイアウト
            <Outlet />
        </div>
    )
}

export default Layout;