import styled from "styled-components";
import { FiRefreshCw } from "react-icons/fi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export const StyledRefreshIcon = styled(FiRefreshCw)`
  width: 25px;
  height: 25px;
`;

export const StyledConfirmBtnIcon = styled(IoCheckmarkDoneCircleSharp)`
  width: 35px;
  height: 35px;
`;

export const StyledCaptchaInput = styled.input`
  display: block;

  padding: 12px 16px;
  width: 30%;

  resize: none;

  outline: none;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radii.xs};
`;

export const StyledCaptchaForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};

  margin-top: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const StyledCaptchaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCaptchaBtn = styled.button``;
