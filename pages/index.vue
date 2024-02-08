<template>
  <div class="mx-auto flex">
    <div class="w-1/2 tuto min-h-screen rounded-tr-xl rounded-br-xl animate">
      <!-- Orange colored part -->
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-2xl display-inline-flex align-items-center">
          <img src="assets/css/ewenet.jpg" style="width:30px; border-radius:50%; height: 30px; margin-bottom: 0; margin-left:70px; margin-right: 10px; display: inline-flex; align-items: center;" alt="">Letter Management System
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-12 ml-16">
          Experience the best way of communication through digital letters without manual
          involvement.
        </p>
      </div>
    </div>

    <div class="w-1/2 bg-white min-h-screen">
      <!-- Login Form -->
      <h1 class=" mt-32 mb-0 font-mono center align-items-center justify-items-center text-6xl text-primary text-center font-extrabold ">welcome!</h1>
      <form class="max-w-sm mx-auto center px-4 pt-8">
        <div class="mb-5">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your username</label
          >
          <input
            type="text"
            id="username"
            class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:secondary dark:focus:border-secondary"
            placeholder="Your username"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="Your password"
            required
          />
        </div>
        <nuxt-link to="/admin">
          <button
            type="submit"
            class="w-full text-white tuto hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary :focus:ring-primary"
          >
            Login to your account
          </button>
        </nuxt-link>
        <div v-if="error" class="text-red-500">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// import { useRouter } from 'vue-router';
// import backendApi from '~/networkServices/api/backendApi';
// import useAxiosSetup from '~/networkServices/useAxioSetup';

// // Call the setup function during component setup
// useAxiosSetup();

// const router = useRouter();
// const formData = ref({
//   username: '',
//   password: '',
// });

// const error = ref(null);

// const handleSubmit = async () => {
//   try {
//     const response = await backendApi.post('/users/login', {
//       username: formData.username,
//       password: formData.password,
//     });

//     console.log(response.data);

//     // Check if the login was successful based on your API response
//     if (response.data.success) {
//       // You can dispatch Vuex actions here if needed
//       // store.dispatch('login', { username: formData.username, password: formData.password });

//       router.push('/admin');
//     } else {
//       // Display an error message
//       error.value = 'Invalid username or password';
//     }
//   } catch (error) {
//     console.error('Error during login:', error);
//     error.value = 'An error occurred during login';
//   }
// };
</script>

<style scoped>
.tuto {
  background: #d6c315;
  position: relative;
  
}

.tuto::before,
.tuto::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
}

.tuto::before {
  background: linear-gradient(to right, transparent, white);
  border-radius: 50% 0 0 50%;
  right: 0;
}

.tuto::after {
  background: linear-gradient(to left, #ddd);
  border-radius: 0 50% 50% 0;
  left: 0;
}

</style>
