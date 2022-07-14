import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={"Home"}/>
          <Route path="/greetings" element={ <Greeting/>}/>

        </Routes>
      
      </BrowserRouter>
    );
  }
}

export default App
