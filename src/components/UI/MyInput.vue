<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    modelValue: String,
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  border: none;
  border-radius: 6px;
  padding: 6px;
  margin-right: 10px;
}
</style>
