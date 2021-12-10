<template>
  <div :class="$style.catalog">
    <SelectCustom></SelectCustom>
    <GoodsCard></GoodsCard>
  </div>
</template>

<script>
import GoodsCard from "./GoodsCard";
import SelectCustom from "./SelectCustom";

export default {
  name: "Catalog",
  components: {
    GoodsCard,
    SelectCustom
  }
};
</script>

<style lang="scss" module>
.catalog {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
}
</style>
