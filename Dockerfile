# Use an official Node.js runtime as the base image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy the rest of the application code to the container
COPY . .

# Install project dependencies
RUN npm install


# Build the React application
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your app (typically npm start)
CMD ["npm", "start"]
