import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import MembersList from './components/MembersList/MembersList';
import Footer from './components/Footer/Footer';

import { getAllMembers } from './actions/actions';

function App(props) {

  useEffect(() => {
    props.getAllMembers()
  }, []);

  return (
    <Router>
      <Header title="ProPublica Congress" />
      
      
      <Route path='/' exact component={MembersList}/>
      {/* <Route path='/members/:id' component={}/> */}
      
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    membersReducer: state.membersReducer
  };
};

const mapDispatchToProps = {
  getAllMembers
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
