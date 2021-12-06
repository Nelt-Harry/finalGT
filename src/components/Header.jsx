import React from "react";
import { auth } from "../firebase/config";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

export const Header = () => {
    const { user } = React.useContext(AuthContext);

    return (
        <div className="header">
            <div className="user">{user ? <UserInfo user={user} /> : ""}</div>
        </div>
    );
};
function UserInfo(props) {
    const user = props.user;
    const photoURL = user ? user.photoURL : null;

    return (
        <div className="grid">
            <nav className="header">
                <div className="grid wide">
                    <div className="header__navbar">
                        <ul className="header__navbar-list">
                            <li className="header__navbar-item">
                                <Link to="/">
                                    <div className="header__navbar-item--link">
                                        Trang chủ
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul className="header__navbar-list">
                            {user.role === "admin" ? (
                                <li className="header__navbar-item btn-login">
                                    <Link to="/admin">
                                        <div className="header__navbar-item--link">
                                            Admin Page
                                        </div>
                                    </Link>
                                </li>
                            ) : (
                                ""
                            )}
                            <li className="header__navbar-item btn-user">
                                <div
                                    href="#"
                                    className="header__navbar-item--user"
                                >
                                    <div
                                        className="user-avt"
                                        style={{
                                            backgroundImage: `url(${photoURL})`,
                                        }}
                                    />
                                    {user.displayName}
                                </div>
                                <div className="navbar-user--menu">
                                    <ul className="navbar-user--list">
                                        <li className="navbar-user--item">
                                            <i className="fas fa-info-circle"></i>
                                            Thông tin cá nhân
                                            <i className="ti-angle-right more-option--icon" />
                                        </li>
                                        <li className="navbar-user--item">
                                            <i className="fas fa-cog"></i>
                                            Cài đặt
                                        </li>
                                        <li
                                            className="navbar-user--item"
                                            onClick={() => auth.signOut()}
                                        >
                                            <i className="fas fa-sign-out-alt"></i>
                                            Đăng xuất
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
