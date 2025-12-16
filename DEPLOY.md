# Deployment Guide for Google Cloud Platform (GCP)

This guide explains how to deploy the E. Jerry Williams membership site to Google Cloud Platform using Cloud SQL (PostgreSQL) and Cloud Run.

## Prerequisites

1.  A Google Cloud Platform account.
2.  `gcloud` CLI installed and authenticated.
3.  A GCP project created.

## 1. Set up Google Cloud SQL (PostgreSQL)

1.  Go to the [Cloud SQL Instances page](https://console.cloud.google.com/sql/instances).
2.  Click **Create Instance**.
3.  Choose **PostgreSQL**.
4.  Configure your instance (ID, password, region).
    *   **Region**: Choose a region close to your users (e.g., `us-east1`).
    *   **Zonal availability**: Single zone is cheaper for dev/test.
5.  Click **Create Instance**.
6.  Once created, create a database:
    *   Go to the **Databases** tab.
    *   Click **Create Database** (e.g., `ejwilliams_db`).
7.  Create a user (optional, or use `postgres`):
    *   Go to the **Users** tab.
    *   Click **Add User Account**.

## 2. Prepare the Application for Deployment

The application is already containerized using `Dockerfile`.

## 3. Deploy to Cloud Run

We will build the container image and deploy it to Cloud Run.

### Option A: Build and Deploy from Source (Recommended)

Run the following command in the root of your project:

```bash
gcloud run deploy ejwilliams-app \
  --source . \
  --platform managed \
  --region us-east1 \
  --allow-unauthenticated \
  --set-env-vars="AUTH_SECRET=your_generated_secret_here" \
  --add-cloudsql-instances=PROJECT_ID:REGION:INSTANCE_ID
```

*   Replace `PROJECT_ID:REGION:INSTANCE_ID` with your Cloud SQL Connection Name (found on the Overview page of your SQL instance).
*   Replace `your_generated_secret_here` with a strong random string (e.g. generated via `openssl rand -base64 32`).

### Option B: Build Image then Deploy

1.  **Build the image:**

    ```bash
    gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/ejwilliams-app
    ```

2.  **Deploy:**

    ```bash
    gcloud run deploy ejwilliams-app \
      --image gcr.io/YOUR_PROJECT_ID/ejwilliams-app \
      --platform managed \
      --region us-east1 \
      --allow-unauthenticated \
      --set-env-vars="AUTH_SECRET=your_generated_secret_here" \
      --add-cloudsql-instances=PROJECT_ID:REGION:INSTANCE_ID
    ```

## 4. Configure Database Connection

Cloud Run needs to know how to connect to the database. When using `--add-cloudsql-instances`, Cloud Run creates a Unix socket at `/cloudsql/PROJECT_ID:REGION:INSTANCE_ID`.

However, Prisma needs a connection URL.

**Environment Variables:**

You need to set `DATABASE_URL` environment variable for the Cloud Run service.

1.  Go to [Cloud Run Console](https://console.cloud.google.com/run).
2.  Select your service (`ejwilliams-app`).
3.  Click **Edit & Deploy New Revision**.
4.  Go to the **Variables & Secrets** tab.
5.  Add `DATABASE_URL` environment variable:

    ```
    postgresql://USER:PASSWORD@localhost/DB_NAME?host=/cloudsql/PROJECT_ID:REGION:INSTANCE_ID
    ```

    *   Replace `USER`, `PASSWORD`, `DB_NAME` with your Cloud SQL details.
    *   Replace `PROJECT_ID:REGION:INSTANCE_ID` with the Connection Name.
    *   **Note**: The `host` query parameter is crucial for connecting via Unix socket in Cloud Run.

6.  Click **Deploy**.

## 5. Run Database Migrations

Since Cloud Run is stateless, you can't run migrations interactively easily.

**Option 1: Run migrations from your local machine (easiest)**

1.  Install `Cloud SQL Auth Proxy` on your local machine.
2.  Start the proxy:
    ```bash
    ./cloud_sql_proxy -instances=PROJECT_ID:REGION:INSTANCE_ID=tcp:5432
    ```
3.  In a separate terminal, run Prisma migration:
    ```bash
    DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DB_NAME" npx prisma migrate deploy
    ```

**Option 2: Cloud Build Job**

You can create a Cloud Build job to run migrations, but Option 1 is simpler for getting started.

## 6. Access the Application

Once deployed, Cloud Run will provide a URL (e.g., `https://ejwilliams-app-xyz.a.run.app`).

1.  Open the URL.
2.  Log in with the users you seeded (you might need to run a seed script via the local proxy method if the DB is empty).

## Seeding Production DB

To seed the production database:

1.  Connect via Cloud SQL Proxy (as in Step 5).
2.  Run:
    ```bash
    DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DB_NAME" npx prisma db seed
    ```
