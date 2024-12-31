import * as C from "@src/allFiles"
import * as S from "./style"

import schoolInfoRows from "@src/constant/schoolInfoRows"
import SchoolImg from "@assets/SchoolImage.png"
import Logo from "@assets/logo-dark.png"

const Home = () => {
    return (
        <S.TopCont>
            <S.ContentArea>
                <S.MainWrap>
                    <S.Board>
                        <C.BoardTitle title="경소위키" description="대문" />
                        <C.Classify description="대문" />
                        <S.HomeDescWrap>
                            <S.IntroSect>
                                <h1>
                                    여러분이 가꾸어 나가는 {" "}
                                    <span>역사의 고서</span>
                                </h1>
                                <h2>
                                    <span>
                                        경소위키
                                    </span>
                                    에 오신 것을 환영합니다.
                                </h2>
                            </S.IntroSect>
                            <S.HomeDescContents>
                                <div>
                                    경소위키는
                                    경북소프트웨어고등학교/경북소프트웨어마이스터고등학교
                                    학생이라면 누구나 기여할 수 있는 위키입니다.
                                    <br />
                                    검증되지 않았거나 편향된 내용이 있을 수 있습니다.
                                    <br />
                                    <span>
                                        ※ 타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는
                                        문제에 대한 책임은 본인에게 있습니다. 주의해주세요! ※
                                    </span>
                                </div>
                            </S.HomeDescContents>
                        </S.HomeDescWrap>
                        <S.HomeTableWrap>
                            <S.TableSect>
                                <S.TableTitleWrap>
                                    <h1>경북소프트웨어마이스터고등학교</h1>
                                    <p> Gyeongbuk Software Meister High School</p>
                                </S.TableTitleWrap>
                                <img src={SchoolImg} alt="경소고/경소마고 학교 이미지" />
                                {schoolInfoRows.map((row, index) => (
                                    <C.Table key={index} title={row.title} content={row.content} />
                                ))}
                            </S.TableSect>
                        </S.HomeTableWrap>
                        <S.SummaryWrap>
                            <C.Toggle title="개요">
                                <div className="articleContent}">
                                    환영합니다! 바르게 알고 바르게 행하는
                                    경북소프트웨어마이스터고등학교입니다. <br />
                                    경북소프트웨어고등학교/경북소프트웨어마이스터고등학교
                                    학생이라면 누구나 문서를 편집하고 작성할 수 있습니다. <br />
                                    사실에 근거하고 남을 비방하거나 칭찬하지 않는 선에서
                                    자유롭게 문서를 편집할 수 있습니다.
                                    <br /> <br />
                                    <span style={{ fontWeight: 700 }}>
                                        교내의 모든 유/무선 네트워크 정보는 국가정보원
                                        『국가·공공기관의 무선망 구축 보안 가이드라인,
                                        국가정보보안 기본지침』과, <br />
                                        교육부 『정보보안기본지침』에 따라 대외비로 관리되고
                                        있으니 절대로 기재해서는 안 됩니다.
                                    </span>
                                </div>
                            </C.Toggle>
                            <C.Toggle title="학과">
                                <div className="articleContent}">
                                    소프트웨어개발과 40명, 인공지능개발과 20명, 게임개발과
                                    20명으로 구성되어 있다.
                                    <br /> <br />
                                    <h3>소프트웨어개발과</h3>
                                    소프트웨어개발의 계획, 분석, 설계, 프로그래밍, 테스트,
                                    운영업무를 수행하는 SW개발자를 양성한다.
                                    <br /> <br />
                                    <h3>인공지능개발과</h3>
                                    인공지능과 빅데이터에 대한 기본적인
                                    지식을 바탕으로, 다양한 소프트웨어 개발 기술을 습득하여,
                                    창의적으로 소프트웨어를 개발할 수 있는 인공지능 소프트웨어
                                    전문가를 양성한다.
                                    <br /> <br />
                                    <h3>게임개발과</h3>
                                    게임개발의 기획, 분석, 설계, 디자인,
                                    프로그래밍, 테스트, 운영업무를 수행하는 게임개발자를
                                    양성한다.
                                </div>
                            </C.Toggle>
                            <C.Toggle title="3C 인증제">
                                <div className="articleContent">
                                    <div className="highlightWrap">
                                        <div>
                                            <strong>C</strong>ompetence · <strong>C</strong>
                                            reativity · <strong>C</strong>haracter qualities 인증제
                                        </div>
                                    </div>
                                    <br /> <br />
                                    6대 핵심 역량을 기준으로 특정 목표를 달성하며 포인트를 얻어
                                    특정 레벨에 달성하면 여러가지 부상과 인재상을 받을 수 있는
                                    제도이다.
                                    <br /> <br />
                                    간단히 말해 RPG 게임처럼 학교에서 정한 퀘스트를 깨며
                                    포인트를 모아 레벨업을 하면 여러가지 보상을 주는 것. <br />
                                    <br />
                                    3년 최대 포인트는 1000점 만점이며 100점씩 마다, 총 9번
                                    부상을 지급한다.
                                    <br /> <br />
                                    자격증을 따거나 프로젝트를 하는등의 실무 역량뿐만 아니라
                                    대회를 참가만 하더라도 점수를 주며
                                    <span className="deleteContent">
                                        {" "}
                                        영화나 공연을 보거나
                                    </span>
                                    , 책을 읽은 후 소감문을 블로그에 올리는 등 여러가지 활동들을
                                    하면 포인트를 준다.
                                </div>
                            </C.Toggle>
                            <C.Toggle title="캡스톤 프로젝트">
                                <div className="articleContent">
                                    2학년부터 프로젝트 중심의 방과후 수업을 운영한다. 한 학기
                                    동안 팀을 짜서 프로젝트를 진행해야 되고, 지정
                                    프로젝트(기업연계, 의성, 학교 과제 - 상벌점제, 3C인증제),
                                    자율 프로젝트로 진행된다.
                                    <br /> <br />
                                    학교 선생님들이
                                    멘토로 참여하거나 산학겸임선생님, 기업인사들이 멘토로
                                    참여한다.
                                    <br /> <br />
                                    열심히 하는 친구도 많고, 버스 타는 친구도 많다.
                                    <br /> <br />
                                    세부 프로젝트에 대한 자세한 내용은&nbsp;
                                    <a
                                        href="https://sites.google.com/view/gbsw2023/"
                                        target="blank"
                                    >
                                        이곳
                                    </a>
                                    에서 확인할 수 있다.
                                </div>
                            </C.Toggle>
                        </S.SummaryWrap>
                    </S.Board>
                </S.MainWrap>
                <S.HomeFooter>
                    <img src={Logo} alt="경소위키 로고" />
                    <p>
                        경소위키는 공식 역사서 및 백과사전이 아니며 검증되지 않았거나,
                        편향적이거나, 잘못된 서술이 있을 수 있습니다.
                        <br />
                        질문이나 특정 사항에 대해 언제든지 문의주실 수 있습니다.
                    </p>
                </S.HomeFooter>
            </S.ContentArea>
            <C.Aside />
        </S.TopCont>
    )
}
export default Home