import GroupMembers from "../components/GroupMembers";
import GroupName from "../components/GroupName";
import GroupSmallExpenseCard from "../components/GroupSmallExpenseCard";

function Groups() {
  return <div>
    <GroupName/>
    <GroupSmallExpenseCard/>
    <GroupMembers />

  </div>;
}

export default Groups;
