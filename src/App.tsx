import * as R from "./allFiles";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    console.log('%c ⚠️ 타인에 대한 조롱, 또는 비방, 비난으로 인해 발생하는 법적인 문제에 대한 책임은 본인에게 있습니다.',
      `font-size:30px; font-weight: 900; color:white; background-color: red`);
  }, [])

  return (
    <>
      <R.CommonRouter />
      <ToastContainer limit={1} />
    </>
  );
};

export default App; 