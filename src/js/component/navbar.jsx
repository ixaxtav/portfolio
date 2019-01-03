import React from "react";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Ixax Tavarez
				</a>
				<span>Full Stack Developer</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								About <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Experience
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Education
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Contact
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
