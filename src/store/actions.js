import axios from 'axios';

export default {
  async addTodoaction({ commit }, newTodo) {
    try {
      const response = await axios.post('http://localhost:4000/todos', { todo:newTodo, done: false });
      commit('addTodo', response.data); // Gọi mutation 'addTodo' và truyền dữ liệu nhận được từ phản hồi
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  },
  async toggleEditaction({ commit }, index) {
    try {
      // Thực hiện các thay đổi cần thiết ở đây (nếu có)
      commit('toggleEdit', index); // Gọi mutation để thay đổi trạng thái
    } catch (error) {
      console.error('Error toggling edit:', error);
    }
  },
  async deleteTodoaction({ commit }, id) {

    try {
      await axios.delete(`http://localhost:4000/todos/${id}`);
    
      
      commit('deleteTodo', id);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  },



  async confirmEditaction({ commit }, {  editedTodo }) {
    try {
      await axios.put(`http://localhost:4000/todos/${editedTodo.id}`, editedTodo);
      commit('confirmEdit', editedTodo );
    } catch (error) {
      console.error('Error confirming edit:', error);
    }
  },

  async cancelEditaction({ commit }) {
    try {
      commit('cancelEdit');
    } catch (error) {
      console.error('Error cancelling edit:', error);
    }
  },

  async fetchData({ commit }) {
    try {
      const response = await axios.get('http://localhost:4000/todos');
      console.log("response", response);
      commit('setData', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};
