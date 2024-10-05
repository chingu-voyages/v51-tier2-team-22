function GroupName({groupName, description}) {
  return (
    <section className="flex items-center space-x-10 ">
      <img className="w-69 h-69 ml-10 rounded-full object-cover "  src="https://freedomdestinations.co.uk/wp-content/uploads/Diamond-Head-Crater-Honolulu.jpg" alt="group-logo" />
      <div className="flex flex-col">
        <h1 className="text-header font-bold text-secondary dark:text-dark-text">
          {groupName}
        </h1>
        <p className="text-body dark:text-dark-text">
          {description}
        </p>
      </div>

    </section>


  );
}

export default GroupName;
