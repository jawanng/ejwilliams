/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');

console.log("🚀 Starting deployment orchestration...");

// 1. Database Migration
console.log("\n📦 Running Prisma Migrate Deploy...");
try {
    execSync('npx prisma migrate deploy', {
        stdio: 'inherit',
        env: process.env
    });
    console.log("✅ Database migrations applied.");
} catch {
    console.error("❌ Migration failed.");
    process.exit(1);
}

// 2. Database Seeding
console.log("\n🌱 Running Database Seed...");
try {
    // bcryptjs is already installed in the image via package.json
    // execSync('npm install bcryptjs --no-save', { stdio: 'ignore' });

    execSync('node prisma/seed.js', {
        stdio: 'inherit',
        env: process.env
    });
    console.log("✅ Database seeded successfully.");
} catch {
    console.error("❌ Seeding failed.");
    process.exit(1);
}

console.log("\n✨ Deployment finished successfully.");
