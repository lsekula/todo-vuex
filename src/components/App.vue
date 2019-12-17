<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <AddNewTask />
            <v-divider class="mt-12"></v-divider>
            <TasksList />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './Header'
import TasksList from './TasksList'
import AddNewTask from './AddNewTask'

export default {
  name: 'App',
  components: {
    Header,
    TasksList,
    AddNewTask
  }
}
</script>
