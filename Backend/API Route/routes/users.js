import express from 'express'

const userRoutes = express.Router();


let users = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', age: 28, role: 'admin', isActive: true, createdAt: '2024-05-10T09:30:00Z' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', age: 34, role: 'user', isActive: true, createdAt: '2024-06-01T14:12:00Z' },
    { id: 3, name: 'Carla Gomez', email: 'carla.gomez@example.com', age: 22, role: 'user', isActive: false, createdAt: '2024-07-20T08:45:00Z' },
    { id: 4, name: 'Daniel Lee', email: 'daniel.lee@example.com', age: 30, role: 'moderator', isActive: true, createdAt: '2024-08-15T11:00:00Z' },
    { id: 5, name: 'Eva Novak', email: 'eva.novak@example.com', age: 26, role: 'user', isActive: true, createdAt: '2024-09-02T16:20:00Z' }
]


userRoutes.get('/', (req,res)=>{
    res.status(200).send({
        message: 'successfully get all users.',
        data: [...users],
        isError: false,
        code: 200,
    })
})

userRoutes.post('/', (req,res)=>{
    res.send('posting  user')
})
userRoutes.delete('/', (req,res)=>{
    res.send('deleting user')
})

userRoutes.get('/:id', (req,res)=>{
    const { id } = req.params
    console.log("user id: ", id)

    let findUser = users.find(user =>  user.id == id)
    if(findUser){
        res.status(200).send({
        message: 'successfully get user.',
        data: findUser,
        isError: false,
        code: 200,
    })
    }

    res.status(200).send({
        message: 'user not found .',
        data: {},
        isError: false,
        code: 404,
    })
})

export default userRoutes