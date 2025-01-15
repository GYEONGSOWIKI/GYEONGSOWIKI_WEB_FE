"use client";

import { createElement, memo, useCallback, useState } from "react";
import { autoClosingTag, documentCompiler } from "@src/utils";
import { CLASSIFY } from "@src/record";
import { useDate } from "@src/hooks";
import { EditorType } from "@src/enum";
import DragDropUpload from "../DragDropUpload";
import PasteUpload from "../PasteUpload";
import FrameEditor from "../FrameEditor";
import FrameEncoder from "../FrameEncoder";
import * as styles from "./style.css";
import DocsExample from "./DocsExample";

interface EditorProps {
    contents?: string;
    title?: string;
    docsType?: string;
    mode: EditorType.EDIT | EditorType.CREATE;
}

const Editor = memo(({ contents = "", title = "", docsType = "", mode }: EditorProps) => {
    const { getValidYearList } = useDate();
    const { openToast, openConfirm } = useModal();
    const [cursorPosition, setCursorPosition] = useState(0);
    const [isChanged, setIsChanged] = useState(false);
    const [docs, setDocs] = useState({
        enroll: 0,
        title,
        contents: contents.replaceAll("<br>", "\n"),
        docsType,
    });
    const isFrame = docs.docsType === "FRAME";

    const handleDragDropUpload = useCallback((file: File) => {
        // Placeholder for file upload logic if needed in the future
    }, []);

    const handleOpenConfirm = () => {
        if (contents !== docs.contents.trim()) {
            openConfirm({
                content: "변경 사항을 삭제하시겠습니까?",
                onConfirm: () => {
                    setDocs((prev) => ({ ...prev, contents }));
                    setIsChanged((prev) => !prev);
                },
            });
        }
    };

    const handleCreateDocsClick = () => {
        if (!docs.title.trim()) return openToast("제목을 입력해주세요!");
        if (!docs.enroll) return openToast("문서 연도를 선택해주세요!");
        if (!docs.docsType) return openToast("문서 분류를 선택해주세요!");
        if (!docs.contents.trim()) return openToast("내용을 입력해주세요!");

        const invalidCharacters = ["#", "?", "/", "\\", "%"];
        const isInvalidTitle = invalidCharacters.some((char) => docs.title.includes(char));
        if (isInvalidTitle)
            return openToast(`문서명에는 ${invalidCharacters.join(" ")} 기호를 넣을 수 없습니다.`);

        openToast("문서가 생성되었습니다!");
    };

    const handleEditDocsClick = () => {
        if (contents === docs.contents.trim()) return openToast("변경된 사항이 없습니다!");

        openToast("문서가 수정되었습니다!");
    };

    const setDocsType = (selectedDocsType: string) => {
        if (isFrame) setDocs((prev) => ({ ...prev, contents: "" }));
        setDocs((prev) => ({ ...prev, docsType: selectedDocsType }));
    };

    return (
        <>
            <main className={styles.container}>
                <section className={styles.editorBox}>
                    <input
                        onChange={({ target: { value } }) => setDocs((prev) => ({ ...prev, title: value }))}
                        value={docs.title}
                        placeholder="제목을 입력해주세요"
                        className={styles.titleInput}
                        disabled={mode === EditorType.EDIT}
                    />
                    {mode === EditorType.EDIT ? (
                        <button onClick={handleOpenConfirm} className={styles.undoBtn}>
                            되돌리기
                        </button>
                    ) : (
                        (function SelectEnrollAndDocsTypeComponent() {
                            return (
                                <>
                                    <section className={styles.enrollList}>
                                        {getValidYearList().map((year) => (
                                            <span
                                                key={year}
                                                onClick={() => setDocs((prev) => ({ ...prev, enroll: year }))}
                                            >
                                                &nbsp;<b className={styles.year[String(year === docs.enroll)]}>{year}</b> |
                                            </span>
                                        ))}
                                    </section>
                                    <section className={styles.docsTypeList}>
                                        {[
                                            "ACCIDENT",
                                            "TEACHER",
                                            "MAJOR_TEACHER",
                                            "MENTOR_TEACHER",
                                            "CLUB",
                                            "FREE_CLUB",
                                            "FRAME",
                                        ].map((type) => (
                                            <button
                                                onClick={() => setDocsType(type)}
                                                key={type}
                                                className={styles.docsType[String(type === docs.docsType)]}
                                            >
                                                {CLASSIFY[type]}
                                            </button>
                                        ))}
                                    </section>
                                </>
                            );
                        })()
                    )}
                    {isFrame ? (
                        <FrameEditor
                            mode={mode}
                            docs={docs}
                            setDocs={setDocs}
                            setCursorPosition={setCursorPosition}
                            isChanged={isChanged}
                        />
                    ) : (
                        <textarea
                            onKeyDown={(e) => setCursorPosition((e.target as HTMLTextAreaElement).selectionStart)}
                            onChange={(e) => setDocs((prev) => ({ ...prev, contents: autoClosingTag(e) }))}
                            value={docs.contents}
                            placeholder="문서 내용을 입력해주세요. 사진 또는 동영상을 넣으려면 파일을 드래그&드롭하세요."
                            className={styles.textarea}
                        />
                    )}
                </section>
                <section className={styles.previewBox}>
                    <h1 className={styles.previewTitle}>{docs.title}</h1>
                    {docs.docsType && (
                        <div className={styles.classifyBox}>
                            분류 : <span className={styles.classify}>{CLASSIFY[docs.docsType]}</span>
                        </div>
                    )}
                    {createElement(
                        "section",
                        {
                            class: styles.preview,
                            dangerouslySetInnerHTML: isFrame ? null : { __html: documentCompiler(docs.contents) },
                        },
                        isFrame ? <FrameEncoder {...docs} mode="WRITE" /> : null,
                    )}
                </section>
                {createElement(
                    "button",
                    {
                        class: styles.writeButton,
                        onClick: mode === EditorType.EDIT ? handleEditDocsClick : handleCreateDocsClick,
                    },
                    mode === EditorType.EDIT ? "편집하기" : "생성하기",
                )}
                <DocsExample />
            </main>
            <DragDropUpload onUpload={handleDragDropUpload} />
            <PasteUpload onUpload={handleDragDropUpload} />
        </>
    );
});

export default Editor;
