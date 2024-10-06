import { MdEdit } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateGroupName } from "../../features/groupsSlice";
import useModal from "../Utils/useModal";
import Modal from "../Utils/Modal";
import { images } from "../Utils/images";
import { updateGroupImage } from "../../features/groupsSlice";

function GroupName({ group }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [groupName, setGroupName] = useState(group.name);
  const [selectedImage, setSelectedImage] = useState(group.image);
  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();

  useEffect(() => {
    setGroupName(group.name);
  }, [group.name]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    dispatch(updateGroupName({ groupId: group.id, newName: groupName }));
  };

  useEffect(() => {
    console.log(images); // This should log the array of image paths
  }, []);

  useEffect(() => {
    console.log("Is Modal Open: ", isOpen); // Check if modal opens
  }, [isOpen]);


  const handleImageSelect = (image) => {
    setSelectedImage(image);
    console.log("Selected Image: ", image);
  };

  const handleSubmit = () => {
    dispatch(updateGroupImage({ groupId: group.id, newImage: selectedImage })); // Update image in Redux
    closeModal();
  };

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(updateGroupName({ groupId: group.id, newName: groupName }));
      setIsEditing(false);
    }
  };

  return (
    <section className="flex items-center space-x-10 ">
      <button className="relative" onClick={openModal}>
        <img
          className="w-69 h-69 ml-10 rounded-full object-cover "
          src={group.image}
          alt="group-logo"
        />
        <FaCameraRetro className="absolute bottom-11 left-[5rem] w-8 h-8 border border-slate-400 p-[4px] rounded-full bg-white" />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={group.name}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="text-header border rounded-lg px-3 font-bold text-secondary border-b-2 border-gray-300 focus:outline-none"
          style={{ width: `${Math.max(groupName.length * 20, 200)}px` }}
        />
      ) : (
        <>
        <h1 className="text-header font-bold text-secondary dark:text-dark-text">
          {groupName}
        </h1>
        <p className="text-body dark:text-dark-text">
        {group.description}
      </p>
      </>
      )}
      <button
        onClick={handleEditToggle}
        className="rounded-full hover:bg-white p-3 relative right-8 border border-transparent hover:border hover:border-black"
      >
        <MdEdit className="w-6 h-6 " />
      </button>

      {isOpen && (
        <Modal
          content={
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Select an Image</h2>
              <div className="flex space-x-2">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    className={`w-[4.3rem] h-[4.3rem] object-cover rounded-full cursor-pointer ${
                      selectedImage === image ? "ring-[3px] ring-primary" : ""
                    }`}
                    onClick={() => handleImageSelect(image)}
                  />
                ))}
              </div>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-primary text-white rounded-lg"
              >
                Update image
              </button>
            </div>
          }
          onClose={closeModal} // Close modal when clicking close button or outside the modal
          handleClickOutside={handleClickOutside} // Close modal when clicking outside
        />
      )}
    </section>


  );
}

export default GroupName;
