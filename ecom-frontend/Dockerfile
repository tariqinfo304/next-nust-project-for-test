# Use official Node.js image as base
FROM node:22

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the Nuxt.js application files
COPY . .

# Expose the port for Nuxt.js
EXPOSE 3001

# Build the Nuxt.js app
RUN npm run build

# Run Nuxt.js in production mode
CMD ["npm", "run", "preview"]
