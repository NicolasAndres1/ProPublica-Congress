import React, { useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.scss'
import Header from './components/Header/index'
import MembersList from './components/MembersList/index'
import MemberDetails from './components/MemberDetails/index'
import Footer from './components/Footer/index'

import { getAllMembers } from './actions/actions'

function App (props) {
  useEffect(() => {
    props.getAllMembers()
  }, [])

  return (
    <Router>
      <Header title="ProPublica Congress" />
      
      <Switch>
        <Route path='/' exact component={MembersList}/>
        <Route path='/members/' component={MemberDetails}/>
        <Redirect to='/'/>
      </Switch>
      
      <Footer />
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    membersReducer: state.membersReducer
  }
}

const mapDispatchToProps = {
  getAllMembers
} 

export default connect(mapStateToProps, mapDispatchToProps)(App)
