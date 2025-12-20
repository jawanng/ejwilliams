const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const passwordRaw = process.env.ADMIN_PASSWORD;
    if (!passwordRaw) {
        console.error("Error: ADMIN_PASSWORD environment variable is missing.");
        process.exit(1);
    }
    const password = await bcrypt.hash(passwordRaw, 10);

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@lodge141.com';

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: 'Admin User',
            password,
            role: 'ADMIN',
        },
    });

    const member = await prisma.user.upsert({
        where: { email: 'member@lodge141.com' },
        update: {},
        create: {
            email: 'member@lodge141.com',
            name: 'Brother John Doe',
            password,
            role: 'MEMBER',
        },
    });

    console.log({ admin, member });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
