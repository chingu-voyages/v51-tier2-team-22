import ExpenseBar from "../components/GroupExpenseBar";
import GroupExpenseTable from "../components/GroupExpenseTable";
import GroupMembers from "../components/GroupMembers";
import GroupName from "../components/GroupName";
import GroupSmallExpenseCard from "../components/GroupSmallExpenseCard";

function Groups() {
  return (
    <div>
      <GroupName />
      <GroupSmallExpenseCard />
      <GroupMembers />
      <ExpenseBar expense={500} budget={1000}  />
      <GroupExpenseTable />
    </div>
  );
}

export default Groups;
