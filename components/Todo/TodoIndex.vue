<template>
  <div class="container">
    <h2>
      <b>新しい任務</b>
    </h2>
    <TodoInput class="general-padding" />
    <h2>
      <b>頑張って</b>
    </h2>
    <div>
      <TodoItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        class="general-padding"
      />
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
}
</style>
