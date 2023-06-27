# Use an official Node.js LTS version as the base image
FROM node:lts as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the entire project directory to the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy the built static files from the previous stage to the appropriate location in the container
COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy the .env file to the container
COPY .env /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start the nginx server when the container launches
CMD ["nginx", "-g", "daemon off;"]
