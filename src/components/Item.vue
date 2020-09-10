<template>
  <div class="container mx-auto py-24 px-4">
    <div class="w-full md:w-5/6 mx-auto">
      <li class="font-text text-gray-900">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>
