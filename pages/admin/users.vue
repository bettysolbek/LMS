<template>
    <div class="px-4 sm:ml-64">
   <Sidebar />
   <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
 <div class="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
   <!-- Start coding here -->
   <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
     <div class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
       <div>
         <h5 class="mr-3 font-semibold dark:text-white">LMS USERS</h5>
         <p class="text-gray-500 dark:text-gray-400">Manage all your existing users or add a new one</p>
       </div>
       <button type="button"
               class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-2 -ml-1" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true">
           <path
             d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
         </svg>
         Add new user
       </button>
     </div>
   </div>
 </div>

<div class="flex items-center h-full"> 

<div class="w-full justify-center max-w-md p-8 bg-gray-7- border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flex items-center justify-between mb-4">
       <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
       <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
           View all
       </a>
  </div>
  <div class="flow-root">
       <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
           <li class="py-3 sm:py-4">
               <div class="flex items-center">
                   <div class="flex-shrink-0">
                       <img class="w-8 h-8 rounded-full" src="~/assets/css/ewenet.jpg" alt="Neil image">
                   </div>
                   <div class="flex-1 min-w-0 ms-4">
                       <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Neil Sims
                       </p>
                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                           email@windster.com
                       </p>
                   </div>
                   <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       $320
                   </div>
               </div>
           </li>
           <li class="py-3 sm:py-4">
               <div class="flex items-center ">
                   <div class="flex-shrink-0">
                       <img class="w-8 h-8 rounded-full" src="~/assets/css/ewenet.jpg" alt="Bonnie image">
                   </div>
                   <div class="flex-1 min-w-0 ms-4">
                       <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Bonnie Green
                       </p>
                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                           email@windster.com
                       </p>
                   </div>
                   <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       $3467
                   </div>
               </div>
           </li>
           <li class="py-3 sm:py-4">
               <div class="flex items-center">
                   <div class="flex-shrink-0">
                       <img class="w-8 h-8 rounded-full" src="~/assets/css/ewenet.jpg" alt="Michael image">
                   </div>
                   <div class="flex-1 min-w-0 ms-4">
                       <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Michael Gough
                       </p>
                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                           email@windster.com
                       </p>
                   </div>
                   <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       $67
                   </div>
               </div>
           </li>
           <li class="py-3 sm:py-4">
               <div class="flex items-center ">
                   <div class="flex-shrink-0">
                       <img class="w-8 h-8 rounded-full" src="~/assets/css/ewenet.jpg" alt="Lana image">
                   </div>
                   <div class="flex-1 min-w-0 ms-4">
                       <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Lana Byrd
                       </p>
                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                           email@windster.com
                       </p>
                   </div>
                   <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       $367
                   </div>
               </div>
           </li>
           <li class="pt-3 pb-0 sm:pt-4">
               <div class="flex items-center ">
                   <div class="flex-shrink-0">
                       <img class="w-8 h-8 rounded-full" src="~/assets/css/ewenet.jpg" alt="Thomas image">
                   </div>
                   <div class="flex-1 min-w-0 ms-4">
                       <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                           Thomes Lean
                       </p>
                       <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                           email@windster.com
                       </p>
                   </div>
                   <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                       $2367
                   </div>
               </div>
           </li>
       </ul>
  </div>
</div>
</div>

</section>
   
</div>
  
</template>