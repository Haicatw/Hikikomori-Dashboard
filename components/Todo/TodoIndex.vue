<template>
  <div class="container">
    <h2>
      <b>Add New Todo (*° ∀°)</b>
    </h2>
    <TodoInput />
    <h2>
      <b>Todo List (｡・`ω´･)</b>
    </h2>
    <div class="blocks">
      <TodoItem v-for="(item, index) in items" :key="index" :item="item" />
    </div>
    <div v-if="items.length === 0" class="blocks">
      <vs-alert>
        <template #title>
          Congratulations!
        </template>
        There are no todos left!
        <b>_(:з」∠)_</b>
      </vs-alert>
    </div>
  </div>
</template>

<script>
import TodoInput from '@/components/Todo/TodoInput.vue'
import TodoItem from '@/components/Todo/TodoItem.vue'
export default {
  components: { TodoInput, TodoItem },
  computed: {
    items() {
      return this.$store.state.todoList
    },
  },
  methods: {},
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.blocks {
  width: 100%;
}
</style>
