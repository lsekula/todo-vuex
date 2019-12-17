<template>
  <v-list-item @click="">
    <v-list-item-action>
      <v-checkbox
        :id="`${todo.id.toString()}`"
        :value="todo.done"
        @change="markAsDone(todo)">
      </v-checkbox>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>
        <div :class="{crossed: todo.done }">
          {{ todo.content }}
        </div>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Todo",
  props: ['todo'],
  methods: mapActions('tasks', [
    'markAsDone'
  ])
}
</script>

<style scoped>
  .crossed {
    text-decoration: line-through;
    color: darkred
  }
</style>
