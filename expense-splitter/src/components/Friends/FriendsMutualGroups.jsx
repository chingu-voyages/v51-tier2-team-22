import FriendsEachMutualGroup from "./FriendsEachMutualGroup";

function FriendsMutualGroups() {
  return (
    <article className="p-8 pt-4 ml-8  w-custom-friend-width h-custom-friend-height bg-white rounded-2xl">
      <div className="py-3 px-4 flex justify-between">
        <p className="text-lg font-bold text-secondary">4 Mutual groups</p>
        <button className="w-20 h-8 rounded-lg text-body font-medium
        bg-blizzard-blue text-primary  duration-300">View all</button>
      </div>

      <FriendsEachMutualGroup />
      <FriendsEachMutualGroup />
      <FriendsEachMutualGroup />
    </article>
  );
}

export default FriendsMutualGroups;
