import React from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppProvider";

const ViewPointModal = (props) => {
    const { setIsView } = React.useContext(AppContext);

    const sentence =
        props.point > 22
            ? "Chúc mừng bạn đã thi đậu"
            : "Chúc bạn may mắn lần sau";

    const history = useNavigate();

    const handleClick = () => {
        setIsView(false);
        history("/");
    };

    return (
        <>
            <div onClick={() => handleClick()}>
                <div className="view-point-modal"></div>
                <div className="view-point-modal-container">
                    <div>
                        <h3 className="view-point-modal-txt">{sentence}</h3>
                        <span className="view-point-modal-txt">
                            Số điểm: {props.point} / {props.questions}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewPointModal;
