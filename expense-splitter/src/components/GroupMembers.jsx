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
    <div className=" w-80 border border-slate-400 rounded-xl flex flex-col">
      <div className="p-2 flex justify-between bg-red-100 w-full">
        <p>Members</p>
        <button className="border border-black">View all</button>
      </div>

      <div className="flex items-center">
        {/* map method */}
        {members.map((member, index) => (
          <EachMember member={member} index={index} />
        ))}

        <button className="flex-col flex items-center ">
          <MdGroups className="rounded-full w-14 h-14 bg-slate-100 p-3" />
          <p>Add</p>
        </button>
      </div>
    </div>
  );
}

export default GroupMembers;
