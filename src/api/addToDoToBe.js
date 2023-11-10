
const addToDoToBe = (list) => {
return localStorage.setItem('myToDO', JSON.stringify(list))
}

export default addToDoToBe