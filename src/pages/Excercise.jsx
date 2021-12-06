import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import slugify from "react-slugify";
import ViewPointModal from "../components/ViewPointModal";
import { AppContext } from "../context/AppProvider";

export const Excercise = () => {
    const [listQuestion, setListQuestion] = useState([]);
    const [userAnswer, setUserAnswer] = useState([]);
    const [timer, setTimer] = useState(25 * 60);
    const { isView, setIsView } = useContext(AppContext);
    const [point, setPoint] = useState(0);

    let params = useParams();

    useEffect(() => {
        const storaged = localStorage.getItem("data");
        let newListQuestion = JSON.parse(storaged).find((item) => {
            return slugify(item.name) === params.slug;
        });
        if (newListQuestion) {
            setListQuestion(newListQuestion.question);
        } else {
            const random = Math.floor(
                JSON.parse(storaged).length * Math.random()
            );
            newListQuestion = JSON.parse(storaged)[random];
            setListQuestion(newListQuestion.question);
        }

        const initalValue = [];
        for (let i = 0; i < newListQuestion.question.length; i++) {
            initalValue.push(false);
        }
        setUserAnswer(initalValue);
    }, [params.slug]);

    useEffect(() => {
        const time = setInterval(() => {
            setTimer((preState) => preState - 1);
        }, 1000);

        if (timer === 0) {
            clearInterval(time);
            submitAnswer();
        }
        return () => clearInterval(time);
    });

    useEffect(() => {
        const fixedSidebar = () => {
            const sidebarElement = document.getElementsByClassName(
                "excercise__side-bar__blank"
            )[0];
            if (sidebarElement) {
                sidebarElement.style.height = window.scrollY + "px";
            }
        };
        window.addEventListener("scroll", fixedSidebar);
        return () => window.removeEventListener("scroll", fixedSidebar);
    });

    const changeUserAnswer = (item, index) => {
        const newUserAnser = [...userAnswer];
        newUserAnser[index] = item;
        setUserAnswer(newUserAnser);
    };

    const submitAnswer = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsView(true);

        const countAnswer = userAnswer.filter((item) => item);

        if (countAnswer.length < listQuestion.length) {
            alert("Bạn chưa hoàn thành bài tất cả câu hỏi");
        } else {
            const newPoint = userAnswer.reduce((a, b, c) => {
                return a + b === listQuestion[c].correctAns ? 1 : 0;
            });
            setPoint(newPoint);
        }
    };

    return (
        <>
            <div className="grid wide">
                <div className="excercise">
                    <div className="row">
                        <div className="col l-3 excercise__side-bar">
                            <div className="excercise__side-bar__blank"></div>
                            <h1 className="excercise__side-bar__header">
                                Câu hỏi
                            </h1>
                            <div className="excercise__side-bar__content">
                                <div className="gird">
                                    <div className="row no-gutters">
                                        {listQuestion.map((item, index) => {
                                            return (
                                                <div
                                                    className={`excercise__side-bar__content__item col l-3 ${
                                                        userAnswer[index]
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    key={index}
                                                >
                                                    {index + 1}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <h1 className="excercise__side-bar__header">
                                Thời gian
                            </h1>
                            <div className="excercise__side-bar__timer">
                                {Math.floor(timer / 60)}:
                                {("0" + (timer % 60)).toString().slice(-2)}
                            </div>
                        </div>
                        <div className="col l-9 excercise__content">
                            {listQuestion.map((item, index) => {
                                return (
                                    <div
                                        className="excercise__content__item"
                                        key={index}
                                    >
                                        <div className="excercise__content__item__question">
                                            Câu {index + 1}: {item.question}
                                        </div>
                                        {item.image ? (
                                            <div className="excercise__content__item__image">
                                                <img src={item.image} alt="" />
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        <form className="excercise__content__item__answers">
                                            {item.answers.map(
                                                (item, nIndex) => {
                                                    return (
                                                        <div
                                                            className="answer__form"
                                                            key={nIndex}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="answer"
                                                                value={item}
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    changeUserAnswer(
                                                                        e.target
                                                                            .value,
                                                                        index
                                                                    );
                                                                }}
                                                            ></input>
                                                            <label htmlFor="answer">
                                                                {item}
                                                            </label>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </form>
                                    </div>
                                );
                            })}
                            <div
                                className="excercise__submit__btn"
                                onClick={() => submitAnswer()}
                            >
                                Nộp bài
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isView ? (
                <ViewPointModal point={point} questions={listQuestion.length} />
            ) : (
                ""
            )}
        </>
    );
};
