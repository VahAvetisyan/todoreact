import React from "react";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className="input-wrapper">
					<div className="input-data">
						<input value={this.props.toDoName} onChange={this.props.onToDoChange} placeholder="Enter a task" />
						<div className="underline"></div>
					</div>
				</div>
				<button className='btn btn-add' onClick={this.props.onAddBtnClick}>add</button>
			</>
		);
	}
}
