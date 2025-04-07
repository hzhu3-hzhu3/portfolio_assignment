# Stage 1: Build the production files
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Stage 2: Deploy with Nginx
FROM nginx:stable-alpine
# Create the working directory as required
RUN mkdir -p /zhu_haiqiao_final_site
# Copy production build files to the working directory
COPY --from=build /app/build /zhu_haiqiao_final_site
# Replace the default Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 (will be mapped to host port 5575)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
