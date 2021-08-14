import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AnimatePresence } from "framer-motion";

// Shared Components
import PageWrapper from "../../components/PageWrapper";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Button from "../../components/Button";

// Related Components
import List from "./components/List";
import Item from "./components/Item";

// Service
import { getTodos, addTodo } from "./service";

const Todo = {
  List,
  Item,
};

const Todos = () => {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const getTodosQuery = useQuery("todos", getTodos);

  const addTodoMutation = useMutation(addTodo, {
    onMutate: async (body) => {
      // Clear input
      setTitle("");

      // Get previous state of query
      await queryClient.cancelQueries("todos");
      const previousTodos = queryClient.getQueryData("todos");

      // Update optimisticly query state with new data
      const addedTodo = {
        ...body,
        isTemporary: true,
      };
      queryClient.setQueryData("todos", (old) => {
        return [...old, addedTodo];
      });

      return previousTodos;
    },
    onError: (err, variables, previousValue) =>
      // Set previos data if has error
      queryClient.setQueryData("todos", previousValue),
    onSuccess: (response, variables, previousValue) =>
      // Because of fake API doesn't return added todo,
      // We remove manually temporary todo which has 'isTemporary' field,
      // and merge prev query data and new add one which has not 'isTemporary' field.
      queryClient.setQueryData("todos", [...previousValue, variables]),
  });

  const handleAddTodo = () => {
    const body = {
      id: Math.random(),
      userId: 1,
      title,
      completed: false,
    };
    addTodoMutation.mutate(body);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <PageWrapper>
      <Heading>Yet Another Todo List</Heading>
      <Input
        value={title}
        type="text"
        placeholder="Type todo"
        onChange={handleChangeTitle}
      />
      <Button onClick={handleAddTodo}>Add</Button>
      <Todo.List>
        <AnimatePresence initial={false}>
          {getTodosQuery.isLoading && <Todo.Item>Loading...</Todo.Item>}
          {getTodosQuery.isSuccess &&
            getTodosQuery.data.map((todo) => (
              <Todo.Item
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: todo.isTemporary ? 0.4 : 1, x: 0 }}
                exit={{ opacity: 0, x: -10, transition: { duration: 0.2 } }}
                key={todo.id}
              >
                {todo.title}
              </Todo.Item>
            ))}
        </AnimatePresence>
      </Todo.List>
    </PageWrapper>
  );
};

export default Todos;
