import * as S from "./style";

import { Logo, TopIcon } from "@assets/index";

interface InfoPropsType {
    title: string;
    descriptions: string[];
}

const InfoSection = ({ title, descriptions }: InfoPropsType) => (
    <S.InfoWrap>
        <div className="top-title">{title}</div>
        {descriptions.map((desc, index) => (
            <div key={index} className="top-desc">{desc}</div>
        ))}
    </S.InfoWrap>
);

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <S.FooterCont>
            <S.FooterWrap>
                <div className="topFooter">
                    <a href="https://github.com/WineAndAppsolute" target="_blank" rel="noopener noreferrer">
                        <img src={Logo} alt="경소위키 로고" className="logo" />
                    </a>
                    <InfoSection
                        title="Team. WINE & Appsolute"
                        descriptions={["김승환, 박성민, 변예현, 손보석, 성홍제, 유진승"]}
                    />
                    <InfoSection
                        title="School."
                        descriptions={[
                            "경북소프트웨어마이스터고등학교",
                            "14 Bongho-ro, Bongyang-myeon, Uiseong-gun, Gyeongsangbuk-do"
                        ]}
                    />
                    <S.InfoWrap>
                        <img src={TopIcon} alt="올라가기 아이콘" onClick={scrollToTop} />
                    </S.InfoWrap>
                </div>
                <div className="topBottom">
                    COPYRIGHT © 경소위키 ALL RIGHT RESERVED.
                </div>
            </S.FooterWrap>
        </S.FooterCont>
    );
};

export default Footer;
