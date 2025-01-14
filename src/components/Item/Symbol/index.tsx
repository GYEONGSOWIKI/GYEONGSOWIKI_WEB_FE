import * as S from "./style"

import { NewSymbol, OldSymbol } from "@assets/index"

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
                    src={OldSymbol}
                    alt="Symbol-old"
                />
                <img
                    draggable={false}
                    src={NewSymbol}
                    alt="Symbol-new"
                />
            </S.MotionWrap>
        </S.TopCont>
    )
}
export default Symbol