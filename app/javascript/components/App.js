import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux'
import Greeting from './Greeting'
import store from "../configureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={"Home"}/>
            <Route path="/greetings" element={ <Greeting/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
