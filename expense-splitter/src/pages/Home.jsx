import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import HomeIndividualGroup from "../components/Home/HomeIndividualGroup";
import { addGroup } from "../features/groupsSlice";

function Home() {
  const groups = useSelector((state) => state.groups.groups);

  const dispatch = useDispatch();

  const [newGroup, setNewGroup] = useState({
    name: "",
    totalBudget: "",
    totalExpense: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({
      ...newGroup,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    dispatch(addGroup({
      id: groups.length + 1,
      name: newGroup.name,
      totalBudget: newGroup.totalBudget,
      totalExpense: newGroup.totalExpense,
      members: [] // empty for now
    }));

    setNewGroup({
      name: "",
      totalBudget: "",
      totalExpense: ""
    });
  };

  return (
    <section className="text-xl text-secondary p-5 space-y-5">
      <h1>Groups</h1>

      {groups.map((group) => (
        <HomeIndividualGroup key={group.id} group={group} />
      ))}

      <form onSubmit={handleSubmit} className="space-y-3 w-96">
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
    </section>
  );
}

export default Home;
