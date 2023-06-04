# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the application
RUN npm run build

# Expose the port on which the React app will run
EXPOSE 3000

# Set the command to run the application
CMD ["npm", "start"]
