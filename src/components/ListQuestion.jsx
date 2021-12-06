import React, { useEffect, useRef, useState } from "react";
import { Question } from "../components/Question";
import { AppContext } from "../context/AppProvider";
import { Input } from "./Input";

const ListQuestion = (props) => {
    const initalData = {
        name: "Thêm bộ câu hỏi",
        question: [
            { question: "", answers: [""], correctAns: " ", image: null },
        ],
    };

    const refContainer = useRef(initalData);
    const [listQuestion, setListQuestion] = useState(refContainer.current);

    const { _Node, _Linklist } = React.useContext(AppContext);
    const llQuestion = new _Linklist();

    useEffect(() => {
        if (props.listQuestion) {
            for (let i = 0; i < props.listQuestion.question.length; i++) {
                const node = new _Node(props.listQuestion.question[i]);
                llQuestion.push(node);
            }
        } else {
            const node = new _Node(initalData.question[0]);
            llQuestion.push(node);
        }
    });

    const updateListQuestion = (type, value, index) => {
        const newListQuestion = { ...listQuestion };

        switch (type) {
            case "NAME":
                newListQuestion.name = value;
                break;
            case "LIST":
                const newQuestion = llQuestion.at(index);

                newQuestion.question = value.question;
                newQuestion.correctAns = value.correctAns;
                newQuestion.answers = value.answers;
                newQuestion.image = value.image;

                newListQuestion.question = llQuestion.toArray();
                break;
            case "DEL":
                llQuestion.splice(index, 1);

                newListQuestion.question = llQuestion.toArray();
                break;
            case "ADD":
                const node = new _Node({
                    question: "",
                    answers: [""],
                    correctAns: null,
                    image: null,
                });

                llQuestion.push(node);
                newListQuestion.question = llQuestion.toArray();
                break;
            default:
                break;
        }
        props.setList({ ...newListQuestion });
    };

    useEffect(() => {
        props.listQuestion
            ? setListQuestion(props.listQuestion)
            : setListQuestion(refContainer.current);
    }, [props.listQuestion]);

    const confirmDelete = () => {
        if (window.confirm("You want to DELETE this course ?")) {
            props.setListCourse("DEL");
        }
    };

    const validateList = () => {
        for (const item of listQuestion.question) {
            return !(
                item.question === "" ||
                item.answers === [] ||
                item.correctAns === null
            );
        }
    };

    const checkValid = (item) => {
        if (
            item.question === "" ||
            item.answers === [] ||
            item.correctAns === null
        ) {
            return 1;
        }
        return 0;
    };

    const saveListQuestion = () => {
        const validate = validateList();
        if (validate) {
            props.setListCourse("SAVE");
        } else {
            alert("Bộ câu hỏi không hợp lệ");
            const newListQuestion = { ...listQuestion };

            newListQuestion.question = listQuestion.question.sort((a, b) => {
                return checkValid(b) - checkValid(a);
            });

            props.setList({ ...newListQuestion });
        }
    };

    return (
        <div className="admin__table">
            <div className="admin__table__name">
                <Input
                    value={listQuestion.name}
                    onBlur={(e) => {
                        updateListQuestion("NAME", e.target.value);
                        console.log(listQuestion);
                    }}
                />
                <div className="admin__table__button">
                    <button
                        className="admin__table__button-add"
                        onClick={() => {
                            saveListQuestion();
                        }}
                    >
                        Lưu
                    </button>
                    <button
                        className="admin__table__button-del"
                        onClick={() => {
                            confirmDelete();
                        }}
                    >
                        Xóa
                    </button>
                </div>
            </div>
            {listQuestion.question.map((item, index) => (
                <Question
                    question={item}
                    key={index}
                    index={index}
                    updateListQuestion={updateListQuestion}
                ></Question>
            ))}
            <button
                className="admin__table__add-course"
                onClick={() => {
                    updateListQuestion("ADD");
                }}
            >
                <i className="far fa-plus-square"></i>Thêm câu hỏi
            </button>
        </div>
    );
};
export default ListQuestion;
