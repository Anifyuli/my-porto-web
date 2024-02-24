<script>
export default {
  data() {
    return {
      certificates: [
        { id: 1, title: "Belajar Membuat Aplikasi Flutter untuk Pemula", text: "September 2023, Dicoding" },
        { id: 2, title: "Memulai Pemrograman dengan Dart", text: "September 2023, Dicoding" },
        { id: 3, title: "Memulai Pemrograman Dengan Kotlin", text: "Agustus 2022, Dicoding" },
        { id: 4, title: "Belajar Membuat Aplikasi Android untuk Pemula", text: "Desember 2021, Dicoding" },
      ],
    };
  },
};
</script>

<template>
  <div id="achievements" class="flex flex-col place-items-center my-10">
    <div>
      <h2 class="font-semibold text-xl"> Achivements </h2>
    </div>
    <div class="divider mx-40 mb-10"></div>
    <div class="flex flex-row">
      <div v-for="certificate in certificates" :key="id" class="card w-60 bg-base-100 shadow-xl mx-5">
        <figure class="px-5 pt-5">
          <img src="./assets/img/certificate.png" alt="Certificate" class="rounded-md w-20 h-20" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{{ certificate.title }}</h2>
          <p>{{ certificate.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
