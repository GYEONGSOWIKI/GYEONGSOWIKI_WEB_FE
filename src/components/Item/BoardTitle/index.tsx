import * as S from "./style"

interface BoardTitleProps {
    title: string;
    description: string;
}

const BoardTitle = ({ title, description }: BoardTitleProps) => {
    return (
        <S.TitleWrap>
            <div>
                <h1><span>{title}</span>: {description}</h1>
            </div>
        </S.TitleWrap>
    )
}
export default BoardTitle