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

## 2. Setup Continuous Deployment (CI/CD)

You can set up Cloud Build to automatically deploy your application when you push to GitHub.

### A. Enable APIs

Enable the following APIs in your Google Cloud Project:
- Cloud Build API
- Cloud Run API
- Container Registry API (or Artifact Registry)

### B. Connect GitHub Repository

1.  Go to the [Cloud Build Triggers page](https://console.cloud.google.com/cloud-build/triggers).
2.  Click **Create Trigger**.
3.  **Source**: Select your GitHub repository.
4.  **Configuration**:
    *   **Name**: `deploy-on-push`
    *   **Event**: Push to a branch.
    *   **Branch**: `^master$` (or `main`)
    *   **Configuration**: Cloud Build configuration file (yaml or json).
    *   **Location**: `cloudbuild.yaml` (default).
5.  **Advanced configuration** -> **Substitution variables**:
    *   Add a variable `_INSTANCE_CONNECTION_NAME` with the value of your Cloud SQL Connection Name (e.g., `my-project:us-east1:my-instance`).
6.  Click **Create**.

### C. First Deployment

On your first push, Cloud Build will build and deploy the container. However, the service might fail to start if the Environment Variables (`DATABASE_URL`, `AUTH_SECRET`) are not set yet.

You need to set them on the Cloud Run service **once** (they persist across deployments).

1.  After the first failed deployment (or before), go to [Cloud Run](https://console.cloud.google.com/run).
2.  Select the service `ejwilliams-app`.
3.  Click **Edit & Deploy New Revision**.
4.  **Variables & Secrets**:
    *   `AUTH_SECRET`: `your_generated_secret`
    *   `DATABASE_URL`: `postgresql://USER:PASSWORD@localhost/DB_NAME?host=/cloudsql/PROJECT_ID:REGION:INSTANCE_ID`
5.  **Connections**:
    *   Ensure the Cloud SQL connection is added.
6.  Click **Deploy**.

Future pushes to GitHub will now automatically update the application.

## 3. Run Database Migrations

Since Cloud Run is stateless, you can't run migrations interactively easily.

**Run migrations from your local machine (recommended):**

1.  Install `Cloud SQL Auth Proxy` on your local machine.
2.  Start the proxy:
    ```bash
    ./cloud_sql_proxy -instances=PROJECT_ID:REGION:INSTANCE_ID=tcp:5432
    ```
3.  In a separate terminal, run Prisma migration:
    ```bash
    DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DB_NAME" npx prisma migrate deploy
    ```

## 4. Access the Application

Once deployed, Cloud Run will provide a URL (e.g., `https://ejwilliams-app-xyz.a.run.app`).
