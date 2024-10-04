import { useParams } from "react-router-dom";
import GroupChart from "../components/Groups/GroupChart";
import { useState } from "react";
import ExpenseBar from "../components/Groups/GroupExpenseBar";
import GroupExpenseTable from "../components/Groups/GroupExpenseTable";
import GroupMembers from "../components/Groups/GroupMembers";
import GroupName from "../components/Groups/GroupName";
import GroupSmallExpenseCard from "../components/Groups/GroupSmallExpenseCard";
// icons
import { FaPiggyBank } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { updateGroupBudget, updateGroupExpense } from "../features/groupsSlice";
import useModal from "../components/Utils/useModal";
import Modal from "../components/Utils/Modal";

function Groups() {
  const { groupId } = useParams();
  const dispatch = useDispatch();
  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === parseInt(groupId))
  );

  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();
  const [formData, setFormData] = useState({
    totalBudget: "",
    totalExpense: "",
  });

  if (!group) {
    return (
      <div className="text-header font-bold text-secondary dark:text-dark-text">
        Group not found
      </div>
    );
  }

  const handleEditClick = () => {
    setFormData({
      totalBudget: "",
      totalExpense: "",
    });
    openModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateGroupBudget({
        groupId: parseInt(groupId),
        totalBudget: parseFloat(formData.totalBudget),
      })
    );
    dispatch(
      updateGroupExpense({
        groupId: parseInt(groupId),
        totalExpense: parseFloat(formData.totalExpense),
      })
    );
    setFormData({
      totalBudget: "",
      totalExpense: "",
    });
    closeModal();
  };

  const totalBudget = group.totalBudget;
  const totalExpense = group.totalExpense;
  const remainingBudget = totalBudget - totalExpense;

  return (
    <section className="flex flex-col gap-8 m-6">
      <GroupName groupName={group.name} />

      <div className="flex gap-6 flex-col xl:flex-row">
        <GroupSmallExpenseCard
          icon={FaPiggyBank}
          label="Total budget"
          value={`${totalBudget}`}
          button="Edit"
          onClick={handleEditClick}
        />
        <GroupSmallExpenseCard
          icon={FaCartShopping}
          label="Total expense"
          value={`${totalExpense}`}
        />
        <GroupSmallExpenseCard
          icon={GiReceiveMoney}
          label="Remaining budget"
          value={`${remainingBudget}`}
        />
      </div>

      <ExpenseBar expense={totalExpense} budget={totalBudget} />
      <GroupChart groupId={groupId} />
      <GroupMembers members={group.members} />
      <GroupExpenseTable />

      {isOpen && (
        <Modal
          content={
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-body font-semibold dark:text-dark-text">
                  Budget
                </label>

                <input
                  type="number"
                  name="totalBudget"
                  value={formData.totalBudget}
                  onChange={handleInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter member name"
                  required
                />
              </div>

              <div>
                <label className="text-body font-semibold dark:text-dark-text">
                  Expense
                </label>

                <input
                  type="number"
                  name="totalExpense"
                  value={formData.totalExpense}
                  onChange={handleInputChange}
                  className="border p-2 w-full dark:bg-dark-input"
                  placeholder="Enter member number"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-xl dark:bg-dark-primary"
              >
                Edit
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

export default Groups;
