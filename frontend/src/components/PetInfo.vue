<template>
  <div class="container">
    <div class="header">Pet Information</div>
    <div class="main">
      <div class="picture-out">
        <div class="picture-in"></div>
      </div>
      <div class="pet-name">
        <p>{{petName}}</p>
      </div>
      <div class="info">
        <p>{{description}}</p>
      </div>
      <div class="location">
      </div>
    </div>
    <div class="footer">
      <div class="button-block">
        <i class="backButton el-icon-back" @click="backButton()"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      petName: this.$route.params.petName,
      report: this.$route.params.report,
      description: ''
    }
  },
  methods: {
    backButton: function() {
      this.$router.replace({name: 'MatchRateReport', params: {report: this.report}})
    }
  },
  mounted () {
    this.axios.post('/pet-info/description', {petName: this.petName})
      .then(res => {
        this.description = res.data.description
      }).catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
  .picture-out {
    /*height: 150px;*/
    border: 1px solid;
  }
  .picture-in {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid;
    margin: 0 auto;
    background: url('../assets/dog-food-image-example.jpg') no-repeat center;

  }
  .pet-name {
    border: 1px solid;
  }
  .info {
    border: 1px solid;
  }
  .location {
    border: 1px solid;
    height: 400px;
    width: 100%;
    background: url('../assets/location.png') no-repeat center;
  }
  .button-block {
    border: 1px solid;
    font-size: 60px;
    /*line-height:100px;*/
  }
  .backButton {
    border: 1px solid;
    color: white;
    border-radius: 50%;
  }
  .footer {
    height: 100px;
  }
</style>
