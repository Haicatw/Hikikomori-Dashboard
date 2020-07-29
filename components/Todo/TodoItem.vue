<template>
  <vs-checkbox v-model="item.done" line-through>
    <vs-alert :color="colorMap[item.priority]">
      <template #icon>
        <i :class="'bx ' + item.iconClass"></i>
      </template>
      <template #title>
        {{ item.description }}
      </template>
      {{ '締め切り: ' + dueDate }}
    </vs-alert>
    <vs-button icon @click="removeTodo()">
      <i class="bx bx-minus-circle"></i>
    </vs-button>
  </vs-checkbox>
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
    done: false,
  }),
  computed: {
    dueDate() {
      // return new Date(this.item.dueDate).toLocaleDateString()
      // console.log(this.item)
      return this.item.dueDate
    },
  },
  mounted() {
    this.done = this.item.done
  },
  methods: {
    removeTodo() {
      this.$store.commit('removeTodo', this.item)
    },
  },
}
</script>
