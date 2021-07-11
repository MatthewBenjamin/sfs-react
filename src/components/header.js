import styled from "styled-components";

const ERROR_COPY = "Error fetching data. Try refreshing the page.";
const LOADING_COPY = "Loading...";
const SUCCESS_COPY = "Strategic FS";

const StyledH1 = styled.h1`
  /* TODO: global styles for text */
  color: ${({ hasFetchError }) => (hasFetchError ? "red" : "#444")};
  text-align: center;
`;

const determineHeaderCopy = ({ hasFetchError, hasFetched }) => {
  if (hasFetchError) {
    return ERROR_COPY;
  }

  if (!hasFetched) {
    return LOADING_COPY;
  }

  return SUCCESS_COPY;
};

const Header = (props) => {
  const { hasFetchError } = props;
  const headerCopy = determineHeaderCopy(props);

  return (
    <header>
      <StyledH1 hasFetchError={hasFetchError}>{headerCopy}</StyledH1>
    </header>
  );
};

export default Header;
