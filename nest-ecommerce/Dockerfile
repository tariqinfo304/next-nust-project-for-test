# Use official Node.js image as base
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Build the NestJS app
RUN npm run build

# Run the NestJS app
CMD ["npm", "run", "start:prod"]
