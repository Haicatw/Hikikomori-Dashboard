<template>
  <div class="content-inputs container card">
    <IconSelector
      :icon-color="getColorByPriority()"
      @ChangeInputIcon="setTodoIcon"
    />
    <vs-input
      v-model="todoInputVal.description"
      label="Description"
      :icon-color="getColorByPriority()"
      shadow
    >
      <template #icon>
        <i class="bx bx-add-to-queue"></i>
      </template>
      <template #message-danger>
        Required
      </template>
    </vs-input>
    <vs-select v-model="todoInputVal.priority" label="Priority">
      <vs-option
        v-for="priorityLevel in priorityLevels"
        :key="priorityLevel"
        :label="priorityLevel"
        :value="priorityLevel"
      >
        {{ priorityLevel }}
      </vs-option>
    </vs-select>
    <vs-input
      v-model="todoInputVal.dueDate"
      :color="getColorByPriority()"
      shadow
      type="date"
      label="Due date"
    >
      <template #icon>
        <i class="bx bx-time"></i>
      </template>
    </vs-input>
    <vs-button
      v-if="validTodo"
      icon
      :color="getColorByPriority()"
      @click="addTodo()"
    >
      <i class="bx bx-plus-circle"></i>
    </vs-button>
    <vs-button
      v-else
      icon
      disabled
      :color="getColorByPriority()"
      @click="addTodo()"
    >
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
      iconClass: 'bx-file',
      priority: 'Urgent',
      description: '',
      dueDate: '',
    },
    priorityLevels: ['Urgent', 'Medium', 'Procrastinatable'],
  }),
  computed: {
    validTodo() {
      return (
        this.todoInputVal.description !== '' || this.todoInputVal.dueDate !== ''
      )
    },
  },
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
        iconClass: 'bx-file',
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
/* .content-inputs {
  margin-top: 10px;
} */
</style>
