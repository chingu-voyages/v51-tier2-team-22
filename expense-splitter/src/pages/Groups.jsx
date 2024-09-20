import GroupChart from "../components/GroupChart";
import ExpenseBar from "../components/GroupExpenseBar";
import GroupExpenseTable from "../components/GroupExpenseTable";
import GroupMembers from "../components/GroupMembers";
import GroupName from "../components/GroupName";
import GroupSmallExpenseCard from "../components/GroupSmallExpenseCard";
// icons
import { FaPiggyBank } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

function Groups() {
  return (
    <section className="flex flex-col gap-8 m-6">
      <GroupName />

      <div className="flex gap-6 flex-col xl:flex-row">
        <GroupSmallExpenseCard
          icon={FaPiggyBank}
          label="Total budget"
          value="1000 $"
          button="Edit"
        ></GroupSmallExpenseCard>
        <GroupSmallExpenseCard
          icon={FaCartShopping}
          label="Total expense"
          value="700 $"
        ></GroupSmallExpenseCard>
        <GroupSmallExpenseCard
          icon={GiReceiveMoney}
          label="Remaining budget"
          value="300 $"
        ></GroupSmallExpenseCard>
      </div>

      <ExpenseBar expense={300} budget={1000} />
      <GroupChart />
      <GroupMembers />
      <GroupExpenseTable />
    </section>
  );
}

export default Groups;
