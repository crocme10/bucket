<template>
  <ul>
    <item v-bind:item="{ url: 10 }"/>
  </ul>
</template>

<script>
import Item from '../components/Item.vue'

export default {
  components: {
    Item
  }
}
</script>
