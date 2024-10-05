function GroupName({group}) {
  return (
    <section className="flex items-center space-x-10 ">
      <img className="w-69 h-69 ml-10 rounded-full object-cover "  src={group.image} alt="group-logo" />
      <h1 className="text-header font-bold text-secondary dark:text-dark-text">{group.name}</h1>
    </section>
  );
}

export default GroupName;
