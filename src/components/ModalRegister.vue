<template>
  <div class="normal-case tracking-normal">
    <a href="/#Regístrate" @click.prevent="show" class="text-copy-primary uppercase hover:text-gray-600">Regístrate</a>
    <modal name="modal-Regístrate" @opened="opened" :adaptive="true" :height="530" :width="420">
      <div class="px-10 py-8">
        <h2 class="mb-4 uppercase tracking-wide text-xl">Regístrate</h2>
        <form action="#" method="post">
          <div class="flex space-x-4 space-x-5 flex-wrap -mx-2 space-y-4 md:space-y-0 justify-between">
            <div class="form-group mb-4">
              <label for="name" class="block font-normal uppercase tracking-wide text-xs mb-1">Nombre</label>
              <input type="name" id="name" name="name" class="border px-4 py-2 w-full rounded bg-gray-200" ref="email" @keydown.shift.tab.prevent="">
            </div>
            <div class="form-group mb-4">
              <label for="name" class="block font-normal uppercase tracking-wide text-xs mb-1">Apellidos</label>
              <input type="last_name" id="last_name" name="last_name" class="border px-4 py-2 w-full rounded bg-gray-200" ref="email" @keydown.shift.tab.prevent="">
            </div>
          </div>
          <div class="form-group mb-4">
            <label for="email" class="block font-normal uppercase tracking-wide text-xs mb-1">Correo Electrónico</label>
            <input type="email" id="email" name="email" class="border px-4 py-2 w-full rounded bg-gray-200" ref="email" @keydown.shift.tab.prevent="">
          </div>
          <div class="form-group mb-4">
            <label for="password" class="block font-normal uppercase tracking-wide text-xs mb-1">Contraseña</label>
            <input type="password" id="password" name="password" class="border px-4 py-2 w-full rounded bg-gray-200">
          </div>
          <div class="form-group mb-8">
            <label for="confirm_password" class="block font-normal uppercase tracking-wide text-xs mb-1">Confirmar Contraseña</label>
            <input type="password" id="confirm_password" name="confirm_password" class="border-blue-600 px-4 py-2 w-full rounded bg-gray-200">
          </div>
          <div class="form-group mb-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Regístrate</button>
          </div>
        </form>
        <div class="text-sm font-normal text-center">
          <p>Already have an account? <a href="#" class="text-blue-600 hover:text-blue-800" @click.prevent="showInicio" @keydown.tab.exact.prevent="">Inicio</a></p>
        </div>
      </div>
    </modal>
  </div>
</template>


<script>
export default {
  methods: {
    show() {
      this.$modal.show('modal-Regístrate')
    },
    showInicio() {
      this.$modal.show('modal-Inicio')
      this.$modal.hide('modal-Regístrate')
    },
    opened() {
      this.$refs.email.focus()
    },
    hide() {
      this.$modal.hide('modal-Regístrate')
    }
  }
}
</script>



