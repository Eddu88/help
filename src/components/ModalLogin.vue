<template>
  <div class="normal-case tracking-normal">
    <a href="/#Inicio" @click.prevent="show" class="text-copy-primary uppercase hover:text-gray-600">Inicio</a>
    <modal name="modal-Inicio" @opened="opened" :adaptive="true" :height="440" :width="400">
      <div class="px-10 py-8">
        <h2 class="mb-4 uppercase tracking-wide text-xl">Inicio</h2>
        <form action="#" method="post">
          <div class="form-group mb-4">
            <label for="email" class="block font-normal uppercase tracking-wide text-xs mb-1">Email</label>
            <input type="email" id="email" name="email" class="border px-4 py-2 w-full rounded bg-gray-200" ref="email" @keydown.shift.tab.prevent="">
          </div>
          <div class="form-group mb-4">
            <label for="password" class="block font-normal uppercase tracking-wide text-xs mb-1">Password</label>
            <input type="password" id="password" name="password" class="border px-4 py-2 w-full rounded bg-gray-200">
          </div>
          <div class="form-group mb-8">
            <label class="text-sm font-normal"><input type="checkbox" name="remember" class="mr-2">Keep me signed in</label>
          </div>
          <div class="form-group mb-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Inicio</button>
          </div>
        </form>
        <div class="text-sm font-normal text-center">
          <p>Don't have an account? <a href="#" class="text-blue-600 hover:text-blue-800" @click.prevent="showRegístrate" @keydown.tab.exact.prevent="">Regístrate</a></p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show('modal-Inicio')
    },
    showRegístrate() {
      this.$modal.show('modal-Regístrate')
      this.$modal.hide('modal-Inicio')
    },
    opened() {
      this.$refs.email.focus()
    },
    hide() {
      this.$modal.hide('modal-Inicio')
    }
  }
}
</script>



