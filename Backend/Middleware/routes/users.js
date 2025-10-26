import express from "express";

const userRoutes = express.Router();

let users = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', age: 28, role: 'admin', isActive: true, createdAt: '2024-05-10T09:30:00Z' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', age: 34, role: 'user', isActive: true, createdAt: '2024-06-01T14:12:00Z' },
    { id: 3, name: 'Carla Gomez', email: 'carla.gomez@example.com', age: 22, role: 'user', isActive: false, createdAt: '2024-07-20T08:45:00Z' },
    { id: 4, name: 'Daniel Lee', email: 'daniel.lee@example.com', age: 30, role: 'moderator', isActive: true, createdAt: '2024-08-15T11:00:00Z' },
    { id: 5, name: 'Eva Novak', email: 'eva.novak@example.com', age: 26, role: 'user', isActive: true, createdAt: '2024-09-02T16:20:00Z' }
]

userRoutes.get('/', (req, res) => {
    res.send({
        message: "successfully get all users",
        data: [...users],
        code: 200,
    })
})
userRoutes.post('/', (req, res) => {
    const body = req.body;
    console.log(body)

    let findUser = users.find((user) => user.id == body.id)
    console.log(findUser)

    if (findUser) {
        res.send({
            message: "user with this ID is already exist!",
            code: 400,
        })
    }

    users.push(body);
    res.send({
        message: "successfully created user",
        data: [...users],
        code: 200,
    })
})

userRoutes.delete('/:id', (req, res) => {
    const { id } = req.params

    let findUser = users.find((user) => user.id == id)

    if (!findUser) {
        res.send({
            message: "user not exist with this ID",
            code: 400,
        })
    }

    users = [...users.filter(user=> user.id != id )] 

    res.send({
        message: `successfully deleted user with ID ${id}`,
        data: [...users],
        code: 200,
    })

})

export default userRoutes;
