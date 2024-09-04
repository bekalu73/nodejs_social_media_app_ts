import placeholder from "../../assets/person/2.jpeg";
interface User {
  profilePicture: string;
  username: string;
}

interface CloseFriendProps {
  user: User;
}
const CloseFriend: React.FC<CloseFriendProps> = ({ user }) => {
  console.log(user);
  return (
    <li className="flex items-center mb-4">
      <img
        className="w-8 h-8 rounded-full object-cover mr-2"
        src={placeholder}
        // src={user.profilePicture}
        alt={user.username}
      />
      <span className="text-gray-800">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
