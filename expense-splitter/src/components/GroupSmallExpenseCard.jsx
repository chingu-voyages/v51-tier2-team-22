import { MdGroups } from "react-icons/md";

// for icons, go to this page https://react-icons.github.io/react-icons/ the search for the icon you need. package is already installed, you just need to import the icon, just like the one above, on line 1. on the webpage, when you click on the icon and open it, you will see the code you need to copy paste to import it. to use the icon, you just put it in JSX like its a normal component. follow the <MdGroups/> example below

function GroupSmallExpenseCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4 max-w-xs ml-8">
      <MdGroups className="bg-blizzard-blue rounded-full w-14 h-14 p-2 text-primary" />

      <span>
        <p className="text-sm font-medium text-gray-400">Total budget</p>
        <p className="font-semibold text-2xl text-indigo">1000 $</p>
      </span>
    </div>
  );
}

export default GroupSmallExpenseCard;
