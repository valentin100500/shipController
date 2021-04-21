import React, {useState} from 'react'
import classes from './App.module.scss';
import {Container} from "react-bootstrap";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Control from "./pages/Control/Control";
import IndexesContainer from "./pages/Indexes/IndexesContainer";
import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";

function App() {

    const [pageTitle, setPageTitle] = useState("")
    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header pageTitle={pageTitle}/>
                <Container fluid='sm'>
                    <Switch>
                        <Route path='/control' render={() => {
                            document.title = "Керування"
                            setPageTitle("Керування")
                            return (
                                <Control/>
                            )
                        }}/>
                        <Route path='/indexes' render={() => {
                            document.title = "Показники"
                            setPageTitle("Показники")
                            return (
                                <IndexesContainer/>
                            )
                        }}/>
                        <Route path='/settings' render={() => {
                            document.title = "Налаштування"
                            setPageTitle("Налаштування")
                            return (
                                <Settings/>
                            )
                        }}/>
                        <Route path='/' render={() => {
                            document.title = "Головна"
                            setPageTitle("Головна")
                            return (
                                <Home/>
                            )
                        }}/>
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
