FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY my-app/package.json .
RUN npm install
# Copy app files
COPY my-app/. .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]
