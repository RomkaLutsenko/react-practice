import { Component } from 'react'
import Header from './Header'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { value: 0 }
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
		this.setState({ value: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state.value)
	}

	render() {
		return (
			<div className='App'>
				<Header value={this.state.value} />
				<form action='' onSubmit={this.handleSubmit}>
					<input type='text' onChange={this.handleInputChange} />
					<button>Кнопка</button>
				</form>
			</div>
		)
	}
}

export default App
