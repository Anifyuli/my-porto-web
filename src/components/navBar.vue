<script>
export default {
  data() {
    return {
      menus: ["Home", "Skills", "Achivements"],
    }
  },
}
</script>

<template>
  <div>
    <!-- navBar start-->
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>{{ menus[0] }}</a></li>
            <li><a href="#">{{ menus[1] }}</a></li>
            <li><a>{{ menus[2] }}</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>{{ menus[0] }}</a></li>
          <li><a href="#">{{ menus[1] }}</a></li>
          <li><a>{{ menus[2] }}</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class="ml-2 mr-4">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-sm m-1">
              Theme
              <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
              <li><input type="radio" name="theme-dropdown"
                  class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light"
                  value="light" /></li>
              <li><input type="radio" name="theme-dropdown"
                  class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- navBar end -->
  </div>
</template>
