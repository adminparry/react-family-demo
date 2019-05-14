import React from "react";

import { observer } from 'mobx-react';
import vm from "../../observables/counter";


@observer
class Counter extends React.Component {
	render(){
		const vm = this.props.vm;
	    return (
	      <div>
	        <h1>This is mobx-react!</h1>
	        <p>First name: <input type="text" value={vm.firstName} onChange={e => vm.setValue('firstName', e)} /></p>
	        <p>Last name: <input type="text" value={vm.lastName} onChange={e => vm.setValue('lastName', e)} /></p>
	        <p>Full name: {vm.fullName}</p>
	        <p><button onClick={vm.doReset}>Reset</button></p>
	      </div>
	    );

	}
}

export default Counter