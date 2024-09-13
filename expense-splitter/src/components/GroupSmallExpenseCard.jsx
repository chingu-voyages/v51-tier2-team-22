import { MdGroups } from "react-icons/md";

// for icons, go to this page https://react-icons.github.io/react-icons/ the search for the icon you need. package is already installed, you just need to import the icon, just like the one above, on line 1. on the webpage, when you click on the icon and open it, you will see the code you need to copy paste to import it. to use the icon, you just put it in JSX like its a normal component. follow the <MdGroups/> example below

function GroupSmallExpenseCard() {
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

export default GroupSmallExpenseCard;
