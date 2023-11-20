import PropTypes from "prop-types";
import { formatDate } from "../../helpers/formatDate";

export const CommentSection = ({ data }) => {
  console.log(data);
  return (
    <section>
      {data && (
        <div>
          <div>
            <h3>{data.userName}</h3>
            <p>{formatDate(data.createdAt)}</p>
          </div>
          <p>{data.text}</p>
        </div>
      )}
    </section>
  );
};

CommentSection.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    replies: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
};
