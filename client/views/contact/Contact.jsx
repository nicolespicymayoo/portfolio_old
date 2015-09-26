Contact = React.createClass({
	render(){
		return(
			<div className="contact-page">
				<div className="contact-page__header">
					Work with us
				</div>
				<form className="contact-page__email-form">
					<input type="text" placeholder="Name"/>
					<input type="text" placeholder="Email"/>
					<textarea type="text" placeholder="About your company and project"/>
					<button className="submit-contact-form-button">send message</button>
				</form>
			</div>
		)
	}
});