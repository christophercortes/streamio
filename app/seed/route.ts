// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { user } from '@/app/lib/placeholder-data';

// const client = await db.connect();

// async function seedUsers() {
//     await client.sql`
//     CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
//     `;
//     await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email TEXT NOT NULL UNIQUE,
//     phone VARCHAR (255) NOT NULL,
//     address VARCHAR (255) NOT NULL,
//     password TEXT NOT NULL
//     );
//     `;
//     const insertedUsers = await Promise.all(
//         user.map(async (users) => {
//             const hashedPassword = await bcrypt.hash(users.password, 12);
//             return client.sql`
//             INSERT INTO users (id, name, email, phone, address, password)
//             VALUES (${users.id}, ${users.name}, ${users.email}, ${users.phone}, ${users.address}, ${hashedPassword})
//             ON CONFLICT (id) DO NOTHING;
//             `;
//         }),
//     );

//     return insertedUsers;
// }

// export async function GET() {
//     try {
//         await client.sql`BEGIN`;
//         await seedUsers();
//         await client.sql`COMMIT`;

//         return Response.json({ message: "Database seeded successfully" });
//     } catch (error) {
//         await client.sql`ROLLBACK`;
//         return Response.json({ error }, { status: 500 });
//     }
// }