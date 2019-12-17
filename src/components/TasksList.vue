<template>
  <v-card>
    <v-card-text>
      <v-list>
        <ToDo v-for="(task, index) in tasks.slice().reverse()" :todo=task :key=index />
      </v-list>
    </v-card-text>
  </v-card>
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

  created () {
    this.$store.dispatch('tasks/getAllTasks')
  }
}
</script>
