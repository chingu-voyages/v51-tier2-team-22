import { MdGroups } from "react-icons/md";
import GroupsEachMember from "./GroupsEachMember";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// for icons, go to this page https://react-icons.github.io/react-icons/ the search for the icon you need. package is already installed, you just need to import the icon, just like the one above, on line 1. on the webpage, when you click on the icon and open it, you will see the code you need to copy paste to import it. to use the icon, you just put it in JSX like its a normal component. follow the <MdGroups/> example below



function GroupMembers() {
  const { groupId } = useParams();
  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === parseInt(groupId))
  );

  if (!group) {
    return <div>Group not found.</div>;
  }

  return (
    <section className="bg-white p-6 ml-8 rounded-lg shadow w-custom-width ">
      <div className="flex justify-between items-center mb-4 ml-4">
        <p className="text-lg font-bold text-secondary">Members</p>
        <button
          className="w-20 h-8 rounded-lg text-body font-medium
        bg-blizzard-blue text-primary  duration-300"
        >
          View all
        </button>
      </div>

      <div className="flex p-2 space-x-4">
        {/* map method */}
        {group.members.map((member, index) => (
          <GroupsEachMember
            key={index}
            member={{
              name: member,
              img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
            }}
          />
        ))}

        <button className="flex-col flex items-center ">
          <MdGroups className="rounded-full w-14 h-14 bg-blizzard-blue p-3 text-primary" />
          <p className="text-legend font-bold text-secondary">Add</p>
        </button>
      </div>
    </section>
  );
}

export default GroupMembers;
