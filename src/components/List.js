import React, { Component } from 'react'

class List extends Component {
	constructor(props) {
		super(props)
		this.state = { value: 0 }
		this.textInput = React.createRef()
		this.items = ['Item 1', 'Item 2', 'Item 3']
	}

	render() {
		return (
			<>
				<ul>
					{this.items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</>
		)
	}
}

export default List
