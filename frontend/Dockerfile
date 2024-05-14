FROM node:21

# Set the working directory to /app
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

# Define environment variable
ENV API_URL="http://localhost:8080/"

CMD ["npm", "run", "start"]