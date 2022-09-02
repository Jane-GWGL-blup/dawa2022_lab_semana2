const data = [
 
];

//Lista todo
export const findAll = () =>{
    return data
}

//Buscar por id
export const findOne = (id) =>{
    return data.find((u) => u.id === Number(id))
}

//Crear
export const store =(user)=>{
    user.id = data.length + 1
    data.push(user)
}

//Update
export const update = (id, user) =>{
    const index = data.findIndex((u) => u.id === Number(id))

    data[index ]={
        ...data[index],
        ...user,
    }
}
//Delete
export const remove =(id)=>{
    const users = data.filter((u)=>u.id !== Number(id))

    data.length=0
    data.push(...user)
}