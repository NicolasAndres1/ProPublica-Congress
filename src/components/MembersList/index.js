import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MemberCard from '../MemberCard/index'
import SearchBar from '../SearchBar/index'
import ReactPaginate from 'react-paginate'

import './Styles.scss'

const MembersList = props => {
  const [members, setMembers] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [perPage] = useState(7)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const data = props.membersReducer.membersToDisplay
    setMembers(data.slice(currentPage * 7, currentPage === 0 ? 1 * 7 : currentPage * 7 + 7))
    setPageCount(Math.ceil(data.length / perPage))
  }, [props, currentPage, perPage])

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setCurrentPage(selectedPage)
  }

  return (
    <>
        <SearchBar membersReducer={props.membersReducer}/>
        {<ul className='memberList'>
            {members.map((member) => 
                <MemberCard 
                    key={member.id}
                    member={member}/>
            )}
        </ul>}
        <ReactPaginate 
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    membersReducer: state.membersReducer
  }
}

export default connect(mapStateToProps, {})(MembersList)
