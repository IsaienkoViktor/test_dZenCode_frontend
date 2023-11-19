import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:3000/api/comment",
});

export const getAllComments = async () => {
  const data = await instance.get("/all");
  return data;
};

export const getCommentById = async (id) => {
  const data = await instance.get(`/${id}`);
  return data;
};

export const addComment = async (comment) => {
  const data = await instance.post("/", comment);
  return data;
};

export const addReply = async ({ reply, commentId, replyToId }) => {
  const data = await instance.get(`/reply/${commentId}`, reply, {
    params: { replyToId },
  });
  return data;
};
