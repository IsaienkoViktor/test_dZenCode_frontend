import { Field, Form } from "formik";
import styled, { css } from "styled-components";

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
