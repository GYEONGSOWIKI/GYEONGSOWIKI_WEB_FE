import * as R from "./allFiles"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <R.Header />
        <Routes>
          <Route path="/" element={<R.Home />} />
          <Route path="/accident" element={<R.Accident />} />
          <Route path="/category" element={<R.Category />} />
          <Route path="/club" element={<R.Club />} />
          <Route path="/student" element={<R.Student />} />
          <Route path="/teacher" element={<R.Teacher />} />
          <Route path="/mypage" element={<R.MyPage />} />
          <Route path="/login" element={<R.SignIn />} />
        </Routes>
        <R.Footer />
      </Router>
    </>
  )
}

export default App
