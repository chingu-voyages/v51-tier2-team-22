import GroupsEachMember from "./GroupsEachMember";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMember, removeMember } from "../../features/groupsSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
// modal
import Modal from "../Utils/Modal";
import useModal from "../Utils/useModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { imagesPeople } from "../Utils/images";
import unknownPerson from "../../assets/unknownPerson.jpg"


function GroupMembers() {
  const { groupId } = useParams();
  const dispatch = useDispatch();

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === parseInt(groupId))
  );

  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();
  const [newMember, setNewMember] = useState({ name: "", image: ""});
  const [selectedImage, setSelectedImage] = useState("");

  if (!group) {
    return <div>Group not found.</div>;
  }

  const handleRemoveMember = (memberId, memberName) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove ${memberName}?`
    );

    if (confirmed) {
      dispatch(removeMember({ groupId: parseInt(groupId), memberId }));

      // Show toast notification
      toast.success(`${memberName} removed`, {
        position: "top-right",
        autoClose: 2000,
      });
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
          image: selectedImage || unknownPerson
        },
      })
    );
    // Show toast notification
    toast.success(`${newMember.name} added`, {
      position: "top-right",
      autoClose: 2000,
    });

    setNewMember({ name: "", image: ""});
    setSelectedImage("")
    closeModal();
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className="bg-white dark:bg-dark-secondary dark:border p-6 ml-8 rounded-lg shadow w-custom-width">
      <p className="ml-3 mb-6 text-groupComponentHeader font-bold text-secondary dark:text-primary">
        Members
      </p>

      {/* note to self, add bg-red-500 to line under to better checking for aligments */}
      <article className="flex flex-wrap justify-start">

      <div className="bg-white dark:bg-dark-secondary rounded-2xl flex items-center flex-col pl-3 pr-3">
        <button
          onClick={openModal}
          className="w-[3.5rem] h-[3.5rem] rounded-full shadow-lg  bg-primary dark:bg-dark-bg text-4xl text-white dark:text-dark-text hover:bg-primary"
        >
          +
        </button>
        <p className="font-bold text-legend dark:text-dark-text">Add</p>
      </div>
        {group.members.map((member) => (
          <div
            key={member.id}
            // note to self, add bg-red-200 to line under to better checking for aligments
            className="hover:bg-slate-100 flex flex-col items-center  rounded-md"
          >
            <Link to={`/friends/${member.name}`} className="hover:bg-slate-100 transition-colors rounded-xl">
              <GroupsEachMember
                member={{
                  name: member.name,
                  img: member.image,
                }}
              />
            </Link>
            <button
              onClick={() => handleRemoveMember(member.id, member.name)}
              className="bg-highlight flex items-center justify-center rounded-full font-extrabold text-lg text-alert hover:bg-red-400 w-6 h-6 pb-1 relative bottom-20 left-5"
            >
              x
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

              <h2 className="text-2xl font-bold">Select an Image</h2>
              <div className="flex space-x-2 flex-wrap gap-3">
                {imagesPeople.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    className={`w-[4.3rem] h-[4.3rem] object-cover !m-0 rounded-full cursor-pointer ${
                      selectedImage === image ? "ring-[3px] ring-primary" : ""
                    }`}
                    onClick={() => handleImageSelect(image)}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-xl dark:bg-dark-primary"
              >
                Add Member
              </button>
            </form>
          }
          onClose={closeModal}
          handleClickOutside={handleClickOutside}
        />
      )}

      <ToastContainer />
    </section>
  );
}

export default GroupMembers;
