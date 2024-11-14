import * as C from "@src/allFiles"
import * as S from "./style"

const MyPage = () => {
    return (
        <S.TopCont>
            <S.ContentArea>
                <S.MainWrap>
                    <S.Board>
                        <C.BoardTitle title="경소위키" description="마이페이지" />
                        <C.Classify description="마이페이지" />
                        <S.MyPageDescWrap>
                            <C.Toggle title="내 정보">
                                <S.MyInfoWrap>
                                    <button>로그아웃</button>
                                </S.MyInfoWrap>
                            </C.Toggle>
                            <C.Toggle title="좋아요 누른 문서">
                                <></>
                            </C.Toggle>
                            <C.Toggle title="기여한 문서">
                                <></>
                            </C.Toggle>
                        </S.MyPageDescWrap>
                    </S.Board>
                </S.MainWrap>
            </S.ContentArea>
        </S.TopCont>
    )
}
export default MyPage
