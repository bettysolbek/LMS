<template>
    <div class="px-4 sm:ml-64">
      <Sidebar />
      <header class="bg-white shadow py-4 px-6 flex items-center justify-between">
      
  <div class="relative hidden md:block">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search icon</span>
    </div>
    <input type="text" id="search-navbar" class="block w-96 p-2 ps-10 text-sm text-gray-900 border border-primary rounded-lg bg-gray-50 focus:ring-secondary focus:border-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
  </div>
        <!-- Buy Now Button -->
        <AddForm />
      
      </header>
    
  
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-2">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      reference number
                  </th>
                  <th scope="col" class="px-6 py-3">
                      date
                  </th>
                  <th scope="col" class="px-6 py-3">
                      sender name
                  </th>
                  <th scope="col" class="px-6 py-3">
                      organization
                  </th>
                  <th scope="col" class="px-6 py-3">
                      subject
                  </th>
                  <th scope="col" class="px-6 py-3">
                      urgency
                  </th>
                  <th scope="col" class="px-6 py-3">
                      content summary
                  </th>
                  <th scope="col" class="px-6 py-3">
                      attachments
                  </th>
                  <th scope="col" class="px-6 py-3">
                      assigned to
                  </th>
                  <th scope="col" class="px-6 py-3">
                      created by
                  </th>
                  <th scope="col" class="px-6 py-3">
                      comments
                  </th>
  
              </tr>
          </thead>
          <tbody>
            
          </tbody>
      </table>
  </div>
  
    </div>
  
    </template>
  <script setup>
  import { initDrawers } from 'flowbite'
  
  onMounted(()=>{
    initDrawers()
  })
  </script>