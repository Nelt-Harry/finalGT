import React, { useEffect, useState } from "react";
import { Input } from "./Input";

export const Question = (props) => {
    const [fullQuestion, setFullQuestion] = useState({
        question: "",
        answers: [],
        correctAns: " ",
        image: null,
    });

    const updateFullQuestion = (type, value, index) => {
        const newFullQuestion = { ...fullQuestion };

        switch (type) {
            case "ASK":
                newFullQuestion.question = value;
                break;
            case "ANS":
                newFullQuestion.answers[index] = value;
                break;
            case "COR":
                newFullQuestion.correctAns = newFullQuestion.answers[index];
                break;
            case "IMG":
                newFullQuestion.image = value;
                break;
            case "ADD_ANS":
                newFullQuestion.answers.push("");
                break;
            case "ADD_IMG":
                newFullQuestion.image = "";
                break;
            case "DEL_ANS":
                newFullQuestion.answers.splice(index, 1);
                break;
            default:
                break;
        }
        props.updateListQuestion("LIST", newFullQuestion, props.index);
    };

    useEffect(() => {
        if (props.question) {
            setFullQuestion(props.question);
        }
    }, [setFullQuestion, props.question]);

    return (
        <div className="question__content">
            <div className="question__content__txt">Câu hỏi:</div>
            <Input
                className="question__content-question"
                value={fullQuestion.question}
                placeholder="Nhập câu hỏi"
                rows="2"
                onBlur={(e) => {
                    updateFullQuestion("ASK", e.target.value);
                }}
            ></Input>
            <div className="question__content__txt">Đáp án:</div>
            {fullQuestion.answers.map((answer, index) => (
                <AnswerInput
                    answer={answer}
                    fullQuestion={fullQuestion}
                    index={index}
                    key={index}
                    updateFullQuestion={updateFullQuestion}
                />
            ))}
            <div
                className="question__content-answer__input add"
                onClick={() => {
                    updateFullQuestion("ADD_ANS");
                }}
            >
                Thêm đáp án
            </div>

            {fullQuestion.image != null ? (
                <>
                    <div className="question__content__txt">Hình ảnh:</div>
                    <Input
                        className="question__content-img"
                        value={fullQuestion.image}
                        placeholder="Nhập link hình ảnh"
                        onBlur={(e) => {
                            updateFullQuestion("IMG", e.target.value);
                        }}
                        rows="1"
                    ></Input>
                </>
            ) : (
                <div
                    className="question__content-answer__input add"
                    onClick={() => {
                        updateFullQuestion("ADD_IMG");
                    }}
                >
                    Thêm hình ảnh
                </div>
            )}
            <div
                className="question__content-delete"
                onClick={() => {
                    props.updateListQuestion("DEL", null, props.index);
                }}
            >
                <i className="fas fa-trash"></i>
            </div>
        </div>
    );
};

const AnswerInput = (props) => {
    const [answer, setAnswer] = useState("");
    const [fullQuestion, setFullQuestion] = useState("");

    useEffect(() => {
        setAnswer(props.answer);
        setFullQuestion(props.fullQuestion);
    }, [props.fullQuestion, props.answer]);

    return (
        <div className="question__content-answer">
            <Input
                className={`question__content-answer__input ${
                    answer === fullQuestion.correctAns ? "true" : ""
                }`}
                value={answer}
                placeholder="Nhập câu trả lời"
                rows="1"
                onBlur={(e) => {
                    props.updateFullQuestion(
                        "ANS",
                        e.target.value,
                        props.index
                    );
                }}
            ></Input>
            <button
                className="question__content-answer__btn "
                disabled={answer === "" ? true : false}
                onClick={() => {
                    props.updateFullQuestion("COR", null, props.index);
                }}
            >
                Correct answer
            </button>
            <button
                className="question__content-answer__btn delete"
                onClick={() => {
                    props.updateFullQuestion("DEL_ANS", null, props.index);
                }}
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};
