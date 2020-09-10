<template>
  <div class="container mx-auto py-24 px-4">
    <progress-bar />
    <item-list />
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import ItemList from '@/views/ItemList.vue'

export default {
  components: {
    ItemList,
    ProgressBar
  }
}
</script>
