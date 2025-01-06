import * as S from "./style"

import { useState } from "react";
import { Link } from "react-router-dom"
import MenuItem from "../Item/Nav"

import { IoPerson, IoSearchSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiSolidTrafficCone, BiSolidCategory } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import Logo from "../../assets/logo.png"


const Header = () => {
    const [isSignIn, setIsSignIn] = useState(true)

    return (
        <S.TopCont>
            <S.HeaderCont>
                <S.NavCont>
                    <Link to={"/"}>
                        <img src={Logo} alt="logo-white" className="logo" />
                    </Link>
                    <S.NavWrap>
                        <MenuItem to={"/student"} icon={<IoPerson />} children={"학생"} />
                        <MenuItem to={"/teacher"} icon={<FaChalkboardTeacher />} children={"선생님"} />
                        <MenuItem to={"/accident"} icon={<BiSolidTrafficCone />} children={"사건/사고"} />
                        <MenuItem to={"/club"} icon={<MdPeopleAlt />} children={"동아리"} />
                        <MenuItem to={"/category"} icon={<BiSolidCategory />} children={"틀"} />
                    </S.NavWrap>
                </S.NavCont>
                <S.SearchCont>
                    <S.SearchWrap action="#" >
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요.."
                            className="searchInput"
                        />
                        <button type="submit" className="searchBtn">
                            <IoSearchSharp className="logo" />
                        </button>
                    </S.SearchWrap>
                    {isSignIn ? (
                        <S.SignInWrap>
                            <Link to={""}><span className="makeDoc">문서 생성</span></Link>
                            <Link to={"/mypage"}>
                                <div className="detail">
                                    <IoPerson />
                                    <span>내정보</span>
                                </div>
                            </Link>
                        </S.SignInWrap>
                    ) : (
                        <S.SignInWrap>
                            <Link to={"/login"}>
                                <div className="detail">
                                    <IoPerson />
                                    <span>로그인</span>
                                </div>
                            </Link>
                        </S.SignInWrap>
                    )}
                </S.SearchCont>
            </S.HeaderCont>
        </S.TopCont >
    )
}
export default Header