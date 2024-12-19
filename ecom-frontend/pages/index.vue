<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Reactive variables for username, password, and error message
const username = ref('')
const password = ref('')
const errorMessage = ref('')

// Router instance to navigate on successful login
const router = useRouter()

// Function to handle login
const handleLogin = async () => {
  // Reset the error message
  errorMessage.value = ''

  // Send a request to the server to authenticate the user
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })

    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.')
    }

    // Parse the JSON response and extract the token
    const data = await response.json()
    console.log(data)
    const token = data.access_token // Assuming the token is returned in the response

    // Store the token in localStorage or Vuex store
    localStorage.setItem('authToken', data.access_token)

    // Redirect to the home or dashboard page
    router.push('/item')

  } catch (error:any) {
    // Display the error message if login fails
    errorMessage.value = error?.message
  }
}
</script>

<template>
  <div class="login-page">
    <h1>Login</h1>

    <!-- Form to input username and password -->
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <!-- Show error message if login fails -->
      <div v-if="errorMessage" class="error-message">
        <p>{{ errorMessage }}</p>
      </div>

      <!-- Login button -->
      <button type="submit">Login</button>
    </form>

    <!-- Link to the registration page -->

  </div>
</template>

<!-- <style scoped>
.login-page {
  width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
}

input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

p {
  text-align: center;
  margin-top: 1rem;
}

a {
  color: #007bff;
}
</style> -->
