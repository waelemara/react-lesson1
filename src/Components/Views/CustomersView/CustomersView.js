import React, { useState, useEffect } from 'react';
import Customer from './Customer';
function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function getCustomerData() {


            // Change the URL to localhost:4000/establishcustomer 
            // Hey don't forget to run the server npde server.js
            // Don't forget to run the react app hahahaha using npm start
            // establishcustomer part of the route can be different depending on what you wrote in the server.js please make it work
            var res = await fetch("https://gist.githubusercontent.com/waelemara/5547f7daa799c658d85c2eeafba0617c/raw/e5de9a588b8f37d0bd5c274b6e05c19a876c77b6/gistfile1.txt",
                {
                    method: 'GET'
                });
            var customersData = await res.json();
            setCustomers(customersData);
        }
        getCustomerData();
    });

    return (
        <div className="App">
            <h1>Customer List</h1>
            {customers.map(customer => <Customer key={customer.customerNumber} customer={customer} />)}
        </div>
    );
}

export default Customers;
