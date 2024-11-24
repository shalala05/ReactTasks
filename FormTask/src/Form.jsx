import React, { Component } from "react";
class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
        };
    }
    handleEmailChange = (e) => {
        const value = e.target.value;
        this.setState({ email: value });

        if (!value.endsWith(".ru")) {
            this.setState({
                emailError: "Yalnız .ru domenlərinə icazə verilir.",
            });
            console.warn("Yalnız .ru domenlərinə icazə verilir.");
        } else {
            this.setState({ emailError: "" });
        }
    };

    handlePasswordChange = (e) => {
        const value = e.target.value;
        this.setState({ password: value });

        if (value.length < 8) {
            this.setState({
                passwordError: "Ən azı 8 simvol.",
            });
            console.warn("Ən azı 8 simvol.");
        } else {
            this.setState({ passwordError: "" });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, emailError, passwordError } = this.state;

        if (!email || !password || emailError || passwordError) {
            alert("Uğursuz əməliyyat!");
        } else {
            alert("Uğurla daxil olundu!");
        }
    };

    render() {
        const { email, password, emailError, passwordError } = this.state;

        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h2>İstifadəçi Girişi</h2>
                    <div className="form-field">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={this.handleEmailChange}
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
                            onChange={this.handlePasswordChange}
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
    }
}

export default UserLogin;
