import * as R from "@src/allFiles"
import * as S from "./style"

import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <R.Header />
            <S.TopCont>
                <Outlet />
                <R.Aside />
            </S.TopCont>
            <R.Footer />
        </>
    )
}
export default MainLayout