import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../../services/api/api";
import { CommentSection } from "../../components/CommentSection/CommentSection";
import { Container } from "../../shared/components/Container/Container";

const CommentPage = () => {
  const [comment, setComment] = useState(null);
  const params = useParams();

  useEffect(() => {
    getCommentById(params?.id)
      .then((data) => setComment(data))
      .catch((error) => console.log(error));
  }, [params?.id]);

  return (
    <Container>
      <CommentSection data={comment} />
    </Container>
  );
};

export default CommentPage;
