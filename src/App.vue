<template>
  <div id="App">
    <header class=" bg-gray-100 z-10 absolute w-full shadow-md">
     <nav class=" font-sans text-gray-800">
          <div class="nav01 text-xs font-normal tracking-tighter capitalize text-blue-700 flex justify-end">
            <ul class="w-full  justify-end block  flex-wrap flex-grow lg:flex lg:flex-inicial lg:w-auto items-center mt-8 lg:mt-0"
            :class="menuOpen ? 'block': 'hidden'"
          >
            <li class="mr-8 mb-6 lg:mb-0">
              <modal-login />
            </li>
            <li class="mr-8 mb-6 lg:mb-0">
              <modal-register />
            </li>
            <li class="mb-4 lg:mb-0 lg:mr-8">
              <language-switcher />
            </li>
          </ul>
          </div>
        <div class="nav02 mb-0 lg:mb-2 xl:mb-0">
          <router-link :to="`/${$i18n.locale}`" class="flex justify-center">
            <img src="@/assets/logo.png" alt="logo" class="-mb-8 -mt-11 w-56 h-44">
          </router-link>
        </div>
        <div class="container mx-auto px-20 py-3 flex flex-wrap justify-between items-center">
          <div class="block lg:hidden">
            <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg src="./public/iconos/hamburguesa.svg"></svg>
            </button>
          </div>
        </div>
        <ul
          class="font-bold tracking-wide uppercase text-blue-700 w-full justify-center block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="menuOpen ? 'block': 'hidden'"
        >
            <li class="mr-12 mb-6 lg:mb-0">
              <search-component />
            </li>
            <li class="mr-8 mb-6 lg:mb-0">
              <router-link :to="`/${$i18n.locale}/Empresa`" 
                            class="text-copy-primary hover:text-gray-600">Empresa</router-link>
            </li>
            <li class="mr-8 mb-6 lg:mb-0">
              <router-link :to="`/${$i18n.locale}/Sectores`" 
                            class="text-copy-primary hover:text-gray-600">Sectores</router-link>
            </li>
            <li class="mr-8 mb-6 lg:mb-0">
              <mega-menu />
            </li>
            <li>
              <dropdown-menu />
            </li>
          </ul>
      </nav>
    </header>

    <div class="bg-white min-h-screen pt-40 text-lg font-sans text-gray-800">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import SearchComponent from '@/components/SearchComponent.vue'
  import DropdownMenu from '@/components/DropdownMenu.vue'
  import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
  import MegaMenu from '@/components/MegaMenu.vue'
  import ModalLogin from '@/components/ModalLogin.vue'
  import ModalRegister from '@/components/ModalRegister.vue'

export default {
  name: 'App',
  components: {
    SearchComponent,
    DropdownMenu,
    MegaMenu,
    ModalLogin,
    ModalRegister,
    LanguageSwitcher,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style src="@/assets/css/tailwind.css" />


