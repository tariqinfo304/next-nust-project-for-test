

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

// Define a reactive variable to hold the item data
const item = ref<{ id: number; name: string; description: string; price: number } | null>(null)

// Bearer token (replace with your actual token)
const token = localStorage.getItem("authToken")
const itemId=localStorage.getItem("selectedItemId")
// Get the dynamic ID from the route params
const route = useRoute()

// Fetch the item data when the component is mounted
onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/item/${itemId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch item')
    }

    item.value = await response.json()
  } catch (error) {
    console.error('Error fetching item:', error)
    item.value = null
  }
})
</script>
<template>
  <div v-if="item">
    <h1>{{ item.name }}</h1>
    <p>{{ item.description }}</p>
    <p>Price: ${{ item.price }}</p>
  </div>
  <div v-else>
    <p>Item not found</p>
  </div>
</template>

