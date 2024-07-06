# /frontend/Dockerfile

# Use the official Node image from the Docker Hub for x86_64 architecture
FROM --platform=linux/amd64 node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install type definitions and modules for TypeScript
RUN npm install --save-dev @types/node
RUN npm install dotenv

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
