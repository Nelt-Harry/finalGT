import React, { useEffect, useState } from "react";
import ListQuestion from "../components/ListQuestion";
import Sidebar from "../components/Sidebar";

export default function Admin(props) {
    const initalData = {
        name: "Thêm bộ câu hỏi",
        question: [{ question: "", answers: [""], correctAns: null }],
    };

    const [list, setList] = useState(initalData);
    const [listCourse, setListCourse] = useState([]);
    const [listIndex, setListIndex] = useState(null);

    useEffect(() => {
        const storaged = localStorage.getItem("data");
        if (storaged) {
            setListCourse(JSON.parse(storaged));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(listCourse));
    }, [listCourse]);

    const updateListCourse = (type) => {
        const newListCourse = [...listCourse];

        switch (type) {
            case "SAVE":
                if (listIndex != null) {
                    newListCourse[listIndex] = list;
                } else {
                    newListCourse.push(list);
                }
                break;
            case "DEL":
                if (listIndex) {
                    newListCourse.splice(listIndex, 1);
                }
                break;
            default:
                break;
        }
        setListCourse(newListCourse);
    };

    return (
        <div className="admin">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="col l-3">
                        <Sidebar
                            listCourse={listCourse}
                            setList={setList}
                            setListIndex={setListIndex}
                        />
                    </div>
                    <div className="col l-9">
                        <ListQuestion
                            listQuestion={list}
                            setList={setList}
                            setListCourse={updateListCourse}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
