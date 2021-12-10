<template>
  <button
    :class="[$style['form-btn'], $style[disabledClass ? 'disabled' : '']]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    disabledClass: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.form-btn {
  font-family: "Inter", sans-serif;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  background: #7bae73;
  border-radius: 10px;
  border: 1px solid #7bae73;
  transition: 0.2s ease-out;
  &:hover {
    color: #7bae73;
    background: #ffffff;
    border: 1px solid #7bae73;
    transition: 0.2s ease-out;
  }
  &:active {
    background: #fffefb;
    transition: 0.2s ease-out;
  }
}
.disabled {
  color: #b4b4b4;
  background: #eeeeee;
  border: 1px solid #eeeeee;
  &:hover {
    color: #b4b4b4;
    background: #eeeeee;
    border: 1px solid #eeeeee;
    cursor: default;
  }
}
</style>
