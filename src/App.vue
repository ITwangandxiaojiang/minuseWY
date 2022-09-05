<template>
  <Navbar/>
  <router-view></router-view>
</template>
<script lang="ts">
export default { name: 'MyApp' }
</script>
<script setup lang="ts">
// @ts-ignore
import Navbar from './components/Navbar/Navbar.vue'

</script>

<style>
</style>