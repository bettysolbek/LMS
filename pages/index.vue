<template>
  <div class="mx-auto flex">
    <div class="w-1/2 tuto min-h-screen rounded-tr-xl rounded-bl-xl animate"> 
      <!-- Orange colored part -->
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-2xl">Letter Management System</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Experience the best way of communication through digital letters without manual involvement.</p>
      </div>
    </div>
    
    <div class="w-1/2 bg-white min-h-screen">
      <!-- Login Form -->
      <form class="max-w-sm mx-auto center px-4 pt-4" @submit.prevent="handleSubmit">
        <div class="mb-5">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
          <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your username" required>
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your password" required>
        </div>
         <button type="submit" class="w-full text-white tuto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async handleSubmit() {
      try {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const response = await this.$axios.post('/users/login', {
          username,
          password,
        });

        console.log(response.data);
      } catch (error) {
        
        console.error('Error during login:', error);
      }
    },
  },
};
</script>

<style scoped>
.tuto {
  background: #d6c315;
}
</style>
