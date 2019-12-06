<template>
  <v-form>
    <!-- :value="newItem.content" @input="newItem.content = $event.target.value" -->
    <v-text-field
      ref="NewTask"
      v-model="newItem.content"
      :rules="[() => !!newItem.content || 'Podanie treści zadania jest wymagane']"
      label="Nowe zadanie"
      @keyup="validateInput()"
      clearable>
    </v-text-field>
    <p class="error" v-if="error.length > 0">{{ error }}</p>
    <button type="button" name="button" @click="addNewTask(newItem)" :disabled="areErrors">
      Dodaj
    </button>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    taskNames: state => state.tasks.all.map(task => task.content)
  }),


  methods: {
    ...mapActions('tasks', [
      'addNewTask'
    ]),
    validateInput() {
      this.error = ''

      if (this.newItem.content.length < 3) {
        this.error = 'Treść zadania jest zbyt krótka'
        return
      }

      if (this.taskNames.includes(this.newItem.content)) {
        this.error = 'Zadanie o podanej treści już istnieje'
        this.areErrors = true
      } else {
        this.areErrors = false
      }
    }
  },

  data: () => ({
    newItem: {
      "content": "aaa",
      "done": false,
      "deadline": "2019-11-30",
      "dateAdded": "2019-12-01"
    },
    error: '',
    areErrors: false,
  })
}
</script>
<style>
  .error {
    color: black;
    background-color: red
  }
</style>
