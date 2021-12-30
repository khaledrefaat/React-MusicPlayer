import { Link } from 'react-router-dom';
import ItemContent from '../../shared/components/ItemContent';

const UserItem = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="user">
        <div
          className="user__img"
          style={{ backgroundImage: `url(${user.img})` }}
        ></div>
        <ItemContent title={user.name} description={user.description} />
      </div>
    </Link>
  );
};

export default UserItem;
