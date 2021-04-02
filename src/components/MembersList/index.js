import React from 'react'
import { connect } from 'react-redux'
import MemberCard from '../MemberCard/index'
import SearchBar from '../SearchBar/index'

import './styles.scss'

const MembersList = props => (
    <>
        <SearchBar membersReducer={props.membersReducer}/>
        <ul className='memberList'>
            {props.membersReducer.membersToDisplay.map((member) => 
                <MemberCard 
                    key={member.id}
                    member={member}/>
            )}
        </ul>
    </>
)

const mapStateToProps = (state) => {
  return {
    membersReducer: state.membersReducer
  }
}

export default connect(mapStateToProps, {})(MembersList)
