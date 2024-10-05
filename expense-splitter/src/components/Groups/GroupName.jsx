import { MdEdit } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateGroupName } from "../../features/groupsSlice";

function GroupName({ group }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [groupName, setGroupName] = useState(group.name);
  
  useEffect(() => {
    setGroupName(group.name);
  }, [group.name]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    dispatch(updateGroupName({ groupId: group.id, newName: groupName }));
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
    <section className="relative flex items-center space-x-10 ">
      <img
        className="w-69 h-69 ml-10 rounded-full object-cover "
        src={group.image}
        alt="group-logo"
      />
      <FaCameraRetro className="absolute bottom-12 left-12 w-5 h-5" />
      {isEditing ? (
        <input
          type="text"
          value={groupName}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} 
          className="text-header border rounded-lg px-3 font-bold text-secondary border-b-2 border-gray-300 focus:outline-none"
          style={{ width: `${Math.max(groupName.length * 20, 200)}px` }}
        />
      ) : (
        <h1 className="text-header font-bold text-secondary dark:text-dark-text">
          {groupName}
        </h1>
      )}
      <button
        onClick={handleEditToggle}
        className="rounded-full hover:bg-white p-3 relative right-8 border border-transparent hover:border hover:border-black"
      >
        <MdEdit className="w-6 h-6 " />
      </button>
    </section>
  );
}

export default GroupName;
