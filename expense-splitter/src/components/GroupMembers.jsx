import { MdGroups } from "react-icons/md";
import EachMember from "./EachMember";

// for icons, go to this page https://react-icons.github.io/react-icons/ the search for the icon you need. package is already installed, you just need to import the icon, just like the one above, on line 1. on the webpage, when you click on the icon and open it, you will see the code you need to copy paste to import it. to use the icon, you just put it in JSX like its a normal component. follow the <MdGroups/> example below

const members = [
  {
    name: "Tom",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  },
  {
    name: "Mitchel",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  },

];

function GroupMembers() {
  return (
    <div className="bg-white p-4 rounded-lg shadow max-w-lg ml-8">
      <div className="flex justify-between items-center mb-4 ml-4">
        <p className="text-lg font-semibold text-secondary">Members</p>
        <button className="px-3 py-1 rounded-lg text-sm font-semibold
        bg-blizzard-blue text-primary hover:bg-secondary hover:text-blizzard-blue transition-colors duration-300">View all</button>
      </div>

      <div className="flex p-2 space-x-4">
        {/* map method */}
        {members.map((member, index) => (
          <EachMember member={member} index={index} />
        ))}

        <button className="flex-col flex items-center ">
          <MdGroups className="rounded-full w-14 h-14 bg-blizzard-blue p-3 text-primary" />
          <p className="font-medium text-secondary">Add</p>
        </button>
      </div>
    </div>
  );
}

export default GroupMembers;
