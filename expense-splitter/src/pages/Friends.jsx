import FriendsTable from "../components/Friends/FriendsTable";
import FriendsMutualGroups from "../components/Friends/FriendsMutualGroups";
import FriendName from "../components/Friends/FriendName";
import FriendsChart from "../components/Friends/FriendsChart";
import { useParams } from "react-router-dom";

function Friends() {
  const { friendName } = useParams();

  return (
    <section className="flex flex-col gap-5 m-6">
      <FriendName friendName={friendName} />
      <FriendsMutualGroups />
      <FriendsChart />
      <FriendsTable />
    </section>
  );
}

export default Friends;
