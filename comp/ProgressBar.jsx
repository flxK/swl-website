'use strict'

var _ = require('lodash');
var Reflux = require('reflux');

module.exports = React.createClass({
	displayName: 'ProgressBar',
	getDefaultProps: function(){
		return {
			value: 0.0, // ranges from 0.0 to 1.0
			indetermeinate: false,
		};
	},
	render: function(){
		return <div className="progressBar">
			{this.props.indeterminate ?
				<div className="fillIndeterminate" />
			:
				<div className="fill" style={{ width: (this.props.value * 100) + '%' }} />
			}
		</div>;
	}
});
