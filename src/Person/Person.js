import React from 'react';

const Person = (props) => {
	return (<p>I'm {Math.floor(Math.random() * 30)} a big boss!!! called {props.name} </p>)
}

export default Person;