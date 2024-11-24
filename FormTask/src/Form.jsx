import React, { Component } from "react";
const UserLogin = () => {
    const [email, setEmail] = Component("");
    const [password, setPassword] = Component("");
    const [emailError, setEmailError] = Component("");
    const [passwordError, setPasswordError] = Component("");
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value.endsWith(".ru")) {
            setEmailError("Yalniz .ru domenlərinə icazə verilir.");
            console.warn("Yalniz .ru domenlərinə icazə verilir.");
        } else {
            setEmailError("");
        }
    };
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length < 8) {
            setPasswordError("Ən azi 8 simvol.");
            console.warn("Ən azi 8 simvol.");
        } else {
            setPasswordError("");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailError && !passwordError) {
            alert("Uğurla daxil olundu!");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>İstifadəçi Girişi</h2>
                <div className="form-field">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="E-mail daxil edin"
                    />
                    {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="password">Parol:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Parol daxil edin"
                    />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
                <button type="submit" className="submit-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default UserLogin;