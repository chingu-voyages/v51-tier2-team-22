import FriendsEachMutualGroup from "./FriendsEachMutualGroup";

function FriendsMutualGroups() {
  return (
    <article className="w-[30rem] bg-red-50 rounded-xl">
      <div className="py-3 px-4 flex justify-between">
        <p className="font-semibold">4 Mutual groups</p>
        <button className="text-primary bg-blizzard-blue px-2 py-1 rounded-md">View all</button>
      </div>

      <FriendsEachMutualGroup />
      <FriendsEachMutualGroup />
      <FriendsEachMutualGroup />
    </article>
  );
}

export default FriendsMutualGroups;
