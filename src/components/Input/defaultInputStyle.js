const DEFAULT_STYLE = ({ theme }) => `
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

export default DEFAULT_STYLE
