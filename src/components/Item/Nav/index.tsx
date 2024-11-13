import * as S from "./style"

import React from "react";
import { Link } from "react-router-dom"


interface MenuItemProps {
    to: string;
    icon: React.ReactNode;
    children: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, icon, children }) => {
    return (
        <Link to={to}>
            <S.ItemWrap>
                {icon}
                <span>{children}</span>
            </S.ItemWrap>
        </Link>
    )
}
export default MenuItem