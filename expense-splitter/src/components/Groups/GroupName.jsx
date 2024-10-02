function GroupName({groupName}) {
  return (
    <section className="flex items-center space-x-10 ">
      <img className="w-69 h-69 ml-10 rounded-full object-cover "  src="https://freedomdestinations.co.uk/wp-content/uploads/Diamond-Head-Crater-Honolulu.jpg" alt="group-logo" />
      <h1 className="text-header font-bold text-secondary dark:text-dark-text">{groupName}</h1>
    </section>
  );
}

export default GroupName;
