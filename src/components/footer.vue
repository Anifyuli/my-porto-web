<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
}
</script>

<template>
  <div>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © {{ year }} - With full of ❤️ from <a class="text-rose-700" href="https://github.com/Anifyuli"
            target="_blank">me</a></p>
      </aside>
    </footer>
  </div>
</template>
