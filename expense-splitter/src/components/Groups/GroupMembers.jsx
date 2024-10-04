import GroupsEachMember from "./GroupsEachMember";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMember, removeMember } from "../../features/groupsSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
// modal
import Modal from "../Utils/Modal";
import useModal from "../Utils/useModal";

function GroupMembers() {
  const { groupId } = useParams();
  const dispatch = useDispatch();

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === parseInt(groupId))
  );

  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();
  const [newMember, setNewMember] = useState({ name: "", number: "" });

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
    closeModal();
  };

  return (
    <section className="bg-white dark:bg-dark-secondary dark:border p-6 ml-8 rounded-lg shadow w-custom-width">
      <p className="ml-3 mb-6 text-groupComponentHeader font-bold text-secondary dark:text-primary">
        Members
      </p>

      {/* note to self, add bg-red-500 to line under to better checking for aligments */}
      <article className="flex flex-wrap justify-start">
        <div className="bg-white dark:bg-dark-secondary rounded-2xl flex items-center flex-col">
          <button
            onClick={openModal}
            className="w-14 h-14 rounded-full shadow-lg  bg-primary dark:bg-dark-bg text-4xl text-white dark:text-dark-text hover:bg-primary"
          >
            +
          </button>
          <p className="font-bold text-legend dark:text-dark-text">Add</p>
        </div>
        {group.members.map((member) => (
          <div
            key={member.id}
            // note to self, add bg-red-200 to line under to better checking for aligments
            className="bg-red-200 flex flex-col items-center m-1"
          >
            <Link
              to={`/friends/${member.name}`}
              className="hover:bg-slate-100 transition-colors rounded-md bg-red-400"
            >
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
      </article>

      {/* MODAL */}
      {isOpen && ( // Conditionally render Modal if it's open
        <Modal
          content={
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-body font-semibold dark:text-dark-text">
                  Name
                </label>

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
                <label className="text-body font-semibold dark:text-dark-text">
                  Member Number
                </label>

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
          }
          onClose={closeModal} // Close modal when clicking close button or outside the modal
          handleClickOutside={handleClickOutside} // Close modal when clicking outside
        />
      )}
    </section>
  );
}

export default GroupMembers;
