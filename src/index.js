import React from 'react'
import ReactDom from 'react-dom'
import TodoContainer from './classBased/components/TodoContainer'
import './classBased/App.css'


ReactDom.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
 document.getElementById('root')
 )