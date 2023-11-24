import { Field, Form } from "formik";
import styled, { css } from "styled-components";
import { IoMdCloudDone } from "react-icons/io";

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
