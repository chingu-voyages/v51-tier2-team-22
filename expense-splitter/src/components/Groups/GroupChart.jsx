import { PieChart, Pie, Cell } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Utils/Modal";
import useModal from "../Utils/useModal";
import { useEffect, useState } from "react";
import { updateMemberContribution } from "../../features/groupsSlice";

// chart
const COLORS = [
  "#F8AE1B",
  "#8D73FD",
  "#EEAAFF",
  "#6AD2FF",
  "#EBAF91",
  "#F68D2B",
  "#F9C84D",
  "#00B1A0",
  "#03B56D",
  "#6EEDFF",
  "#D4A5A5",
  "#F4A79D",
  "#F8A5FF",
  "#B8B8B8",
  "#FDE0B8",
  "#F35353",
  "#D3917B",
  "#FFF597",
  "#D2FBA4",
  "#FABE7A",
  "#9FFFD8",
  "#4318FF",
];

// props of numbers inside chart position and radius related
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    // props of numbers inside chart styling related
    <text
      x={x}
      y={y}
      fill="#1f1d1b"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-md font-bold text-secondary"
    >
      {(percent * 100).toFixed(1)}%
    </text>
  );
};

function GroupChart({ groupId }) {
  const groupIdInt = parseInt(groupId);

  const group = useSelector((state) =>
    state.groups.groups.find((group) => group.id === groupIdInt)
  );

  const hasMembers = group.members && group.members.length > 0;

  const dispatch = useDispatch();
  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();

  const [customContributions, setCustomContributions] = useState({});
  const [remainingPercentage, setRemainingPercentage] = useState(100);

  useEffect(() => {
    if (hasMembers) {
      // Initialize contributions as empty fields
      const initialContributions = group.members.reduce((acc, member) => {
        acc[member.id] = "";
        return acc;
      }, {});
      setCustomContributions(initialContributions);
      setRemainingPercentage(100);
    }
  }, [group.members, hasMembers]);

  const handleContributionChange = (memberId, newContribution) => {
    const newValue = parseFloat(newContribution);

    setCustomContributions((prevContributions) => {
      const updatedContributions = {
        ...prevContributions,
        [memberId]: newValue || "",
      };

      // Calculate remaining percentage
      const totalContributions = Object.values(updatedContributions).reduce(
        (acc, val) => acc + (parseFloat(val) || 0),
        0
      );
      setRemainingPercentage(100 - totalContributions);

      return updatedContributions;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled and total equals 100%
    const totalContributions = Object.values(customContributions).reduce(
      (acc, val) => acc + (parseFloat(val) || 0),
      0
    );

    if (totalContributions !== 100) {
      alert("Total contributions must equal 100%");
      return;
    }

    dispatch(
      updateMemberContribution({
        groupId: group.id,
        contributions: customContributions,
      })
    );
    closeModal();
  };


  return (
    <section className="flex flex-col items-center justify-center w-custom-wide-chart bg-white
    dark:bg-dark-primary p-6 ml-8 rounded-lg shadow">
      <div className="w-full flex items-stretch justify-end">
        <p className="text-subheader mr-auto font-bold text-secondary ml-3 dark:text-dark-text ">
          Budget Split
        </p>
        {hasMembers && (
          <button
            className="px-3 transition rounded-md text-primary bg-blizzard-blue dark:bg-dark-primary dark:border hover:bg-primary
            hover:text-white text-primary dark:text-dark-text dark:hover:bg-dark-text dark:hover:text-primary dark:hover:border-primary font-medium"
            onClick={openModal}
          >
            Edit Contributions
          </button>
        )}
      </div>

      {isOpen && (
        <Modal
          content={
            <form onSubmit={handleSubmit} className="space-y-3">
              {group.members.map((member) => (
                <div key={member.id} className="grid grid-cols-[152px_auto] items-center"  >
                  <label className="text-body dark:text-dark-text">{member.name} Contribution</label>
                  <div className="flex items-center">
                  <input
                    type="number"
                    value={customContributions[member.id]}
                    onChange={(e) =>
                      handleContributionChange(member.id, e.target.value)
                    }
                    className="border mr-3 p-2 w-[10rem] dark:bg-dark-input"
                    required
                  />
                 <span className="text-body dark:text-dark-text"> % </span>
                 </div>
                </div>
              ))}
              <p className="text-md dark:text-dark-text">
                Percentage left to divide: {remainingPercentage}%
              </p>
              <button
                type="submit"
                className="rounded-xl px-4 py-2 bg-blizzard-blue dark:bg-dark-primary dark:border
                 hover:bg-primary hover:text-white text-primary dark:text-dark-text dark:hover:bg-dark-text dark:hover:text-primary dark:hover:border-primary"
                disabled={remainingPercentage !== 0}
              >
                Update Contributions
              </button>
            </form>
          }
          onClose={closeModal}
          handleClickOutside={handleClickOutside}
        />
      )}

      {hasMembers ? (
        <>
          <PieChart className="my-6" width={250} height={250}>
            <Pie
              data={group.members.map((member) => ({
                name: member.name,
                value: member.contribution || 1,
              }))}
              cx={120}
              cy={120}
              innerRadius={35.5}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {group.members.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>

          <article className="p-3 w-full flex rounded-lg dark:border shadow-custom flex-wrap justify-start gap-2">
            {group.members.map((entry, index) => (
              <div
                key={index}
                className="flex my-2 items-center mx-2  p-1"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></span>
                <span className="ml-2 font-bold text-legend">{member.name}</span>
                {/* <span className="text-sm ml-1 text-secondary"> - {((entry.contribution / 100) * group.totalExpense).toFixed(1)}$
                </span> */}
                 <span className="text-sm ml-1 text-secondary"> - {(group.totalExpense / 100) * member.contribution} $
                 </span>
              </div>
            ))}
          </article>
        </>
      ) : (
        <p className="text-lg my-8 font-bold text-secondary">
          Add members to see the chart
        </p>
      )}
    </section>
  );
}

export default GroupChart;
