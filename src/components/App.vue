<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer>spacer</v-spacer>

      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Szukaj"
      />
    </v-app-bar>

    <v-content>
      <v-container>
        <AddNewTask />
        <TasksList />
      </v-container>
      <!-- <TestVmodel /> -->
    </v-content>
  </v-app>
</template>

<script>
import TestVmodel from './TestVmodel'
import TasksList from './TasksList'
import AddNewTask from './AddNewTask'

export default {
  name: 'App',
  components: {
    TestVmodel,
    TasksList,
    AddNewTask
  },

  data: () => ({

  })
}
</script>
