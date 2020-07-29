<template>
  <div class="center">
    <vs-button icon :color="iconColor" @click="active = !active">
      <i :class="'bx ' + selected"></i>
    </vs-button>
    <vs-dialog v-model="active" blur class="con-form flex">
      <template #header>
        <h4>Choose your type</h4>
      </template>
      <div class="icons-selections center">
        <vs-button
          v-for="iconClass in icons"
          :key="iconClass"
          :color="iconColor"
          icon
          @click="setInputIcon(iconClass)"
        >
          <i :class="'bx ' + iconClass"></i>
        </vs-button>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  props: {
    iconColor: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    active: false,
    icons: [
      'bx-mail-send',
      'bx-palette',
      'bx-conversation',
      'bx-microphone',
      'bx-gift',
      'bx-file',
      'bx-cart-alt',
      'bx-code',
      'bx-calendar',
      'bx-message',
    ],
    selected: 'bx-file',
  }),
  mounted() {
    this.setInputIcon('bx-file')
  },
  methods: {
    setInputIcon(selectedIcon) {
      this.selected = selectedIcon
      this.$emit('ChangeInputIcon', selectedIcon)
    },
  },
}
</script>

<style scoped>
.con-form {
  width: 100%;
}
.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}
.con-form .flex a:hover {
  opacity: 1;
}
.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-form .vs-input-content .vs-input {
  width: 100%;
}
/* .icons-selections {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
} */
</style>
