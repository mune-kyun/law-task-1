FROM node:18

WORKDIR /app

ENV DATABASE_URL postgresql://postgres:postgres@postgres:5432/law_tugas1?schema=public

# Copies everything
COPY package*.json ./
COPY prisma ./prisma/
COPY ./src ./src

# Installs all packages
RUN npm install

RUN npx prisma generate

EXPOSE 3000

# Runs the dev npm script to build & start the server
CMD npm run dev