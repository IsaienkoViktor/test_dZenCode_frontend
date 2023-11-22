import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-dzencode.onrender.com/api",
});

export const getAllComments = async ({
  page,
  limit,
  userName,
  email,
  createdAt,
}) => {
  const { data } = await instance.get("/comment/all", {
    params: { page, limit, userName, email, createdAt },
  });
  return data;
};

export const getCommentById = async (id) => {
  const { data } = await instance.get(`/comment/${id}`);
  return data;
};

export const addComment = async (comment) => {
  const data = await instance.post("/comment", comment);
  return data;
};

export const addReply = async ({ reply, commentId, replyToId }) => {
  const data = await instance.post(`/comment/reply/${commentId}`, reply, {
    params: { replyToId },
  });
  return data;
};

export const getCaptcha = async () => {
  const { data } = await instance.get("/captcha");
  return data;
};

export const validateCaptcha = async (captcha) => {
  const data = await instance.post(
    "/captcha/validate",
    { captcha },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};
