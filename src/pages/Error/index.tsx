import * as S from "./style"

import { NotFoundLogo } from "@assets/index"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        toast.error("404 - 이전 페이지로 이동됩니다.", {
            position: "top-center",
            autoClose: 1500,
            pauseOnHover: false,
            closeButton: false,
            transition: Slide,
        });

        const timer = setTimeout(() => {
            if (location.pathname !== "/") {
                navigate(-1);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate, location]);

    return (
        <S.TopCont>
            <S.MainWrap>
                <img src={NotFoundLogo} alt="404 에러 캐릭터" />
                <h1>4<span>0</span>4</h1>
                <h2>이 페이지는 없는 페이지입니다.</h2>
            </S.MainWrap>
        </S.TopCont>
    )
};

export default NotFound