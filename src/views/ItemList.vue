<template>
  <ul>
    <item v-for='item in items' :key='item.id' :item='item' />
  </ul>
</template>

<script>
import Item from '../components/Item.vue'

export default {
  components: {
    Item
  },
  data () {
    return {
      items: window.items
    }
  }
}
</script>
