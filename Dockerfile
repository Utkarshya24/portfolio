# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependency files and install packages
COPY package.json package-lock.json* ./
RUN npm install

# Copy all project files and build the Next.js app
COPY . .
RUN npm run build

# Stage 2: Setup the production environments
FROM node:18-alpine AS runner
WORKDIR /app


# Copy essential files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app will run on (default is 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
