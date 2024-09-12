import { MdGroups } from "react-icons/md";

function SmallExpenseCard() {
  return (
    <div className="pl-6 w-80 border border-slate-400 rounded-xl flex items-center">
      <MdGroups className="bg-red-0 rounded-full w-14 h-14 p-2" />

      <span>
        <p>Total budget</p>
        <p className="font-semibold">1000 $</p>
      </span>
    </div>
  );
}

export default SmallExpenseCard;
