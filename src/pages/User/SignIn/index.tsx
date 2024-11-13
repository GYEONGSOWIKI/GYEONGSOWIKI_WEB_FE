import * as C from "@src/allFiles"
import * as S from "./style"

const SignIn = () => {
    return (
        <>
            <C.Header />
            <S.TopCont>
                <S.WelcomeWrap>
                    <h1>경소위키에 오신걸 환영합니다!</h1>
                    <h2>경소고/경소마고 통합로그인으로 로그인할게요.</h2>
                </S.WelcomeWrap>
                <S.MainCont>
                    <S.MainWrap>
                        <S.TitleWrap>
                            <S.SymbolWrap>
                                <C.Symbol />
                            </S.SymbolWrap>
                            <h1>로그인</h1>
                        </S.TitleWrap>
                        <S.FormWrap>
                            <form action="">
                                <C.InputField label="아이디" type="text" placeholder="아이디를 입력해주세요." />
                                <C.InputField label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
                                <button type="submit" className="submitBtn">재학생 로그인</button>
                            </form>
                        </S.FormWrap>
                    </S.MainWrap>
                </S.MainCont>
            </S.TopCont>
        </>
    )
}
export default SignIn