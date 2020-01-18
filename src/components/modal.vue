<template>
  <div class="modal_mask" @click="closeModal">
    <div class="modal_wrapper">
      <section class="modal">
        <slot name="modalHeader">default modal header</slot>
        <slot name="modalContent">modal content</slot>
        <slot name="modalFooter">default modal header</slot>
        <button @click="closeModal">close modal !</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data: function() {
    return {};
  },
  methods: {
    closeModal() {
      this.$store.dispatch("actionCloseModal");
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style scoped>
.modal_mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
}
.modal_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.modal {
  max-width: 30em;
  width: 100%;
  margin: auto;
  background-color: #efefef;
}
</style>