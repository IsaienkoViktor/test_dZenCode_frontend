import { useEffect, useState } from "react";
import { CommentsTable } from "../../components/CommentsTable/CommentsTable";
import { getAllComments } from "../../services/api/api";
import { Container } from "../../shared/components/Container/Container";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState("desc");
  const [comments, setComments] = useState([]);

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
      <CommentsTable data={comments} />
    </Container>
  );
};

export default HomePage;
