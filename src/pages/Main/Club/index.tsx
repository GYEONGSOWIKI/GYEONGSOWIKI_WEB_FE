import * as C from "@src/allFiles";
import * as S from "./style";

const Club = () => {
    return (
        <S.TopCont>
            <S.ContentArea>
                <S.MainWrap>
                    <S.Board>
                        <C.BoardTitle title="경소위키" description="동아리" />
                        <C.Classify description="동아리" />
                    </S.Board>
                </S.MainWrap>
            </S.ContentArea>
            <C.Aside />
        </S.TopCont>
    );
};

export default Club;
