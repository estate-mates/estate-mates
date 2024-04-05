import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          position: relative;
          box-sizing: border-box;
          word-break: keep-all;
          color: #2d2e38;
        }

        html,
        body,
        #root {
          height: 100%;
        }

        body {
          overflow-x: hidden;
        }
      `}
    />
  );
};

export default GlobalStyles;
