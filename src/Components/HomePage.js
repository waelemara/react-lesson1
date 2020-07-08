import React, { useState, useEffect } from 'react';
import PrimaryId from './PrimaryId';
import CustomersView from './Views/CustomersView/CustomersView';
import CustomersDetails from './CustomerDetails';

/// this is a component
/// Name: HomePage
/// Parameter is ''
/// return a HTML to show on the UI
function HomePage() {
    let [view, setView] = useState(<></>);
    let GotoView = function (viewName) {
        if(viewName == "PrimaryId"){
            setView(<PrimaryId />);
        }
        if(viewName == "CustomersView"){
            setView(<CustomersView />);
        }
    }
    return (
        <div>
            <div>Establish Customer</div>
            <button onClick={() => GotoView("PrimaryId")}>Add Customer</button>
            <button onClick={() => GotoView("CustomersView")}>View Customers</button>
            {view}
        </div>
    );
}

export default HomePage;
