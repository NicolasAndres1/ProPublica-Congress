import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import './Styles.scss';
import maleAvatar from '../../assets/img/male-icon.png'
import femaleAvatar from '../../assets/img/female-icon.png'

const MemberDetails = (props) => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        const url = new URL(window.location.href);
        const queryString = url.search;
        const searchParams = new URLSearchParams(queryString);
        const id = searchParams.get('id');
    
        setMember(props.membersReducer.membersToDisplay.filter(member => member.id === id));
    }, []);

    return (
        <>
            <Link to={'/'}>
                <button className='goBackButton'>
                    Go back
                </button>
            </Link>
            {member.map(person => 
                <div key={person.id}>
                    <div className='avatar'>
                        <img 
                            src={ person.gender === 'M' ? maleAvatar : femaleAvatar }
                            alt='Member avatar'/>
                    </div>
                    <h3 className='memberName'> {`${ person.first_name } ${ person.last_name }`} </h3>
                    <div className='memberInfo'>
                        <p> ID: { person.id } </p>
                        <p> Party: { person.party } </p>
                        <p> Gender: { person.gender } </p>
                        <p> Title: { person.title } </p>
                        <p> State rank: { person.state_rank } </p>
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        membersReducer: state.membersReducer
    }
}

export default connect(mapStateToProps, {})(MemberDetails);