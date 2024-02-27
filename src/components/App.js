import React, { Component } from 'react'
import Header from './Header'
import List from './List'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { value: 0 }
		this.textInput = React.createRef()
	}

	componentDidMount() {
		return console.log('DidMount')
	}
	componentDidUpdate() {
		return console.log('DidUpdate')
	}
	componentWillUnmount() {
		return console.log('WillUnmount')
	}

	handleInputChange = e => {
		const value = e.target.value
		const isIncluded = value.toLowerCase().includes('react')
		this.setState({
			value,
			isIncluded,
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state.value)
	}

	handleButtonClick = () => {
		this.textInput.current.focus()
	}

	render() {
		return (
			<div className='App'>
				<Header value={this.state.value} />
				<form action='' onSubmit={this.handleSubmit}>
					<input
						type='text'
						onChange={this.handleInputChange}
						ref={this.textInput}
					/>
					<button disabled={this.state.isIncluded}>Кнопка</button>
					<button onClick={this.handleButtonClick}>Ввести текст</button>
				</form>
				<List />
			</div>
		)
	}
}

export default App
