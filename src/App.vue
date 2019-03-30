<template>
  <div id="app">
  <b-container fluid>
    <b-row>

      <b-col md="4">
        <b-row>
          <b-col md="12">
            <Left></Left>
          </b-col>

          <b-col md="12">
            <Login></Login>
          </b-col>
        </b-row>

      </b-col>
      <b-col md="8" class="pt-5">
        <b-row>
          <Right></Right>
        </b-row>
        <b-row class="pt-5">
          <QrCode></QrCode>
        </b-row>
      </b-col>
    </b-row>
  </b-container>

  </div>
</template>

<script>
import Left from "@/components/Left";
import Right from "@/components/Right";
import Login from "@/components/Login";
import QrCode from "@/components/QrCode";

export default {
  name: 'app',
  components: {
    QrCode,
    Login,
    Right,
    Left,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/bg10.png");
  background-size: cover;
  background-position: left bottom;
  height: 657px;

}
</style>
