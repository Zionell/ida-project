<template>
  <AddForm></AddForm>
  <Catalog></Catalog>
</template>

<script>
import AddForm from "./components/AddForm";
import Catalog from "./components/Catalog";

export default {
  components: {
    AddForm,
    Catalog,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
}
#app {
  display: grid;
  grid-template-columns: 332px 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
  gap: 16px;
  padding: 32px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
}
</style>
