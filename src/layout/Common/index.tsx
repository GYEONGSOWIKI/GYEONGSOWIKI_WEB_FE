import * as R from "@src/allFiles"

import { Routes, Route } from "react-router-dom"

const CommonRouter = () => {

    return (
        <Routes>
            <Route element={<R.MainLayout />}>
                <Route path="/" element={<R.Home />} />
                <Route path="/accident" element={<R.Accident />} />
                <Route path="/category" element={<R.Category />} />
                <Route path="/club" element={<R.Club />} />
                <Route path="/student" element={<R.Student />} />
                <Route path="/teacher" element={<R.Teacher />} />
                <Route path="/mypage" element={<R.MyPage />} />
            </Route>
            <Route element={<R.SubLayout />}>
                <Route path="/login" element={<R.SignIn />} />
            </Route>
        </Routes>
    )
}

export default CommonRouter
