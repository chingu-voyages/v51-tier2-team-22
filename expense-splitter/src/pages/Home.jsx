import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeIndividualGroup from "../components/Home/HomeIndividualGroup";
import { addGroup } from "../features/groupsSlice";

function Home() {
  const groups = useSelector((state) => state.groups.groups);

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

  return (
    <section className="text-xl text-secondary p-5 space-y-5">
      <h1>Groups</h1>

      <div className="bg-white w-72 h-40 flex items-center justify-center flex-col">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full bg-emerald-300 w-14 h-14 text-5xl hover:bg-emerald-400"
        >
          +
        </button>
        <p>Add</p>
      </div>

      {groups.map((group) => (
        <HomeIndividualGroup key={group.id} group={group} />
      ))}

      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
          onClick={handleModalClickOutside}
        >
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl mb-4">Add New Group</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label>Group Name</label>
                <input
                  type="text"
                  name="name"
                  value={newGroup.name}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  placeholder="Enter group name"
                  required
                />
              </div>

              <div>
                <label>Total Budget</label>
                <input
                  type="number"
                  name="totalBudget"
                  value={newGroup.totalBudget}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  placeholder="Enter total budget"
                  required
                />
              </div>

              <div>
                <label>Total Expense</label>
                <input
                  type="number"
                  name="totalExpense"
                  value={newGroup.totalExpense}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  placeholder="Enter total expense"
                  required
                />
              </div>

              <button
                type="submit"
                className="hover:bg-emerald-400 px-7 py-3 bg-emerald-300"
              >
                Add Group
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
