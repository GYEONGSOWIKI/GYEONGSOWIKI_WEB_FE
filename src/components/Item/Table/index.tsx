import * as S from "./style"

interface TableProps {
    title: string;
    content: string;
}

const Table = ({ title, content }: TableProps) => {
    return (
        <S.TableWrap>
            <S.TableTitle>{title}</S.TableTitle>
            <S.TableContent>{content}</S.TableContent>
        </S.TableWrap>
    )
}
export default Table