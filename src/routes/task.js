const express = require("express")
const router = new express.Router()
const Task = require('../models/task')

router.get("/tasks/:id", (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((tasks) => {
        if(!tasks){
            return res.status(404).send()
        }
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.get("/tasks", (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.post("/tasks", (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.delete("/tasks/:id", async(req,res) =>{
    try{
       const task = await Task.findByIdAndDelete(req.params.id)
       if(!task){
        res.status(400).send()
       }

       res.send(task)
    }catch(e){
        res.status(500).send()

    }


})

module.exports = router