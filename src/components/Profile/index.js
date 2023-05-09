import './Profile.css';

const Profile = ({ user }) => {
  const { avatar, username, email } = user;
  return (
    <div className="profile">
      <img src={avatar} alt={avatar} />
      <div>{username}</div>
      <div>{email}</div>
    </div>
  );
};

export default Profile;
