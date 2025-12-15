const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash('password123', 10);

    const admin = await prisma.user.upsert({
        where: { email: 'admin@lodge141.com' },
        update: {},
        create: {
            email: 'admin@lodge141.com',
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
