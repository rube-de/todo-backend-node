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