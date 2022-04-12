import * as React from "react";
import "./../css/components/footer.css";

class Footer extends React.Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {

		this.props.displayCgu()
		// let name = e.target.id

		// switch (name) {
		// 	case 'cookies':
		// 		break
		// 	case 'cgu':
		// 		this.
		// 		break
		// 	case 'cgv':
		// 		break
		// }
	}


	render() {
		return (
			<div className="footer">
				<div className="imgfooter">
					<img src="/img/logo1.png" alt="logo" />
				</div>
				<div className="separator1"></div>
				<div className="linkfooter">
					<button id="cookies">Cookies</button>
					<button onClick={this.handleClick} id="cgu">Vos données personnelles</button>
					<button id="cgv">Coditions générales de vente</button>
					<p>Copyright by GeekLandSociety</p>
				</div>
			</div>

		)
	}
}

export default Footer;
