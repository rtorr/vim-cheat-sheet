# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the entire application source (including postinstall.js)
COPY . .

# Install dependencies
RUN npm install --production

# Expose the application port
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
