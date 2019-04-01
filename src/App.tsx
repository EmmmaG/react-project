import 'babel-polyfill'
import 'isomorphic-fetch'
import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Header from './components/Header'
import LaunchMission from './views/LaunchMission'

const THEME = createMuiTheme({
	typography: {
		fontFamily: 'Lato, Arial, sans-serif',
		fontSize: 14,
	},
})

export default class App extends Component {
	public render() {
		return (
			<MuiThemeProvider theme={THEME}>
				<div className='App'>
					<Header />
					<LaunchMission />
				</div>
			</MuiThemeProvider>
		)
	}
}
