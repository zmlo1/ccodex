import { prisma } from "./client";

async function main() {
  // 创建用户
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "测试用户",
    },
  });
  console.log("创建的用户:", user);

  // 查询所有用户
  const allUsers = await prisma.user.findMany();
  console.log("所有用户:", allUsers);

  // 更新用户
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: "更新后的用户名" },
  });
  console.log("更新后的用户:", updatedUser);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
