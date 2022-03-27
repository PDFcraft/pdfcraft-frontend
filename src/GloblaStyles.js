import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
  }
  
  body {
    font-family: 'Press Start 2P', cursive;
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

.processed-icon{
  width:100px;
}

.home-background {
  width: 100%;
  height: 100vh;
  background-color:#9B9B9B;
  border: 5px solid #212126;
  display: grid;
  grid-template-rows: 1fr 15fr;
  position: relative;
}

.top-bar{
  background-color:#D8D9D7;
  border-bottom: 5px solid #212126;
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.title{
  width:90%;
  height:25px;
}

.dots{
  display: flex;
  width: 6%;
  height: 25px;
}

.dot{
  width:25px;
  heigth:25px;
  border-radius:50%;
  background-color:#F5F5F5;
  border: 4px solid #212126;
}

.wrap{
  width:45%;
  height:50vh;
  background-color:#D8D9D7;
  border: 5px solid #212126;
  position: absolute;
  top:27%;
  bottom:0;
  left:0;
  right:0;
  display:grid;
  grid-template-rows: 1fr 2fr;
}

.grid1{
  background-color:#212126;
  width:100%;
}

.grid2{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

`;

export default GlobalStyle;