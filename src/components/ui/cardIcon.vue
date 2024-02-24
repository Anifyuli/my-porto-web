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
  <div class="card w-80 bg-base-100 mx-10">
    <div class="card-title flex flex-col place-items-center">
      <v-icon :name="iconName" scale="4" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>
