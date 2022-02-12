import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  .dropzone {
  text-align: center;
  padding: 20px;
  border: 3px dashed #eeeeee;
  background-color: #fafafa;
  color: #bdbdbd;

  margin-bottom: 20px;
}

.accept {
  border-color: #107c10 !important;
}

.reject {
  border-color: #d83b01 !important;
}

`;

export default GlobalStyle;