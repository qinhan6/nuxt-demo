<template>
  <div>
    <h1>课程的ID为：{{ route.params.id }}</h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route.params.id);
</script>