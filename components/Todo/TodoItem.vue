<template>
  <div id="todo-item" class="center">
    <vs-button icon :color="colorMap[item.priority]" @click="toogleTodoState()">
      <i :class="stateIcon"></i>
    </vs-button>
    <div id="alert">
      <vs-alert :color="colorMap[item.priority]">
        <template #icon>
          <i :class="'bx ' + item.iconClass"></i>
        </template>
        <template v-if="item.done" #title>
          <strike>
            {{ item.description }}
          </strike>
        </template>
        <template v-else #title>
          {{ item.description }}
        </template>
        {{ dueDate }}
      </vs-alert>
    </div>
    <vs-button icon :color="colorMap[item.priority]" @click="removeTodo()">
      <i class="bx bx-minus-circle"></i>
    </vs-button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: undefined,
      required: true,
    },
  },
  data: () => ({
    colorMap: {
      Urgent: '#f23557',
      Medium: '#f0d43a',
      Procrastinatable: '#22b2da',
    },
  }),
  computed: {
    dueDate() {
      // return new Date(this.item.dueDate).toLocaleDateString()
      // console.log(this.item)
      if (this.item.dueDate === '') {
        return 'No due date'
      }
      return 'Due by: ' + this.item.dueDate
    },
    stateIcon() {
      if (this.item.done) {
        return 'bx bx-checkbox-checked'
      }
      return 'bx bx-checkbox'
    },
  },
  methods: {
    removeTodo() {
      this.$store.commit('removeTodo', this.item)
    },
    toogleTodoState() {
      this.$store.commit('toggleTodo', this.item)
    },
  },
}
</script>

<style scoped>
#todo-item {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
#alert {
  min-width: 85%;
}
</style>
