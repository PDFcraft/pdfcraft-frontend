import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    border: none;
    text-decoration: none;
    color: #212126;
    font-family: 'Press Start 2P', cursive;
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

.home-body{
  width: 100%;
  height: 100vh;
  background-color: #9B9B9B;
  box-shadow: 0 0 0 3px #212126 inset; 
  position: relative;
}

.home-body .home-top{
  height: 48px;
  background-color : #D8D9D7;
  box-shadow: 0 0 0 3px #212126 inset; 
  display: flex;
  align-items: center;
}

.home-top-title {
  width:70%;
  margin-left: 20px;
}

.home-top-dotss {
  width:30%;
  margin-right: 20px;
}

.home-top-dots {
  width: 100px;
  display: flex;
  margin-right: 0;
}

.home-top-dots .home-top-dot {
  width: 25px;
  height: 25px;
  background-color: #F5F5F5;
  border: 2px solid #212126;
  border-radius: 50%;
}

.home-main{
  width: 750px;
  height: 480px;
  position: absolute;
  top: calc(50% - 240px);
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #D8D9D7;
  box-shadow: 0 0 0 3px #212126 inset; 
}

.home-main-top {
  height:130px;
  background-color: #212126;
  display:flex;
}

.home-main-top img {
  width: 220px;
}

.home-main-contents {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.home-main-contents .box{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
  height:120px;
}

.home-main-contents .box img {
  width:90px;
}

.wip-back{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(33, 33, 38, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1;
  display:flex;
  justify-content: center;
  align-items: center;
}

.wip-wrap{
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wip-wrap img{
  width: 120px;
}

.wip-wrap h1{
  color: #FFFFFF;
  font-size: 72px;
}

.wip-wrap button{
  width: 152px;
  height: 48px;
  background: #D8D9D7;
  border: 3px solid #212126;
  box-sizing: border-box;
  font-size: 24px;
}

.explain-back{
  width: 100%;
  height: 100vh;
  background-color: #212126;
  display: flex;
  justify-content: center;
  align-items: center;
}

.explain-wrap{
  width: 500px;
  height:500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.explain-wrap img {
  width: 320px;
}

.explain-wrap p {
  color: #9B9B9B;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
}

.explain-wrap button {
  width: 152px;
  height: 48px;
  background: #D8D9D7;
  border: 3px solid #212126;
  box-sizing: border-box;
  font-size: 24px;
}

.home-main-features{
  display: flex;
  flex-direction: column;
}

.features-btns {
  display: flex;
}

.features-btn {
  width: 252px;
  height: 70px;
  background: #9B9B9B;
  border: 3px solid #000000;
  box-sizing: border-box;
  color:white;
}

.home-main-wrap{
  width: 850px;
  display:flex;
  position: absolute;
  top: calc(50% - 240px);
  left: 0;
  bottom: 0;
  right: 0;
}

.home-main-2{
  width: 750px;
  height: 480px;
  background-color: #D8D9D7;
  box-shadow: 0 0 0 3px #212126 inset; 
}

.home-main-shortcuts{
  width:100px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.shortcuts-box {
  width: 75px;
  height: 75px;
  background-color: #D8D9D7;
  box-shadow: 0 0 0 3px #212126 inset; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-selected-1{
  background-color: #212126;
  width: 72px;
  height: 72px;
  position:absolute;
  top: 2px;
  left: 764px;
}

.box-selected-2{
  background-color: #212126;
  width: 72px;
  height: 72px;
  position:absolute;
  top: 83px;
  left: 764px;
}

.box-selected-3{
  background-color: #212126;
  width: 72px;
  height: 72px;
  position:absolute;
  top: 164px;
  left: 764px;
}

.box-selected-4{
  background-color: #212126;
  width: 72px;
  height: 72px;
  position:absolute;
  top: 245px;
  left: 764px;
}

.box-selected-5{
  background-color: #212126;
  width: 72px;
  height: 72px;
  position:absolute;
  top: 326px;
  left: 764px;
}

.box-selected-6{
  background-color: #212126;
  width: 72px;
  height: 72px;
  position:absolute;
  top: 407px;
  left: 764px;
}

.shortcuts-box img {
  width: 48px;
  z-index: 1;
}

`;

export default GlobalStyle;