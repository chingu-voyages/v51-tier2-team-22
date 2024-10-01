function GroupsEachMember({ member }) {
  return (
    <section className="flex flex-col w-20 items-center text-center">
      <img
        className="object-cover w-14 h-14 rounded-full shadow-lg"
        src={member.img}
        alt={member.name}
      />
      <p className="font-bold text-legend">{member.name}</p>
    </section>
  );
}

export default GroupsEachMember;
