import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Add Oh, Vue Icons
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { FaAndroid } from "oh-vue-icons/icons";
import { FaLinux } from "oh-vue-icons/icons";
import { FaPalette } from "oh-vue-icons/icons";

addIcons(FaAndroid, FaLinux, FaPalette);

createApp(App).component('v-icon', OhVueIcon).mount('#app')
