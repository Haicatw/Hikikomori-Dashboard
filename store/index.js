export const state = () => ({
  todoList: [],
})

export const mutations = {
  addTodo(state, rawTodo) {
    state.todoList.push({
      ...rawTodo,
      done: false,
    })
  },
  removeTodo(state, { todo }) {
    state.todoList.splice(state.todoList.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
