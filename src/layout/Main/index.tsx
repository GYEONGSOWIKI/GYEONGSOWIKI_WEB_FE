import * as R from "@src/allFiles"

import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <R.Header />
            <Outlet />
            <R.Footer />
        </>
    )
}
export default MainLayout