

const getToDoList = () => {
    return localStorage.getItem('myToDo') ? JSON.parse(localStorage.getItem('myToDO')) : []
}

export default getToDoList