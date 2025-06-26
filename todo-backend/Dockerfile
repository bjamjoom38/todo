# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files first
COPY package*.json ./

# Install dependencies properly
RUN npm install

# Copy the rest of the app
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start:prod"]
