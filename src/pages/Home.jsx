import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

export const Home = () => {
    const [listCourse, setListCourse] = useState([]);

    useEffect(() => {
        const storaged = localStorage.getItem("data");
        if (storaged) {
            setListCourse(JSON.parse(storaged));
        }
    }, []);

    return (
        <div className="home__table grid wide">
            <div className="home__table__container" id="homeTable">
                <h1 className="container-header">Học lý thuyết</h1>
                <div className="row sm-gutter">
                    {listCourse.map((item, index) => (
                        <div className="col l-4" data-aos="flip-up" key={index}>
                            <Link to={`/question/${slugify(item.name)}`}>
                                <div className="content">
                                    <div className="content__header">
                                        Bộ bài tập lý thuyết số {index + 1}
                                    </div>
                                    <div className="content__description-list">
                                        <span className="content__description-item">
                                            {item.name}
                                        </span>
                                        <span className="content__description-item">
                                            <i className="far fa-clock"></i>
                                            Thời gian làm bài: 25 phút
                                        </span>
                                        <span className="content__description-item">
                                            <i className="far fa-question-circle"></i>
                                            Số lượng câu hỏi:{" "}
                                            {item.question.length} câu
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* thi thử */}
                <h1 className="container-header">Thi thử</h1>
                <div className="row sm-gutter">
                    {listCourse.map((item, index) => (
                        <div className="col l-4" data-aos="flip-up" key={index}>
                            <Link to={`/question/mocktest`}>
                                <div className="content">
                                    <div className="content__header">
                                        Đề thi thử số {index + 1}
                                    </div>
                                    <div className="content__description-list">
                                        <span className="content__description-item">
                                            Thi thử
                                        </span>
                                        <span className="content__description-item">
                                            <i className="far fa-clock"></i>
                                            Thời gian làm bài: 25 phút
                                        </span>
                                        <span className="content__description-item">
                                            <i className="far fa-question-circle"></i>
                                            Số lượng câu hỏi: ngẫu nhiên
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
