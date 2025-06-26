# Step 1: Use Node base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./

# 🛠️ Install Ionic CLI globally
RUN npm install -g @ionic/cli

# Install project dependencies
RUN npm install

# Step 4: Copy the rest of the app code (expects build context to be todo-app, so src/ is at /app/src)
COPY . .

# Step 5: Expose dev port (5173 or 4200 depending on config)
EXPOSE 5173

# Step 6: Start Ionic dev server
CMD ["ionic", "serve", "--host=0.0.0.0", "--port=5173"]
