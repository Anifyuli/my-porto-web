<script>
export default {
  data() {
    return {
      name: "Moh. Anif Yuliansyah",
    }
  },
}
</script>

<template>
  <div class="grid place-content-center mb-10">
    <!-- Content start -->
    <div class="flex flex-row justify-evenly w-screen mt-5">
      <div class="grid h-fit basis-2/5 card w-screen mx-10 py-3 space-y-3 place-items-center">
        <h1 class="font-bold text-2xl mt-3">Welcome to my profile!</h1>
        <h3 class="font-normal text-xl">My name is {{ name }}</h3>
        <h3 class="font-normal text-xl">A software developer & open source enthusiast</h3>
        <button class="btn btn-md btn-primary mt-2">Let's go!</button>
      </div>
      <div class="grid h-fit basis-1/3 card rounded-box place-items-center w-screen mx-10">
        <img src="./assets/img/profile.jpg" alt="" class="size-60 mask mask-circle">
      </div>
    </div>
    <!-- Content end -->
  </div>
</template>
