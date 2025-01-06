import * as C from "@src/allFiles";
import * as S from "./style";

const Club = () => {
    return (
        <S.ClubArea>
            <S.ClubWrap>
                <S.ClubBoard>
                    <C.BoardTitle title="경소위키" description="동아리" />
                    <C.Classify description="동아리" />
                </S.ClubBoard>
            </S.ClubWrap>
        </S.ClubArea>
    );
};

export default Club;
