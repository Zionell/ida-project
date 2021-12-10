<template>
  <section :class="$style['add-form']">
    <h1 :class="$style['add-form__title']">Добавление товара</h1>
    <OverallForm />
  </section>
</template>

<script>
import OverallForm from "./OverallForm";

export default {
  name: "AddForm",
  components: {
    OverallForm,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" module>
.add-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3f3f3f;
  }
}
</style>
