import React from 'react'
import ReactDom from 'react-dom'
import TodoContainer from './components/TodoContainer'
import './App.css'


ReactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
 document.getElementById('root')
 )