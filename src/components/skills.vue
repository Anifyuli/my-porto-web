<script>
import CardIcon from './ui/cardIcon.vue';
export default {
  components: {
    CardIcon,
  },
  data() {
    return {
      items: [
        { id: 1, icon: 'fa-android', text: 'Android Dev' },
        { id: 2, icon: 'co-flutter', text: 'Flutter Dev' },
        { id: 3, icon: 'fa-linux', text: 'Linux SysAdmin' },
        { id: 4, icon: 'fa-palette', text: 'UI/UX Design' },
      ],
    };
  },
}
</script>

<template>
  <div id="skills" class="flex flex-col place-items-center my-30">
    <div>
      <h2 class="font-semibold text-xl"> Skills </h2>
    </div>
    <div class="divider mx-40 mb-5"></div>
    <div class="flex flex-row">
      <CardIcon v-for="item in items" :key="item.id" :iconName="item.icon" :text="item.text" />
    </div>
  </div>
</template>
