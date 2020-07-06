import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
	class RequireAuth extends Component {
		render() {
			console.log('hoc user: ', this.props.auth.user);
			switch (this.props.auth.user) {
				case false:
					return <Redirect to="/" />;
				case null:
					return <div>Loading...</div>;
				default:
					return <ChildComponent {...this.props} />;
			}
		}
	}

	function mapStateToProps({ auth }) {
		return { auth };
	}

	return connect(mapStateToProps)(RequireAuth);
}
