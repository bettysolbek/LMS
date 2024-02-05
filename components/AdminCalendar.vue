<template>
    <v-card class="flex-grow-1 justify-center">
      <v-card-text class="">
        <FullCalendar :options="calendarOptions" />
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  
  const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay',
    },
    eventClick: handleEventClick,
    
  });
  
  async function handleEventClick(info) {
    await fetchLetterData(info.event.start.toISOString());
  }
  
  async function fetchLetterData(selectedDate) {
    try {
      const response = await fetch(`/api/letters?date=${selectedDate}`, {
        method: 'GET',
      });
      const data = await response.json();
      calendarOptions.value.events = data.letters;
    } catch (error) {
      console.error('Error fetching letter data:', error);
    }
  }
  
  onMounted(() => {
    fetchLetterData(); // Fetch data on component mount
  });
  </script>
  