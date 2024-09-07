import User from "./../../models/user.jsx";

const users = [
  'Tochi',
  'Afrah',
  'Fari',
  'Muideen',
  'cash_53',
  'Digi-nomad-94',
  'Jordi',
  'User 1',
  'User 2',
  'User 3',
]

const DbOpenConnection = () => {
  const openRequest = window.indexedDB.open("expense-splitter", 1);
  openRequest.addEventListener("upgradeneeded", upgradeDb);
  return openRequest;
}

const upgradeDb = (e) => {
  const objectStore = e.target.result.createObjectStore("users", {
    keyPath: "id",
    autoIncrement: true,
  });
  objectStore.createIndex("id", "id", { unique: true });
  objectStore.createIndex("name", "name", { unique: false });
  insertUsers(objectStore)
}

const insertUsers = (objectStore) => {
  users.forEach((name) => {
    const newItem = { name: name }
    objectStore.add(newItem)
  })
}

const getUsers = () => {
  const openRequest = DbOpenConnection()
  const users = []
  openRequest.addEventListener("success", (e) => {
    const objectStore = e.target.result.transaction("users").objectStore("users")
    objectStore.openCursor().addEventListener("success", (e) => {
      const cursor = e.target.result;
      if (cursor) {
        users.push(new User(cursor.value.id, cursor.value.name))
        cursor.continue();
      }
    });
  });
  return users;
}

export default getUsers;