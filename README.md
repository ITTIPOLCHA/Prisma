# Prisma CLI Commands

This document provides a quick reference to the Prisma Command Line Interface (CLI) commands necessary for managing and interacting with your Prisma setup.

## Installation

# Install Prisma CLI
npm install @prisma/cli --save-dev

# Install Prisma Client
npm install @prisma/client

# Initializing and Managing Prisma
## Generate Prisma Client from your Prisma schema
npx prisma generate

## Create a new migration based on schema changes
npx prisma migrate dev --name your_migration_name

## Apply migrations to your database
npx prisma migrate deploy

## Launch Prisma Studio for database inspection and management
npx prisma studio

# Run
npx ts-node ./index.ts

## Prisma Client Capabilities

### 1. CRUD Operations
Prisma Client enables basic database operations: Create, Read, Update, Delete.

#### Create
- `create`: Create a new record in the database.
- `createMany`: Create multiple records in a single operation.

#### Read
- `findUnique`: Find a unique record by a unique key.
- `findFirst`: Find the first record that matches certain conditions.
- `findMany`: Find multiple records that match certain conditions.

#### Update
- `update`: Update a record identified by a unique key.
- `updateMany`: Update multiple records in a single operation.

#### Delete
- `delete`: Delete a record identified by a unique key.
- `deleteMany`: Delete multiple records in a single operation.

### 2. Managing Relations
Handle relations or links between tables:

- `connect`: Connect to an existing record.
- `disconnect`: Disconnect from a record.
- `create`: Create a new record along with a connection.
- `connectOrCreate`: Connect to or create a new record if it does not exist.

### 3. Fetching Related Records

- `include`: Fetch data from related tables.
- `select`: Select specific fields when fetching data.

### 4. Search and Sort Options

- `where`: Specify conditions for search queries.
- `orderBy`: Sort data based on specified conditions.

### 5. Transaction Management

- `transaction`: Manage multiple operations in a single transaction.

### 6. Raw Queries

- `queryRaw`: Execute raw SQL commands.
- `executeRaw`: Execute SQL commands that do not return data.

### 7. Advanced Features

- `aggregate`: Data aggregation operations, such as count, average, etc.
- `groupBy`: Group data based on specific criteria.
