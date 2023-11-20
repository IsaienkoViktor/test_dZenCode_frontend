import { useEffect, useState } from "react";
import { CommentsTable } from "../../components/CommentsTable/CommentsTable";
import { getAllComments } from "../../services/api/api";
import { Container } from "../../shared/components/Container/Container";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [createdAt, setCreatedAt] = useState("asc");
  const [comments, setComments] = useState([]);

  const setters = {
    userName: setUserName,
    email: setEmail,
    createdAt: setCreatedAt,
  };
  const values = { userName, email, createdAt };

  useEffect(() => {
    getAllComments({
      page,
      limit: 25,
      userName,
      email,
      createdAt,
    })
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, [createdAt, email, page, userName]);

  return (
    <Container>
      <CommentsTable data={comments} values={values} setters={setters} />
    </Container>
  );
};

export default HomePage;
