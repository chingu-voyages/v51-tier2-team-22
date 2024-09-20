function GroupsEachMember({ member, index }) {
  return (
    <section
      key={index}
      className="relative flex flex-col w-20 items-center text-center"
    >
      <img
        className="object-cover w-14 h-14 rounded-full shadow-lg"
        src={member.img}
        alt={member.name}
      />
      <p className="text-legend font-bold text-legend">{member.name}</p>
      <button className="bg-highlight flex items-center justify-center rounded-full font-extrabold text-lg text-alert w-6 h-6 pb-1 bottom-20 relative left-7">
        -
      </button>
    </section>
  );
}

export default GroupsEachMember;
