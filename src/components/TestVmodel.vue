<template>
  <v-container fluid>
    <v-layout text-center wrap>
      <v-flex xs10 offset-xs-2>
        <input v-model="message" />
        <v-text-field label="Input" v-model="message">
        </v-text-field>
        <p>{{ message }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

  data: () => {
    return {
      message : ''
    }
  },
  beforeCreate() {
    this.message = 'aaa'
  },
  created() {
     this.message = ""
  }
}
</script>
