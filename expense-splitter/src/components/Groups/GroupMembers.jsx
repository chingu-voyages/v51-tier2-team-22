import { MdGroups } from "react-icons/md";
import GroupsEachMember from "./GroupsEachMember";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMember, removeMember } from "../../features/groupsSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GroupMembers() {
  const { groupId } = useParams();
  const dispatch = useDispatch();

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === parseInt(groupId))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", number: "" });

  // Close modal when pressing Escape
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!group) {
    return <div>Group not found.</div>;
  }

  const handleRemoveMember = (memberId, memberName) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove ${memberName}?`
    );

    if (confirmed) {
      dispatch(removeMember({ groupId: parseInt(groupId), memberId }));
    }
  };

  const handleAddMemberInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addMember({
        groupId: parseInt(groupId),
        member: {
          name: newMember.name,
          number: newMember.number,
        },
      })
    );
    setNewMember({ name: "", number: "" });
    setIsModalOpen(false);
  };

  const handleModalClickOutside = (event) => {
    if (event.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <section className="bg-white dark:bg-dark-secondary dark:border p-6 ml-8 rounded-lg shadow w-custom-width">
      <div className="flex justify-between items-center mb-4 ml-4">
        <p className="text-lg font-bold text-secondary dark:text-primary">Members</p>
        <button
          className="w-20 h-8 rounded-lg text-body font-medium
        bg-blizzard-blue text-primary  duration-300"
        >
          View all
        </button>
      </div>

      <div className="flex p-2 space-x-4">
        {/* map method */}
        {group.members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Link to={`/friends/${member.name}`} className="hover:bg-slate-200">
              <GroupsEachMember
                member={{
                  name: member.name,
                  img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
                }}
              />
            </Link>
            <button
              onClick={() => handleRemoveMember(member.id, member.name)}
              className="bg-highlight flex items-center justify-center rounded-full font-extrabold text-lg text-alert hover:bg-red-400 w-6 h-6 pb-1 relative bottom-20 left-5"
            >
              -
            </button>
          </div>
        ))}

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-col flex items-center "
        >
          <MdGroups className="rounded-full w-14 h-14 bg-blizzard-blue p-3 text-primary" />
          <p className="text-legend font-bold text-secondary dark:text-primary">Add</p>
        </button>
      </div>

      {isModalOpen && (
        <section
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
          onClick={handleModalClickOutside}
        >
          <article className="bg-white dark:bg-dark-secondary p-6 rounded-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl mb-4 font-bold dark:text-dark-text">Add New Member</h2>
              <button
                className="bg-white shadow rounded-full w-8 h-8 text-red-500 mb-4"
                onClick={() => setIsModalOpen(false)}
              >
                x
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-body font-semibold dark:text-dark-text">Member Name</label>
                <input
                  type="text"
                  name="name"
                  value={newMember.name}
                  onChange={handleAddMemberInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter member name"
                  required
                  style={{ fontSize: "14px" }}
                />
              </div>

              <div>
                <label className="text-body font-semibold dark:text-dark-text">Member Number</label>
                <input
                  type="text"
                  name="number"
                  value={newMember.number}
                  onChange={handleAddMemberInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter member number"
                  required
                  style={{ fontSize: "14px" }}
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-xl dark:bg-dark-primary"
              >
                Add Member
              </button>
            </form>
          </article>
        </section>
      )}
    </section>
  );
}

export default GroupMembers;
