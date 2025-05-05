// This is a placeholder for the database client
// In a real application, this would be a Prisma client or similar

export const prisma = {
  user: {
    findMany: async () => {
      return [
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
      ]
    },
  },
  course: {
    findMany: async () => {
      return [
        { id: 1, title: "Course 1", description: "Description 1" },
        { id: 2, title: "Course 2", description: "Description 2" },
      ]
    },
  },
  report: {
    findMany: async () => {
      return [
        { id: 1, name: "Report 1", type: "users", createdAt: new Date() },
        { id: 2, name: "Report 2", type: "courses", createdAt: new Date() },
      ]
    },
  },
}
