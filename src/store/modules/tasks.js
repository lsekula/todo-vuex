import todos from '../../api/todos'
//initial state

const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllTasks ({ commit }) {
    todos.getTasks(tasks => {
      commit('setTasks', tasks)
    })
  },

  markAsDone ({ commit }, task) {
    commit('markTask', { id: task.id })
  },

  addNewTask ({ commit }, task) {
    commit('addTask', task)
  }
}

//mutations
const mutations = {
  setTasks (state, tasks) {
    state.all = tasks
  },

  markTask (state, { id }) {
    const task = state.all.find(task => task.id === id)
    task.done = !task.done
  },

  addTask (state, task) {
    state.all.push({ ...task, id: state.all.length + 1 })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
