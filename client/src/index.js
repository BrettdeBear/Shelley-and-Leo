import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPaw} />

ReactDOM.render(
    <BrowserRouter>
        <App element={element}/>
    </BrowserRouter>,
    // element,
    document.getElementById('root')
);