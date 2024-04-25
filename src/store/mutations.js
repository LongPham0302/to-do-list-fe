import Vue from 'vue';
export default {
  addTodo(state,newTodo) {
    
    state.todos.push({
      todo: newTodo,
      done: false
    });
 
  },deleteTodo(state, index) {
    state.todos.splice(index, 1);
  },
  toggleEdit(state, index) {
      state.show = !state.show;
      state.editingIndex = index; 
      state.editedTodo = state.todos[index].todo; 
    },

  
    
confirmEdit(state, { id, editedTodo }) {
  // Tìm chỉ mục của todo cần sửa đổi trong state.todos và cập nhật nó
  const index = state.todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    // Sử dụng Vue.set để cập nhật todo tại vị trí index
    Vue.set(state.todos, index, editedTodo);
  }
}
      ,
  cancelEdit(state) {
    state.editingIndex = null;
    state.editedTodo = '';
    state.show = false; // Ẩn phần chỉnh sửa
  },
  setData(state, data) {
    state.todos = data;
  }
};
