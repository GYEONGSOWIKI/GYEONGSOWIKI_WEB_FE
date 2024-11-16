import * as R from "@src/allFiles"

import { Outlet } from 'react-router-dom'

const SubLayout = () => {
    return (
        <>
            <R.Header />
            <Outlet />
        </>
    )
}
export default SubLayout