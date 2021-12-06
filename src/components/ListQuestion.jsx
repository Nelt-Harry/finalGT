import React, { useEffect, useRef, useState } from "react";
import { Question } from "../components/Question";
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

    useEffect(() => {
        props.listQuestion
            ? setListQuestion(props.listQuestion)
            : setListQuestion(refContainer.current);
    }, [props.listQuestion]);

    const updateListQuestion = (type, value, index) => {
        const newListQuestion = { ...listQuestion };

        switch (type) {
            case "LIST":
                newListQuestion.question[index] = value;
                break;
            case "NAME":
                newListQuestion.name = value;
                break;
            case "DEL":
                newListQuestion.question.splice(index, 1);
                break;
            case "ADD":
                newListQuestion.question.push({
                    question: "",
                    answers: [""],
                    correctAns: " ",
                    image: null,
                });
                break;
            default:
                break;
        }
        props.setList(newListQuestion);
    };

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

    const saveListQuestion = () => {
        const validate = validateList();
        if (validate) {
            props.setListCourse("SAVE");
        } else {
            alert("Bộ câu hỏi không hợp lệ");
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
