# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy the rest of the application
COPY . .

# Expose port (optional)
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
