/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export const getTasks = () => {
  return new Promise<Todo[]>((res) => {
    setTimeout(() => {
      res([
        {
          id: "1",
          text: "todo",
          done: false,
        },
        {
          id: "2",
          text: "todo",
          done: false,
        },
      ]);
    }, 1000);
  });
};

const TodoList = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["tasks", "list"],
    queryFn: getTasks,
  });

  if (isPending) {
    return <div>Pending...</div>;
  }

  if (error) {
    return <div>error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      TodoList
      {data.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
