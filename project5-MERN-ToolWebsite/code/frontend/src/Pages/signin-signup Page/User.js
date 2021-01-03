import React, { useState, Component } from "react";
// import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { createContext } from "react";
import GoogleLogin from "react-google-login";

import { UserContext } from "../../Component/useContext/UserContext";

import { TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { EmailField } from "@material-ui/core";
import "./User.css";
import Navbar from "../../Component/NavBar/Navbar";
import { Redirect } from "react-router-dom";

export default function User() {

	document.title = "Oregano |signIn Page";
	document.getElementsByTagName("META")[3].content = "website for ordering elegant italian food with high quality and standards pf cooking and making. You can order main italian dishes, pizzas and sweets";
	
	// const history = useHistory();
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [name2, setName2] = useState("");
	const [password2, setPassword2] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [checkboxChecked, setCheck] = useState(false);
	const [err, setError] = useState("ahmad");
	const [err2, setError2] = useState("suhib");
	const [islogedin, setIslogin] = useState(
		localStorage.getItem("UserStatus")? true : false
	);

	const handleSubmitSignup = (event) => {
		event.preventDefault();
		fetch("http://localhost:5000/signup", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				name,
				phone,
			}),
		})
			.then((res) =>
				res.json().then((res) => {
					setError(res.message);
					console.log(res.message);
					localStorage.setItem("UserStatus" ,  JSON.stringify(res.user));
					setIslogin(true)

				})
			)
			.catch((err) => console.log(err));
	};
	const handleSubmitSignin = (event) => {
		event.preventDefault();
		fetch("http://localhost:5000/signin", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name2,
				password2,
			}),
		})
			.then((res) =>
				res.json().then((res) => {
					setError2(res.message);
					console.log(res.token);
					if (res) {
						localStorage.setItem("UserStatus", JSON.stringify( res));
						setIslogin(true);
					}
				})
			)
			.catch((err) => console.log(err));
	};

	const loggoole = (res) => {
		console.log(res.profileObj.name);
		let obj = {
			name: res.profileObj.name,
			img:res.profileObj.imageUrl,
			email: res.profileObj.email,
			phone : "Add Phone Number" ,
			orders:[]
		}

		localStorage.setItem("UserStatus", JSON.stringify(obj));
	
		setIslogin(true);
	};

	const handleCheckboxChange = (event) => {
		setCheck(event.target.checked);
	};

	return (
		<UserContext.Provider value={true}>
			{islogedin && <Redirect to="/profile" />}
			<div className="Signin-Signup-Container">
				<div className="Signup-form" id="Bform">
					<div>
						<h1 className="header">
							Don't have an account? <br /> Sign Up
						</h1>
						<br />
					</div>
					<div>
						<ValidatorForm
							onSubmit={handleSubmitSignup}
							noValidate
							autoComplete="off"
							className="Form"
						>
							<TextField
								id="outlined-basic"
								type="text"
								label="User Name"
								variant="outlined"
								className="Element-signup"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
									setError("ahmad");
								}}
							/>

							<TextValidator
								validators={["isEmail"]}
								errorMessages={["email is not valid"]}
								id="outlined-basic"
								label="E-Mail"
								variant="outlined"
								className="Element-signup"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setError("ahmad");
								}}
							/>

							<TextField
								id="outlined-basic"
								type="number"
								label="Phone Number"
								variant="outlined"
								className="Element-signup"
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
									setError("ahmad");
								}}
							/>
							<br />
							<TextField
								id="outlined-basic"
								type="password"
								label="Password"
								variant="outlined"
								className="Element-signup"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setError("ahmad");
								}}
							/>
							<br />
							<Form.Check
								id="checkbox"
								style={{ display: "inline" }}
								type="checkbox"
								checked={checkboxChecked}
								onChange={handleCheckboxChange}
								className="Element-signup"
							/>
							<label htmlFor="checkbox" style={{ display: "inline" }}>
								I have read, understood and agree to the
							</label>
							<span>
								<a href="#"> Terms & Conditions.</a>
							</span>

							<br />
							<br />

							<input
								type="submit"
								className="btn btn-info btn-block"
								value="Create Account"
								disabled={checkboxChecked ? false : true}
							/>
							{err !== "ahmad" ? (
								<Alert className="error-msg" severity="error">
									{err}
								</Alert>
							) : null}
						</ValidatorForm>
					</div>
				</div>
				{/* Signin/Signup-Container */}
				<div className="Form-line"></div>
				{/* Signin/Signup-Container */}

				<div className="Signin-form" id="Bform">
					<div>
						<h1 className="header">
							Already have an account? <br />
							Just Sign In
						</h1>
						<br />
					</div>
					<div className="form-div">
						<form noValidate autoComplete="off" className="Form">
							<TextField
								id="outlined-basic"
								type="text"
								label="E-Mail"
								variant="outlined"
								className="Element-signin"
								onChange={(e) => {
									setName2(e.target.value);
									setError2("suhib");
								}}
								value={name2}
							/>
							<br />

							<TextField
								id="outlined-basic"
								type="password"
								label="Password"
								variant="outlined"
								className="Element-signin"
								onChange={(e) => {
									setPassword2(e.target.value);
									setError2("suhib");
								}}
								value={password2}
							/>
							<br />
							<br />

							<input
								type="submit"
								className="btn btn-info btn-block"
								value="Sign In"
								onClick={handleSubmitSignin}
							/>

							<GoogleLogin
								clientId="990753185093-umruhkbfrpr3uo6hd170alci3riilla4.apps.googleusercontent.com"
								buttonText="Signin with Google"
								onSuccess={(res) => loggoole(res)}
								cookiePolicy={"single_host_origin"}
								className="googleLogin"
							/>
							{err2 !== "suhib" ? (
								<Alert className="error-msg " severity="error">
									{err2}
								</Alert>
							) : null}
						</form>
					</div>
				</div>
			</div>
		</UserContext.Provider>
	);
}

// npm install materialize-css@next
