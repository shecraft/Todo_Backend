const todoModel = require("../model/todo")

const addTodo = async (req, res) => {
    try {
        const todo = await todoModel.create(req.body)
        if (!todo) {
            return res.status(400).json({
                status:"error",
                message:"Error while adding todo"
            })
        }
        res.status(201).json({
            status:"success",
            message:"Successfully added ",
            todo
        })
    } catch (error) {
        console.log(error);
        
    }
}

const getAllTodo = async (req, res) => {
    try {
        const todo = await todoModel.find()
        if (!todo) {
            return res.status(400).json({
                status:"error",
                message:"Could not fetch any todo"
            })
        }

        res.status(201).json({
            status:"success",
            message:"Fetched successfully",
            todo
        })
    } catch (error) {
        console.log(error);
        
    }
}

const deleteTodo = async (req, res) => {
    const {id} = req.params
    try {
        const todo = await todoModel.findByIdAndDelete(id)
        if (!todo) {
            return res.status(400).json({
                status:"error",
                messgae:"Can not be deleted"
            })
        }
        res.status(201).json({
            status:"success",
            message:"Has been deleted successfully"
        })
    } catch (error) {
        console.log(error);
        
    }
}

module.exports ={
    addTodo,
    getAllTodo,
    deleteTodo
}