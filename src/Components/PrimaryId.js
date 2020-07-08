import React , {useState, useEffect} from 'react';


/// this is a component
/// Name: HomePage
/// Parameter is ''
/// return a HTML to show on the UI
function PrimaryId(props) {

  return (
    <div>
        <div>PrimaryId</div>
        <table border="1">
            <tr>
                <td>First Name: </td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>Last Name: </td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>Address: </td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
                <td>Date Of Birth: </td>
                <td><input type="Date"></input></td>
            </tr>
            <tr>
                <td>Email Address: </td>
                <td><input type="Email"></input></td>
            </tr>
            <tr>
                <td>Phone Number: </td>
                <td><input type="Phone"></input></td>
            </tr>
            <tr>
                <td colSpan="2"><button>Add Customer</button></td>
            </tr>
        </table>
    </div>
  );
}

export default PrimaryId;
