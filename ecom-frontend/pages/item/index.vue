<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Define a reactive variable to hold the fetched items
const items = ref<Array<{ id: number; name: string }>>([])

// Bearer Token (typically, this token comes from the user authentication flow)
const token = localStorage.getItem("authToken")
// Fetch the items when the component is mounted (client-side)
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/items', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,  // If you need the token
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch items');
    }

    // Parse the JSON response
    items.value = await response.json()
  } catch (error) {
    console.error('Error fetching items:', error)
  }
})
const storeItemId = (id: number) => {
  localStorage.setItem('selectedItemId', String(id))  // Save the item id as a string
}
</script>

<template>
  <div>
    <h1>Item List</h1>

    <!-- Show loading state if items are not loaded yet -->
    <div v-if="items.length === 0">
      <p>Loading items...</p>
    </div>

    <!-- Show the list of items once they are loaded -->
    <ul v-else>
      <li v-for="item in items" :key="item.id" @click="storeItemId(item.id)">
        <NuxtLink :to="`/item-detail`">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
