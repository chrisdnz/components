import { InputUnstyled } from '@mui/base';
import styled from 'styled-components';

export const Input = ({ ...props }) => {
  return (
    <InputUnstyled slots={{ input: StyledInput }} {...props} />
  );
};

const StyledInput = styled('input')(
  ({ theme }) => `
    padding: 12px;
    line-height: 1.5;
    border-radius: 12px;
    color: ${theme.colors.textBody};
    background: ${theme.colors.bgInput};
    border: 1px solid ${theme.colors.borderInput};

    &:hover {
      border-color: ${theme.colors.primary};
    }

    &:focus {
      border-color: ${theme.colors.primary};
      outline: 3px solid ${theme.colors.secondary};
    }
  `
);
