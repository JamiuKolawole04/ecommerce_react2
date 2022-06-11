import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from '../../../../utils/axios'
const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()

        try {
            await axios({
                method: "post",
                url: "/user/register",
                data: { ...user },
                withCredentials: true
            });


            localStorage.setItem("firstLogin", JSON.stringify(true));

            window.location.href = "/"
        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={user.name}
                    onChange={onChangeInput}

                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={user.email}
                    onChange={onChangeInput}

                />
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={user.password}
                    onChange={onChangeInput}
                    autoComplete="off"

                />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;