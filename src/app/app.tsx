import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../shared/api/query-client';
import TodoList from '../modules/todo-list/todo-list';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TodoListInfinity } from '../modules/todo-list/todo-list-infinity';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <TodoList /> */}
      <TodoListInfinity />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
