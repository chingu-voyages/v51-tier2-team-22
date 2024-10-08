function FriendName({friendName}) {
    return (
      <section className="flex items-center space-x-10 ">
        <img className="w-69 h-69 ml-10 rounded-full object-cover "  src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid" alt="friend" />
        <h1 className="text-header font-bold text-secondary dark:text-dark-text">{friendName}</h1>
      </section>
    );
  }

  export default FriendName;
