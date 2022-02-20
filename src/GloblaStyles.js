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

.drag-box {
  width:150px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.drag-box-text{
  width:120px;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
  word-break:break-all;
  font-size:14px;
}

.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.grid{
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width:90%;
}

.box{
  background-color:#cccccc;
  height: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: auto;
}

.box-icon{
  background-image: url("folder.svg");
}

.box-btn{
  width: 100px;
  height: 30px;
  border-radius: 25px 25px;
  cursor: pointer;
}
`;

export default GlobalStyle;