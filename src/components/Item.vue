<template>
  <div class="w-full md:w-5/6 mx-auto">
    <li class="font-text text-gray-900">
      <a :href="item.url">{{ item.title }}</a>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>
