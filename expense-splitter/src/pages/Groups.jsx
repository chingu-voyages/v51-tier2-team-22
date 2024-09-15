import GroupMembers from "../components/GroupMembers";
import GroupName from "../components/GroupName";
import GroupSmallExpenseCard from "../components/GroupSmallExpenseCard";

function Groups() {
  return <div className="p-6 space-y-6 bg-blizzard-blue min-h-screen">
    
    <GroupName/>
    <GroupSmallExpenseCard/>
    <GroupMembers />

  </div>;
}

export default Groups;
