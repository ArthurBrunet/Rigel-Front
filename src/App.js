import React, {useState} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import "./Style/Normalize.css";
import "./Style/App.css";
import {AuthProvider, useAuth} from "./Store/Auth/auth"
import store from './Store/configStore';
import {Provider} from 'react-redux';
import RouteConfig from './Config/Route';

export default function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <RouteConfig/>
            </AuthProvider>
        </Provider>
    );
}
