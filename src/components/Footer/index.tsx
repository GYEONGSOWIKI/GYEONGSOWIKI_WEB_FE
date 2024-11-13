import * as S from "./style"

import SymbolOld from "@assets/symbol-only.png"
import SymbolNew from "@assets/symbol-new-only.png"

const Footer = () => {
    return (
        <S.FooterWrap>
            <a href="https://school.gyo6.net/gbsw/main.do?sysId=gbsw" target="blank">
                <img
                    src={SymbolOld}
                    alt="Symbol-old"
                />
                <img
                    src={SymbolNew}
                    alt="Symbol-new"
                />
            </a>
            <p>경상북도 의성군 봉양면 봉호로 14 Tel : 교무실 : 054-832-2903 행정실 : 054-832-2900   |  Fax : 행정실 : 054-833-2877
                <br />
                Copyright(c) 경북소프트웨어고등학교. All rights reserved.
            </p>
        </S.FooterWrap>
    )
}
export default Footer