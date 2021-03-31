import { connect } from "react-redux";

const MembersList = props => {
    console.log(props)

    return (
        <>
            {props.membersReducer.length !== 0 ? 
                props.membersReducer.members.map((member, index) => 
                    <p key={index}> { member.first_name } </p>
                ) :
                <h3> Loading </h3>
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        membersReducer: state.membersReducer
    }
}

export default connect(mapStateToProps, {})(MembersList);