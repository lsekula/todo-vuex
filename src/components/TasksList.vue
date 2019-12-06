<template>
  <div>
    <!-- <button type="button" name="button" @click="addNew">add new</button> -->
    <ul>
      <ToDo v-for="(task, index) in tasks" :todo=task :key=index />
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ToDo from './ListItem'
export default {
  components: {
    ToDo
  },

  computed: mapState({
    tasks: state => state.tasks.all
  }),

  // methods: {
  //   ...mapActions([
  //     'markAsDone'
  //   ]),
  //   addNew () {
  //     const newItem = {"id": 8, "content": "Agugu", "done": false, "deadline": "2019-11-30", "dateAdded": "2019-12-01"}
  //     this.$store.dispatch('tasks/addNewTask', newItem)
  //   }
  // },

  created () {
    this.$store.dispatch('tasks/getAllTasks')
  }
}
</script>
