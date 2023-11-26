import { Field, Form } from "formik";
import styled, { css } from "styled-components";
import { IoMdCloudDone } from "react-icons/io";
import { AiOutlineUpload } from "react-icons/ai";
import { RiFileUploadFill } from "react-icons/ri";
import { RiImageAddFill } from "react-icons/ri";

export const FormStyled = styled(Form)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(10)};
`;

export const FieldStyled = styled(Field)`
  display: block;

  padding: 12px 16px;
  width: 100%;

  resize: none;

  outline: none;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radii.xs};

  &.error {
    border-color: ${({ theme }) => theme.colors.red};
  }

  &.success {
    border-color: ${({ theme }) => theme.colors.green};
  }
  ${({ $variant }) =>
    $variant === "textarea" &&
    css`
      height: 100px;
    `};
  /* ${({ $variant }) =>
    $variant === "hidden" &&
    css`
      display: none;
    `}; */
`;

export const StyledDoneIcon = styled(IoMdCloudDone)`
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  transition: ${({ theme }) => theme.transitions.regular};
  transition-duration: 2s;
  fill: ${({ theme }) => theme.colors.green};
`;

export const StyledUploadImg = styled(RiImageAddFill)`
  width: 20px;
  height: 20px;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};

  padding: 12px 16px;
  width: 100%;

  resize: none;

  outline: none;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radii.xs};
`;

export const StyledUploadTxt = styled(RiFileUploadFill)`
  width: 20px;
  height: 20px;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledPreviewWrapper = styled.div`
  /* display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)}; */

  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(4)};

  border-radius: ${({ theme }) => theme.radii.xs};
  border: ${({ theme }) => theme.borders.medium};
  border-color: ${({ theme }) => theme.colors.grey};
`;

export const StyledPreviewTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;

export const StyledPreviewText = styled.p``;
