import PropTypes from "prop-types";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import {
  StyledAttachedFiles,
  StyledFile,
  StyledImg,
} from "./AttachedFiles.styled";
import { Modal } from "../Modal/Modal";

export const AttachedFiles = ({ image, file }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [textFile, setTextFile] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleImageModalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsImageModalOpen((prev) => !prev);
  };

  const handleImageModalClose = () => {
    document.body.style.overflow = "auto";
    setIsImageModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (image) {
      const buffer = Buffer.from(image.buffer.data);
      const imageData = `data:${image.mimetype};base64,${buffer.toString(
        "base64"
      )}`;
      setImageSrc(imageData);
    }

    if (file) {
      const textFileBuffer = Buffer.from(file.buffer.data);
      const textFileData = `data:${
        file.mimetype
      };base64,${textFileBuffer.toString("base64")}`;
      setTextFile(textFileData);
    }
  }, [image, file]);

  return (
    <>
      <StyledAttachedFiles>
        {imageSrc && (
          <StyledImg
            onClick={handleImageModalOpen}
            src={imageSrc}
            alt={image.originalname}
          />
        )}
        {textFile && (
          <StyledFile href={textFile} download>
            {file.originalname}
          </StyledFile>
        )}
      </StyledAttachedFiles>
      {isImageModalOpen && (
        <Modal onClose={handleImageModalClose} variant="image">
          <StyledImg src={imageSrc} alt={image.originalname} $variant="modal" />
        </Modal>
      )}
    </>
  );
};

AttachedFiles.propTypes = {
  file: PropTypes.shape({
    buffer: PropTypes.shape({
      data: PropTypes.array,
    }),
    mimetype: PropTypes.string,
    originalname: PropTypes.string,
  }),
  image: PropTypes.shape({
    buffer: PropTypes.shape({
      data: PropTypes.array,
    }),
    mimetype: PropTypes.string,
    originalname: PropTypes.string,
  }),
};
