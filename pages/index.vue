<template>
  <div class="grid">
    <vs-row justify="center" offset="2">
      <div w="6">
        <TodoIndex class="card" />
      </div>
    </vs-row>
  </div>
</template>

<script>
import TodoIndex from '@/components/Todo/TodoIndex.vue'
export default {
  components: {
    TodoIndex,
  },
}
</script>

<style>
.card {
  padding: 10px;
  border-radius: 5px 20px 0 0;
  border-bottom: 0 solid rgba(0, 0, 0, 0.03);
  /* background: var(--vs-gray-4); */
  /* position: relative; */
  /* overflow: hidden; */
  transition: all 0.25s ease;
  height: auto;
  width: 100%;
  /* margin: 10px auto auto; */
}
.general-padding {
  border: 10px;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
