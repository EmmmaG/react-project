import React, { Component } from 'react'
import logo from './logo.png'
import './App.scss'
import Header from './components/Header'

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
			</div>
		)
	}
}
