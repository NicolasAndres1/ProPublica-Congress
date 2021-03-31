import { connect } from "react-redux";
import MemberCard from "../MemberCard/MemberCard";

const MembersList = props => {
    return (
        <ul className='memberList'>
            {props.membersReducer.membersToDisplay.length !== 0 ?
                props.membersReducer.membersToDisplay.map((member, index) => 
                    <MemberCard 
                        key={index}
                        member={member}/>
                ) :
                <h3> Loading </h3>
            }
        </ul>
)};

const mapStateToProps = (state) => {
    return {
        membersReducer: state.membersReducer
    }
}

export default connect(mapStateToProps, {})(MembersList);