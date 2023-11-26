import { useEffect, useState } from "react";
import { CommentsTable } from "../../components/CommentsTable/CommentsTable";
import { getAllComments } from "../../services/api/api";
import { Container } from "../../shared/components/Container/Container";
import { Button } from "../../shared/components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { Form } from "../../components/Form/Form";
import { PageWrapper } from "./Homepage.styled";
import { Pagination } from "../../components/Pagination/Pagination";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [createdAt, setCreatedAt] = useState("asc");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getAllComments({
      page,
      limit: 25,
      userName,
      email,
      createdAt,
    })
      .then((data) => {
        setComments(data.data);
        setTotal(data.total);
      })
      .catch((error) => console.log(error));
  }, [createdAt, email, page, userName]);

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
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Container>
      <PageWrapper>
        <Button
          text="Add your comment"
          type="button"
          onClick={handleModalOpen}
        />
        <CommentsTable data={comments} values={values} setters={setters} />
        <Pagination
          onPageChange={handlePageChange}
          totalItems={total}
          currentPage={page}
          perPage={25}
        />
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <Form handleModalClose={handleModalClose} />
          </Modal>
        )}
      </PageWrapper>
    </Container>
  );
};

export default HomePage;
