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

  const data = hasMembers
    ? group.members.map((member) => ({
        name: member.name,
        value: member.contribution || 1,
      }))
    : [];

  const dispatch = useDispatch();
  const { isOpen, openModal, closeModal, handleClickOutside } = useModal();

  const [customContributions, setCustomContributions] = useState({});

  useEffect(() => {
    if (hasMembers) {
      const equalContribution = (100 / group.members.length).toFixed(1);
      const initialContributions = group.members.reduce((acc, member) => {
        acc[member.id] = equalContribution;
        return acc;
      }, {});
      setCustomContributions(initialContributions);
    }
  }, [group.members, hasMembers]);

  const openModalWithCurrentContributions = () => {
    if (hasMembers) {
      const currentContributions = group.members.reduce((acc, member) => {
        acc[member.id] = member.contribution
          ? member.contribution.toFixed(1)
          : (100 / group.members.length).toFixed(1);
        return acc;
      }, {});
      setCustomContributions(currentContributions);
    }
    openModal();
  };

  const handleContributionChange = (memberId, newContribution) => {
    let newContributionValue = parseFloat(newContribution);

    if (newContributionValue > 100 || newContributionValue < 0) return;

    const remainingContribution = 100 - newContributionValue;
    const otherMembers = group.members.filter(
      (member) => member.id !== memberId
    );
    const otherMembersCount = otherMembers.length;

    const equalContribution = remainingContribution / otherMembersCount;

    setCustomContributions((prevContributions) => {
      const updatedContributions = { ...prevContributions };
      updatedContributions[memberId] = newContributionValue;

      otherMembers.forEach((member) => {
        updatedContributions[member.id] = parseFloat(
          equalContribution.toFixed(2)
        );
      });

      return updatedContributions;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate total contributions before submission
    const totalContributions = Object.values(customContributions).reduce(
      (acc, val) => acc + val,
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
    <section className="flex flex-col items-center justify-center w-custom-wide-chart bg-white dark:bg-dark-secondary dark:border p-6 ml-8 rounded-lg shadow">
      <div className="w-full flex items-stretch justify-end">
        <p className="text-groupComponentHeader mr-auto font-bold text-secondary ml-3 dark:text-primary ">
          Budget Split
        </p>
        <button
          className="hover:bg-primary px-3 transition rounded-md border border-primary text-primary font-bold hover:text-white"
          onClick={openModalWithCurrentContributions}
        >
          Edit Contributions
        </button>
      </div>

      {/* contribution change */}
      {isOpen && (
        <Modal
          content={
            <form onSubmit={handleSubmit} className="space-y-3">
              {group.members.map((member) => (
                <div key={member.id}>
                  <label>{member.name}'s Contribution</label>
                  <input
                    type="number"
                    value={Math.floor(customContributions[member.id])}
                    onChange={(e) =>
                      handleContributionChange(member.id, e.target.value)
                    }
                    className="border mr-3 p-2 w-[90%] dark:bg-dark-input"
                    required
                  />{" "}
                  %
                </div>
              ))}
              <button
                type="submit"
                className="rounded-xl px-4 py-2 bg-primary text-white"
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
              data={data}
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
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>

          {/* custom legend */}
          <article className="p-3 ml-3 flex rounded-lg shadow-custom flex-wrap justify-start">
            {data.map((entry, index) => (
              <div
                key={index}
                className="flex my-2  items-center mx-2 space-x-3 p-1 "
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></span>
                <span className="font-bold text-legend">{entry.name}</span>
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

// CHART EXPLANATION CODE, "RECHARTS" PACKAGE IS USED FOR CHARTS
// ----------------------------------------------------
// <PieChart>: Defines the overall chart's width and height.

// <Pie>:
// -This component takes data and builds a donut chart based on the value field of each entry.
// -cx and cy control the center of the pie chart.
// -innerRadius and outerRadius control the donut's thickness.
// -paddingAngle adds space between the slices.
// -dataKey="value" is the key used to calculate the size of the pie slices (in this case, the value field).
// -label shows the percentage labels inside the pie slices, using the renderCustomizedLabel function.
// ----------------------
// <Cell>:
// -Each slice of the pie is rendered as a Cell, and each cell gets a color from the COLORS array.
// -fill={COLORS[index % COLORS.length]} dynamically applies the color based on the index of each slice.
// ----------------------
