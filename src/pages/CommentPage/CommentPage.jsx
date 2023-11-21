import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../../services/api/api";
import { CommentSection } from "../../components/CommentSection/CommentSection";
import { Container } from "../../shared/components/Container/Container";
import { Loader } from "../../shared/components/Loader/Loader";

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
      {comment ? (
        <CommentSection data={comment} commentId={params?.id} />
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default CommentPage;
