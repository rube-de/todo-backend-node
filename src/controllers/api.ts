import { Response, Request } from "express";
import { Todo, TodoDocument } from "../models/todo";


export let getTodos = (req: Request, res: Response) => {
    Todo.find()
    .then(function(todos:TodoDocument[]){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
  };

export let postTodo = (req: Request, res: Response) => {
    Todo.create(req.body)
    .then(function(newTodo: TodoDocument){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

export let getTodoById = (req: Request, res: Response) => {
    Todo.findById(req.params.todoId)
    .then(function(foundTodo: TodoDocument | null){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err);
    })
}

export let updateTodo = (req: Request, res: Response) => {
    Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new:true})
    .then(function(foundTodo: TodoDocument | null){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err);
    })
}

export let deleteTodo = (req: Request, res: Response) => {
    Todo.remove({_id:req.params.todoId})
    .then(function(){
        res.json({message: 'We deleted it!'})
    })
    .catch(function(err){
        res.send(err);
    })
}