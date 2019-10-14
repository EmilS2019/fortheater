import React, { Component } from 'react'

export default class Firebase extends Component {
	render() {
		return (
			<div>
				<script src='/__/firebase/7.2.0/firebase-app.js'></script>

				<script src='/__/firebase/7.2.0/firebase-analytics.js'></script>

				<script src='/__/firebase/init.js'></script>
			</div>
		)
	}
}
