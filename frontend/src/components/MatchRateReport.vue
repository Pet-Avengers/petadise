<template>
  <div class="container">
    <div class="header">Match Rate Report</div>
    <div class="main">
      <div class="tips-block">
        <p>{{description_line1}}</p>
        <p>{{description_line2}}</p>
      </div>
      <el-divider class="divider"/>
      <div class="info-block" v-for="(_, petName) in report">
        <div class="more-info-out">
          <div class="more-info-in">
            <i class="more-info-icon el-icon-document" @click="petInfoButton(petName)"></i>
            <p class="more-info-text">More Info</p>
            <!--<el-button type="primary" size="small">More Info</el-button>-->
          </div>
        </div>
        <div class="picture-out">
          <div class="picture-in"></div>
        </div>
        <div class="pet-name">
          <p class="pet-name-text">{{petName}}</p>
        </div>
        <div class="score">
          <el-rate
            v-model="report[petName]"
            disabled
            show-score
            text-color="#a43f49" 
          >
          </el-rate>
        </div>
      </div>
    </div>
    <!--<div class="footer">-->
      <!--<div class="button-block">-->
        <!--<i class="backButton el-icon-back" @click="backButton()"></i>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'match-rate-report',
  data () {
    return {
      description_line1: 'The match rate is calculated based on your timely response to pets\' needs, the food/toys/walking places you choose, and your active interaction times with pets. The idea is to imitate your living habits, behaviour patterns and pets\' daily routines.',
      description_line2: 'The higher the rate is, the more likely the pet is to be your best partner.',
      // report: this.$route.params.report,
      report: {'Frankie': 4, 'Mikky': 3.8, 'lsl': 2, 'sdfs': 3},
    }
  },
  methods: {
    petInfoButton: function(petName) {
      this.$router.replace({name: 'PetInfo', params: {petName: petName, report: this.report}})
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
  .tips-block {
    /*border: 1px solid;*/
    color: #3B5257; 
    display: inline-block;
    width: 95%;
    height: auto;
    text-align: left;
  }
  .info-block {
    /*border: 1px solid;*/
    height: 65px;
    margin-left: 10px;
    margin-right: 10px;
    /*display: flex;*/
  }
  .picture-out {
    height: 65px;
    width: 80px;
    float: left;
    /*border: 1px solid;*/
    /*flex: 1;*/
  }
  .picture-in {
    height: 65px;
    top: 10px;
    width: 65px;
    border-radius: 50%;
    /*border: 1px solid;*/
    background: url('../assets/dog-food-image-example.jpg') no-repeat center;

  }
  .pet-name {
    /*border: 1px solid;*/
    margin-top: 25px;
    text-align: left;
    /*width: 50%;*/
  }
  .pet-name-text {
    color:#4f2024;
  }
  .score {
    /*border: 1px solid;*/
    height: 30px;
    margin-right: 30px;
    text-align: left;
    /*width: 50%;*/
  }
  .more-info-out {
    height: 80px;
    width: 90px;
    float: right;
    /*border: 1px solid;*/
    display: flex;
  }
  .more-info-in {
    /*margin-top: 20px;*/
    /*height: 40px;*/
    flex: 1;
    /*border: 1px solid;*/
  }
  .more-info-text {
    margin: 0px;
    color: #a43f49;
  }
  
  .more-info-icon {
    font-size: 30px;
  }

    .el-icon-document {
    color: #a43f49
  }

  /*.button-block {*/
    /*border: 1px solid;*/
    /*!*margin-top: 30px;*!*/
    /*font-size: 40px;*/
    /*!*line-height:100px;*!*/
  /*}*/
  /*.backButton {*/
    /*border: 1px solid;*/
    /*color: white;*/
    /*border-radius: 50%;*/
  /*}*/
</style>
