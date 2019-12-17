<template>
  <v-card>
    <v-card-text>
      <v-text-field
        v-model="newItem.content"
        :rules="[
          () => !!newItem.content && newItem.content.length > 3
            || 'Content should be at least 4 character long',
          () => !!newItem.content && !taskNames.includes(newItem.content)
            || 'That content already exists'
        ]"
        label="New task"
        >
      </v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="() => { addNewTask(newItem);
        newItem.content = ''}" :disabled="newItem.content.length < 4">
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    taskNames: state => state.tasks.all.map(task => task.content)
  }),

  methods: mapActions('tasks', [
    'addNewTask'
  ]),

  data: () => ({
    newItem: {
      "content": "",
      "done": false,
      "deadline": "2019-11-30",
      "dateAdded": "2019-12-01"
    }
  })
}
</script>
<style>
  .error {
    color: black;
    background-color: red
  }
</style>
