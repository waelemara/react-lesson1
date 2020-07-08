import React , {useState, useEffect} from 'react';


/// this is a component
/// Name: Customer
/// Parameter is 'props'
/// return a HTML to show on the UI
function Customer(props) {

  return (
    <div className="App">
      <h1>{props.customer.firstname} {props.customer.lastname}</h1>
    </div>
  );
}

export default Customer;
