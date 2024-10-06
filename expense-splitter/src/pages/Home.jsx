// react
import { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../features/groupsSlice";
// components
import HomeIndividualGroup from "../components/Home/HomeIndividualGroup";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Utils/Modal";
import useModal from "../components/Utils/useModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getRandomImage } from "../components/Utils/images";

function Home() {
  const groups = useSelector((state) => state.groups.groups);

  // Search bar functionality
  const [filteredGroups, setFilteredGroups] = useState(groups);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredGroups(
      groups.filter((group) =>
        group.name.toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();

  const dispatch = useDispatch();

  const [newGroup, setNewGroup] = useState({
    name: "",
    description:"",
    totalBudget: "",
    totalExpense: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({
      ...newGroup,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addGroup({
        id: groups.length + 1,
        name: newGroup.name,
        image: getRandomImage(),
        description:newGroup.description,
        totalBudget: newGroup.totalBudget,
        totalExpense: newGroup.totalExpense,
        members: [], // empty for now
      })
    );

    setNewGroup({
      name: "",
      description:"",
      totalBudget: "",
      totalExpense: "",
    });
    toast.success(`Group added`, {
      position: "top-right",
      autoClose: 2000,
    });

    closeModal(); // Close modal after submission
  };

  useEffect(() => {
    setFilteredGroups(groups);
  }, [groups]);

  return (
    <section className="text-xl text-secondary p-5 space-y-5">
      <article className="flex items-center justify-between">
        <div>
          <h1 className="text-header font-bold text-secondary dark:text-dark-text ml-8 mt-8">
            Welcome to SplitSmart!
          </h1>
          <p className="text-sm font-normal text-secondary dark:text-dark-text ml-8 mb-8 pt-6">
            Tracks expenses, calculates costs, and settles debts with friends
            &#128522;
          </p>
        </div>
        <SearchBar onSearch={handleSearch} />
      </article>

      <div className="border bg-white dark:bg-dark-secondary rounded-2xl w-custom-card h-custom-card-height ml-8 shadow flex items-center justify-center flex-col">
        <button
          onClick={openModal} // Use openModal from the custom hook
          className="hover:animate-ping rounded-full bg-primary dark:bg-dark-bg dark:border w-16 h-16 text-5xl text-white dark:text-dark-text hover:bg-primary"
        >
          +
        </button>
        <p className="text-2xl mt-4 font-bold dark:text-dark-text">Add Group</p>
      </div>

      {filteredGroups.length > 0 ? (
        filteredGroups.map((group) => (
          <HomeIndividualGroup key={group.id} group={group} />
        ))
      ) : (
        <p className="ml-8">No groups found</p>
      )}

      {isOpen && ( // Use isOpen from the custom hook
        <Modal
          content={
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-body font-semibold dark:text-dark-text">
                  Group Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newGroup.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter group name"
                  required
                  style={{ fontSize: "14px" }}
                />
              </div>

              <div>
              <label className="text-body font-semibold dark:text-dark-text">
                  Description
                </label>
                <input 
                  name="description"
                  value={newGroup.description}
                  onChange={handleInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter group description"
                  required
                  maxLength={70}
                  style={{ fontSize: "14px" }}
                />
              </div>



              <div>
                <label className="text-body font-semibold dark:text-dark-text">
                  Total Budget
                </label>
                <input
                  type="number"
                  name="totalBudget"
                  value={newGroup.totalBudget}
                  onChange={handleInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter total budget"
                  required
                  style={{ fontSize: "14px" }}
                />
              </div>

              <div>
                <label className="text-body font-semibold dark:text-dark-text">
                  Total Expense
                </label>
                <input
                  type="number"
                  name="totalExpense"
                  value={newGroup.totalExpense}
                  onChange={handleInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter total expense"
                  required
                  style={{ fontSize: "14px" }}
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-xl dark:bg-dark-primary"

>
                Add Group
              </button>
            </form>
          }
          onClose={closeModal} // Pass onClose handler to close modal
          handleClickOutside={handleClickOutside} // Pass click outside handler
        />
      )}

      <ToastContainer />
    </section>
  );
}

export default Home;
