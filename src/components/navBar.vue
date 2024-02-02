<script>
export default {

}
</script>

<template>
  <div>
    <nav class="bg-white dark:bg-gray-800 shadow-md items-center py-4">
      <!-- Hamburger button start -->
      <button
        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden ml-2"
        type="button" data-te-collapse-init data-te-target="#navbarSupportedContent2"
        aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="[&>svg]:w-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
            <path fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      <!-- Hamburger button end -->
      <div class="hidden md:flex md:flex-wrap md:justify-around mx-auto sm:mx-0 p-4">
        <div>
          <ul class="list-style-none flex flex-row space-x-4">
            <li class="text-gray-800 dark:text-white">
              <a href="#">Home</a>
            </li>
            <li class="text-gray-800 dark:text-white">
              <a href="#">Skills</a>
            </li>
            <li class="text-gray-800 dark:text-white">
              <a href="#">Achievements</a>
            </li>
            <li class="text-gray-800 dark:text-white">
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
