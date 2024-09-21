// for icons, go to this page https://react-icons.github.io/react-icons/ the search for the icon you need. package is already installed, you just need to import the icon, just like the one above, on line 1. on the webpage, when you click on the icon and open it, you will see the code you need to copy paste to import it. to use the icon, you just put it in JSX like its a normal component. follow the <MdGroups/> example below

function GroupSmallExpenseCard({ icon: Icon, label, value, button }) {
  return (
    <section className="bg-white p-4 rounded-global shadow flex items-start space-x-4 max-w-xs min-w-80">
      <Icon className="bg-blizzard-blue rounded-full w-14 h-14 p-3 text-primary"/>

      <span>
        <p className="text-body font-medium text-title ">{label}</p>
        <p className="font-bold text-2xl text-secondary">{value}</p>
      </span>

      {button && (
        <button className="relative top-0 left-16 py-1 px-3 bg-blizzard-blue text-primary font-medium rounded-lg ">
          {button}
        </button>
      )}
    </section>
  );
}

export default GroupSmallExpenseCard;
