import { useParams } from "react-router-dom";
import GroupChart from "../components/Groups/GroupChart";
import ExpenseBar from "../components/Groups/GroupExpenseBar";
import GroupExpenseTable from "../components/Groups/GroupExpenseTable";
import GroupMembers from "../components/Groups/GroupMembers";
import GroupName from "../components/Groups/GroupName";
import GroupSmallExpenseCard from "../components/Groups/GroupSmallExpenseCard";
// icons
import { FaPiggyBank } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { useSelector } from "react-redux";

function Groups() {
const {groupId} = useParams()
const group = useSelector((state) => state.groups.groups.find((group) => group.id === parseInt(groupId)))

if (!group) {
  return <div>Group not found</div>;
}

const totalBudget = group.totalBudget;  // fake values update with actual logic later
  const totalExpense = group.totalExpense;
  const remainingBudget = totalBudget - totalExpense;

  return (
    <section className="flex flex-col gap-8 m-6">
      <GroupName groupName={group.name} />

      <div className="flex gap-6 flex-col xl:flex-row">
        <GroupSmallExpenseCard
          icon={FaPiggyBank}
          label="Total budget"
          value={`${totalBudget}`}
          button="Edit"
        ></GroupSmallExpenseCard>
        <GroupSmallExpenseCard
          icon={FaCartShopping}
          label="Total expense"
          value={`${totalExpense}`}
        ></GroupSmallExpenseCard>
        <GroupSmallExpenseCard
          icon={GiReceiveMoney}
          label="Remaining budget"
          value={`${remainingBudget}`}
        ></GroupSmallExpenseCard>
      </div>

      <ExpenseBar expense={totalExpense} budget={totalBudget} />
      <GroupChart />
      <GroupMembers members={group.members} />
      <GroupExpenseTable />
    </section>
  );
}

export default Groups;
