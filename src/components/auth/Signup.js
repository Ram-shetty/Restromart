import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			mobile_number: '',
			topic: 'restaurant_owner',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);

	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		this.setState({
			fullname: '',
			email: '',
			mobile_number: '',
			topic:'',
			password: ''
		    
		});
	}
	handleCategoryChange = event => {
		this.setState({
			topic: event.target.value
		})
	}


	render() {
		return (
			<form>
			<div className="signup">
				<form onSubmit={this.displayLogin}>
					<h2>Sign UP</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>
					<div className="mobile_number">
						<input
							type="text"
							placeholder="mobile number"
							name="mobile_number"
							value={this.state.mobile_number}
							onChange={this.update}
						/>
					</div>
					<div>
					
					<select value={this.state.topic} onChange={this.handleCategoryChange}>
						<option value="restaurant_owner">Restaurant Owner</option>
						<option value="buyer">Buyer</option>
						<option value="seller">Seller</option>
						<option value="job_seeker">Job Seeker</option>
						
					</select>
				</div>
					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<input type="submit" value="Sign Up" />
				</form>

				<Link to="/login">Login Here</Link>
			</div>

			</form>
			
		);
	}
}

export default Signup;