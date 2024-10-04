import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeIndividualGroup from "../components/Home/HomeIndividualGroup";
import { addGroup } from "../features/groupsSlice";
import SearchBar from "../components/SearchBar";

function Home() {
  const groups = useSelector((state) => state.groups.groups);

  // search bar functionality
  const [filteredGroups, setFilteredGroups] = useState(groups);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredGroups(
      groups.filter((group) =>
        group.name.toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const [newGroup, setNewGroup] = useState({
    name: "",
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
        totalBudget: newGroup.totalBudget,
        totalExpense: newGroup.totalExpense,
        members: [], // empty for now
      })
    );

    setNewGroup({
      name: "",
      totalBudget: "",
      totalExpense: "",
    });
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleModalClickOutside = (event) => {
    if (event.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
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

      <div className=" border bg-white dark:bg-dark-secondary rounded-2xl w-custom-card h-custom-card-height ml-8 shadow flex items-center justify-center flex-col">
        <button
          onClick={() => setIsModalOpen(true)}
          className="hover:animate-ping rounded-full bg-primary dark:bg-dark-bg dark:border w-16 h-16 text-5xl text-white dark:text-dark-text hover:bg-primary"
        >
          +
        </button>
        <p className="text-2xl mt-4 font-bold dark:text-dark-text">Add</p>
      </div>

      {filteredGroups.length > 0 ? (
        filteredGroups.map((group) => (
          <HomeIndividualGroup key={group.id} group={group} />
        ))
      ) : (
        <p className="ml-8">No groups found</p>
      )}

      {isModalOpen && (
        <section
          id="modal-overlay"
          className="fixed inset-0 bg-black dark:bg-gray-500 dark:bg-opacity-20 bg-opacity-20 flex justify-center items-center"
          onClick={handleModalClickOutside}
        >
          <article className="bg-white dark:bg-dark-secondary p-6 rounded-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl mb-4 font-bold dark:text-dark-text">
                Add New Group
              </h2>
              {/* add actual icon for close btn */}
              <button
                className="bg-white shadow rounded-full w-8 h-8 text-red-500 mb-4"
                onClick={() => setIsModalOpen(false)}
              >
                x
              </button>
            </div>

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
          </article>
        </section>
      )}
    </section>
  );
}

export default Home;
