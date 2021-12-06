import React, { useState } from "react";

const Sidebar = (props) => {
    const listCourse = props.listCourse;
    const [isActive, setActive] = useState(null);

    const initalData = {
        name: "Thêm bộ câu hỏi",
        question: [{ question: "", answers: [""], correctAns: null }],
    };

    const handleClick = (listQuestion, index) => {
        setActive(index);
        props.setListIndex(index);
        props.setList({ ...listQuestion });
    };

    const addListQuestion = () => {
        setActive(null);
        props.setListIndex(null);
        props.setList(initalData);
    };

    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <div className="sidebar__item__header">
                    <h3>Các bộ câu hỏi đã tạo</h3>
                </div>
                {listCourse.map((listQuestion, index) => (
                    <div
                        key={index}
                        className={`sidebar__item__content ${
                            isActive === index ? "active" : ""
                        }`}
                        onClick={() => handleClick(listQuestion, index)}
                    >
                        {listQuestion.name}
                    </div>
                ))}
            </div>
            <div className="sidebar__item">
                <div
                    className="sidebar__item__add"
                    onClick={() => addListQuestion()}
                >
                    <i className="far fa-plus-square"></i>Thêm bộ câu hỏi
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
