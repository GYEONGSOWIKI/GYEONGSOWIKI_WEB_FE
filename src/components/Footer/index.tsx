import * as S from "./style"

import Logo from "@assets/logo-dark.png"

const Footer = () => {
    return (
        <S.FooterWrap>
            <a href="https://github.com/GYEONGSOWIKI" target="blank">
                <img src={Logo} alt="경소위키 로고" />
            </a>
            <S.InfoWrap>
                <p>김승환, 박성민, 변예현, 손보석, 성홍제, 유진승</p>
                <p>14 Bongho-ro, Bongyang-myeon, Uiseong-gun, Gyeongsangbuk-do</p>
            </S.InfoWrap>
        </S.FooterWrap>
    )
}
export default Footer