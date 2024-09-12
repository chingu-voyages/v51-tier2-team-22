export const getUsers = async () => {
  return await request('/users');
}

export const getGroups = async () => {
  return await request('/groups');
}

export const getExpenses = async () => {
  return await request('/expenses');
}

const request = async(url, options = {}) => {
  const defaultOptions = {}
  const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST}${url}`,{...defaultOptions, ...options})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default request;