import { useQuery } from "@tanstack/react-query";
import { todoListApi } from "./api";

const TodoList = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["tasks", "list"],
    queryFn: todoListApi.getTodoList,
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
