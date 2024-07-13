# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

ENV PORT 8080
# Expose the port your app runs on
EXPOSE 8080

# Command to run your app
CMD ["node", "index.js"]
