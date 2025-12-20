/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');

console.log("🚀 Starting deployment orchestration...");

// 1. Database Push (Migration)
console.log("\n📦 Running Prisma DB Push...");
try {
    execSync('npx prisma@5.22.0 db push --accept-data-loss --skip-generate', {
        stdio: 'inherit',
        env: process.env
    });
    console.log("✅ Database schema synced.");
} catch {
    console.error("❌ DB Push failed.");
    process.exit(1);
}

// 2. Database Seeding
console.log("\n🌱 Running Database Seed...");
try {
    console.log("   Installing bcryptjs...");
    execSync('npm install bcryptjs --no-save', { stdio: 'ignore' });

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
