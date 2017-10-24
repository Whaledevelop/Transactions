export const filtersHandler = (todos, filter) => {
  switch (filter) {
      case 'SHOW_ALL':
          return todos
      case 'SHOW_INCOME':
          return todos.filter(t => t.completed)
      case 'SHOW_CONSUMPTION':
          return todos.filter(t => !t.completed)
  }
}