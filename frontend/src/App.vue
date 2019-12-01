<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .container {
    position: releative;
  }
  .header {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    font-family: Bradley Hand, cursive;
    background-color: #e6b8af;
    text-align: center;
    line-height: 60px;
    /*These for lines are to fix header in the top*/
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    /*border: 1px solid;*/
  }
  .main {
    background-color: white;
    color: #333;
    text-align: center;
    /*These for lines are to fix main in the middle*/
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 60px;
    /*border: 1px solid;*/
  }
  .footer {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    height:60px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .el-button {
    display: inline-block !important;
    padding: 12px 20px!important;
    background-color: #E6B8AF!important;
    color: #a43f49!important;
    font-size: 13px!important;
    font-weight: 800!important;
    letter-spacing: 0.5px!important;
    text-transform: uppercase!important;
    transition: all 0.5s!important;
    border-color:  #fff!important;
    border-radius: 20px !important;
  }

  /* .container {
    font-family: 'Lato', sans-serif;
  } */


  .container {
    font-family: Comic Sans MS, Comic Sans, cursive;
  }

  .el-message-box {
    font-family: Comic Sans MS, Comic Sans, cursive;
  }
  

  .h4 {
    font-size: 26px;
    font-weight: 700;
    color: #3B5257 !important; 
    letter-spacing: 0.25px;
  }

  .el-progress-bar__inner{
    background-color: #E6B8AF;
  }

  .el-tabs__item.is-active {
    color: #a43f49;
  }

  .el-tabs__item {
    color: #E6B8AF;
  }

  .el-message-box{
    margin: auto auto; 
    width: 300px;
  }

  p {
    margin: auto;
    padding: 3%;
    color: #3B5257; 
  }

</style>


  /*.footer {*/
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height:150px;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*!*border: 1px solid;*!*/
  /*}*/
</style>
