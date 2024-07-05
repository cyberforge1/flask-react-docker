# Use the official Node image from the Docker Hub
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Set the command to start the server
CMD ["serve", "-s", "dist"]

# Expose port 3000
EXPOSE 3000
