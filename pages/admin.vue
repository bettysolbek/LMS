<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="bg-gray-800 text-white w-64 flex-shrink-0">
      <!-- Logo and Sidebar Links -->
      <div class="py-4 px-6">
        <!-- Your Logo or Branding -->
        <h1 class="text-2xl font-bold">Your Logo</h1>

        <!-- Sidebar Links -->
        <nav class="mt-8">
          <router-link to="/admin/incoming" class="block py-2 px-4 text-sm">Incoming</router-link>
          <router-link to="/admin/outgoing" class="block py-2 px-4 text-sm">Outgoing</router-link>
          <router-link to="/admin/dashboard" class="block py-2 px-4 text-sm">Dashboard</router-link>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <!-- Top Bar with Notification and Search -->
      <header class="bg-white shadow py-4 px-6">
        <!-- Notification Icon and Count -->
        <div class="flex items-center">
          <span class="mr-2">
            <!-- Your Notification Icon -->
             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
               <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
               <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
          </span>
          <span class="text-gray-600">5</span> <!-- Replace with actual notification count -->
        </div>

        <!-- Search Bar -->
        <div class="mt-4">
          <input
            type="text"
            class="w-full p-2 border border-gray-300 rounded"
            placeholder="Search..."
          />
        </div>
      </header>

      <!-- Page Content -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  // Add any logic or lifecycle hooks as needed
};
</script>

<style scoped>
/* Add any scoped styles for the admin page */
</style>
