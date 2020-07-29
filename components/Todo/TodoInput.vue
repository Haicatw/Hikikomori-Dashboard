<template>
  <div class="center content-inputs container card">
    <IconSelector @ChangeInputIcon="setTodoIcon" />
    <vs-input
      v-model="todoInputVal.description"
      color="getColorByPriority()"
      shadow
      placeholder="何をするか？"
      class="general-padding"
    >
    </vs-input>
    <vs-input
      v-model="todoInputVal.dueDate"
      type="date"
      placeholder="締め切り"
    />
    <vs-button icon @click="addTodo()">
      <i class="bx bx-plus-circle"></i>
    </vs-button>
  </div>
</template>

<script>
import IconSelector from '@/components/Todo/IconSelector.vue'
export default {
  components: {
    IconSelector,
  },
  data: () => ({
    colorMap: {
      Urgent: '#f23557',
      Medium: '#f0d43a',
      Procrastinatable: '#22b2da',
    },
    todoInputVal: {
      iconClass: '',
      priority: 'Urgent',
      description: '',
      dueDate: '',
    },
  }),
  // mounted() {
  //   this.todoInputVal.dueDate = new Date()
  // },
  methods: {
    getColorByPriority() {
      return this.colorMap[this.todoInputVal.priority]
    },
    setTodoIcon(iconVal) {
      this.todoInputVal.iconClass = iconVal
    },
    addTodo() {
      this.$store.commit('addTodo', this.todoInputVal)
      this.todoInputVal = {
        iconClass: '',
        priority: 'Urgent',
        description: '',
        dueDate: '',
      }
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
