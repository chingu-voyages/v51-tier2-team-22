import GroupChart from "../components/GroupChart";
import ExpenseBar from "../components/GroupExpenseBar";
import GroupExpenseTable from "../components/GroupExpenseTable";
import GroupMembers from "../components/GroupMembers";
import GroupName from "../components/GroupName";
import GroupSmallExpenseCard from "../components/GroupSmallExpenseCard";

function Groups() {
  return (
    <div className="flex flex-col gap-8 m-6">
      <GroupChart />
      <GroupName />
      <GroupSmallExpenseCard />
      <ExpenseBar expense={900} budget={1000} />
      <GroupMembers />
      <GroupExpenseTable />
    </div>
  );
}

export default Groups;
