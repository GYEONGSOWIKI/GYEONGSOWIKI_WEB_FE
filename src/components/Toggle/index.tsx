import * as S from "./style";

import React, { ReactNode, useState } from "react";

import ArrowIcon from "@assets/svg/ArrowIcon";

interface TogglePropsTpye {
    title: string;
    children: ReactNode;
}

const Toggle: React.FC<TogglePropsTpye> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <S.SectionWrap>
            <S.AccodianMenu onClick={handleToggle}>
                <S.ToggleSvg>
                    <ArrowIcon direction={isOpen ? "bottom" : "right"} />
                </S.ToggleSvg>
                <S.SummaryTitle className={isOpen ? "titleOpen" : "titleClosed"}>
                    {title}
                </S.SummaryTitle>
            </S.AccodianMenu>
            <S.SummaryArticle className={isOpen ? "open" : ""}>
                <S.SummaryArticleContent>{children}</S.SummaryArticleContent>
            </S.SummaryArticle>
        </S.SectionWrap>
    );
};

export default Toggle;
