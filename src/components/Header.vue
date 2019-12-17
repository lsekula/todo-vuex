<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-spacer>ToDos</v-spacer>

    <v-text-field
      solo-inverted
      flat
      hide-details
      label="Szukaj"
    />
    <!-- <v-autocomplete
        v-model="searchedText"
        :items="taskNames"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="API"
        label="Public APIs"
        placeholder="Start typing to Search"
        return-object
      ></v-autocomplete> -->
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    taskNames: state => state.tasks.all.map(task => task.content)
  }),
  data: () => ({
    search: null
  })
}
</script>
