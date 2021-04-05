import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.scss'

const MemberCard = ({ member }) => (
    <li className='memberCard'>
        <Link to={`/members/?id=${member.id}`}>
            <h3> { member.id } </h3>
            <p> { member.first_name } { member.last_name } </p>
            <p> { member.title} </p>
            <p> {`Party: ${member.party} - Gender: ${member.gender}`} </p>
        </Link>
    </li>
)

export default MemberCard
