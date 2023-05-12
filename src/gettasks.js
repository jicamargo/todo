const getTasks = () => JSON.parse(localStorage.getItem('todoData')) || [];

export default getTasks;
