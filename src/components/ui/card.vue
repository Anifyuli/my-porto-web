<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="card w-40 bg-base-100 shadow-xl px-4 py-3">
    <div class="card-title flex flex-col place-items-center">
      <v-icon :name="iconName" scale="4" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>
