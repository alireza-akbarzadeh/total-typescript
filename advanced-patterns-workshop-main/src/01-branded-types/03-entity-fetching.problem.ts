import { it } from "vitest";
import { Brand } from "../helpers/Brand";

//? Function parameter type annotation
// This annotation tells the function what type the parameter should be

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

interface User {
  id: UserId;
  name: string;
}

interface Post {
  id: PostId;
  title: string;
  content: string;
}

const db: { users: User[]; posts: Post[] } = {
  users: [
    {
      id: "1" as UserId,
      name: "Miles",
    },
  ],
  posts: [
    {
      id: "1" as PostId,
      title: "Hello world",
      content: "This is my first post",
    },
  ],
};
const getUserById = (id: UserId) => {
  return db.users.find((user) => user.id === id);
};

const getPostById = (id: PostId) => {
  return db.posts.find((post) => post.id === id);
};

it("Should only let you get a user by id with a user id", () => {
  const postId = "1" as PostId;

  getUserById(postId);
});

it("Should only let you get a post by id with a PostId", () => {
  const userId = "1" as UserId;

  getPostById(userId);
});
