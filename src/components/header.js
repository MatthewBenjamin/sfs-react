import styled from "styled-components";
import { LOADING_STATUS, ERROR_STATUS } from "../constants";

const ERROR_COPY = "Error fetching data. Try refreshing the page.";
const LOADING_COPY = "Loading...";
const SUCCESS_COPY = "Strategic FS";

const StyledH1 = styled.h1`
  color: ${({ hasFetchError }) => (hasFetchError ? "red" : "#444")};
  text-align: center;
`;

const determineHeaderCopy = (fetchStatus) => {
  switch (fetchStatus) {
    case ERROR_STATUS:
      return ERROR_COPY;
    case LOADING_STATUS:
      return LOADING_COPY;
    default:
      return SUCCESS_COPY;
  }
};

const Header = ({ fetchStatus }) => {
  const headerCopy = determineHeaderCopy(fetchStatus);

  return (
    <header>
      <StyledH1 hasFetchError={fetchStatus === ERROR_STATUS}>
        {headerCopy}
      </StyledH1>
    </header>
  );
};

export default Header;
