import './Styles.scss';

const MemberCard = ({ member }) => (
    <li className='memberCard'>
        <h3> { member.id } </h3>
        <p> { member.first_name } { member.last_name } </p>
        <p> { member.title} </p>
        <p> {`Party: ${ member.party } - Gender: ${ member.gender }`} </p>
    </li>
);

export default MemberCard;