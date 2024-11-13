import * as S from "./style"

import SymbolOld from "@assets/symbol-only.png"
import SymbolNew from "@assets/symbol-new-only.png"

const Symbol = () => {
    return (
        <S.TopCont>
            <S.MotionWrap
                initial={{ rotate: "-60deg", scale: 2 }}
                animate={{ rotate: "0deg", scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", gap: "20px" }}
            >
                <img
                    draggable={false}
                    src={SymbolOld}
                    alt="Symbol-old"
                />
                <img
                    draggable={false}
                    src={SymbolNew}
                    alt="Symbol-new"
                />
            </S.MotionWrap>
        </S.TopCont>
    )
}
export default Symbol