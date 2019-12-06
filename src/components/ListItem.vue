<template>
  <li>
    <v-checkbox
      :id="`${todo.id.toString()}`"
      :value="todo.done"
      @change="markAsDone(todo); otherWork()">
      <template v-slot:label>
        <div :class="{crossed: todo.done }">
          {{ todo.content }}
        </div>
      </template>
    </v-checkbox>
    <!-- <v-checkbox
              v-model="form.terms"
              color="green"
            >
              <template v-slot:label>
                <div @click.stop="">
                  Do you accept the
                  <a href="javascript:;" @click.stop="terms = true">terms</a>
                  and
                  <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
                </div>
              </template>
            </v-checkbox> -->
      <!-- <input @keyup="checkAsDone" type="text" name="say" value="saaaa"> -->
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Todo",
  props: ['todo'],
  methods: {
    ...mapActions('tasks', [
      'markAsDone'
    ]),
    otherWork () {
      console.log('qq')
      this.marked = true
    }
  },
  data () {
    return {
      marked: false
    }
  }
}
</script>

<style scoped>
  .crossed {
    text-decoration: line-through;
    color: darkred
  }
</style>
