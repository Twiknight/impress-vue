<template>
<div class="slide" v-bind:style = "conf" v-html="content"></div>
</template>
<style scoped>
.slide{
  position:absolute;
  transform-origin:center;
  box-sizing:border-box;
}
</style>

<script>
export default {
  props: ['content', 'conf'],
}
</script>