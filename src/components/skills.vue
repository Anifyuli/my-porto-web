<script>
import Card from './ui/card.vue';
export default {
  components: {
    Card,
  },
  data() {
    return {
      items: [
        { id: 1, icon: 'fa-android', text: 'Android Dev' },
        { id: 2, icon: 'fa-linux', text: 'Linux SysAdmin' },
        { id: 3, icon: 'fa-palette', text: 'UI/UX Design' }
      ],
    };
  },
}
</script>

<template>
  <div class="flex flex-col place-items-center my-10">
    <div>
      <h2 class="font-semibold text-xl"> Skills </h2>
    </div>
    <div class="divider mx-40"></div>
    <div class="flex flex-row">
      <Card v-for="item in items" :key="item.id" :iconName="item.icon" :text="item.text" />
    </div>
  </div>
</template>
