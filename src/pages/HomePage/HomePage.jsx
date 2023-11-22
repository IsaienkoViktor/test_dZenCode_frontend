import { useEffect, useState } from "react";
import { CommentsTable } from "../../components/CommentsTable/CommentsTable";
import { getAllComments } from "../../services/api/api";
import { Container } from "../../shared/components/Container/Container";
import { Button } from "../../shared/components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { Form } from "../../components/Form/Form";
import { PageWrapper } from "./Homepage.styled";
import Captcha from "../../components/Captcha/Captcha";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [createdAt, setCreatedAt] = useState("asc");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setters = {
    userName: setUserName,
    email: setEmail,
    createdAt: setCreatedAt,
  };
  const values = { userName, email, createdAt };

  const handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen((prev) => !prev);
  };

  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
    document.body.style.overflow = "auto";
  };

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
      <PageWrapper>
        <CommentsTable data={comments} values={values} setters={setters} />
        <Button
          text="Add your comment"
          type="button"
          onClick={handleModalOpen}
        />
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <Form handleModalClose={handleModalClose} />
            <Captcha />
          </Modal>
        )}
      </PageWrapper>
    </Container>
  );
};

export default HomePage;
