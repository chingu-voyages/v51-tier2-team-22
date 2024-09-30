import { MdGroups } from "react-icons/md";
import GroupsEachMember from "./GroupsEachMember";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeMember } from "../../features/groupsSlice";

function GroupMembers() {
  const { groupId } = useParams();

  const dispatch = useDispatch();

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === parseInt(groupId))
  );

  if (!group) {
    return <div>Group not found.</div>;
  }

  const handleRemoveMember = (memberName) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove ${memberName}?`
    );

    if (confirmed) {
      dispatch(removeMember({ groupId: parseInt(groupId), memberName }));
    }
  };

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
            onRemove={() => handleRemoveMember(member)}
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
