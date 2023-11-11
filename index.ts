import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "example2@example.com",
      name: "Example User2",
    },
  });

  const userId = newUser.id;

  const newPost = await prisma.post.create({
    data: {
      title: "New Post Title",
      content: "Content of the post",
      published: false,
      authorId: userId,
    },
  });

  const newProfile = await prisma.profile.create({
    data: {
      bio: "Short bio of the user",
      userId: userId,
    },
  });

  const updatedUser = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Updated Name",
    },
  });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  console.log(" ");
  console.log("๊User created:", newUser);
  console.log(" ");
  console.log("User updated:", updatedUser);
  console.log(" ");
  console.log("Post created:", newPost);
  console.log(" ");
  console.log("Profile created:", newProfile);
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
