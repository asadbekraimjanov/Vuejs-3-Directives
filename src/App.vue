<template>
  <div class="container p-1">
    <el-card>
      <h2 v-color:[typeColor]="myColor">Directives</h2>
      <el-divider></el-divider>
      <div class="form-control mb-4">
        <label class="m-1" for="inp">Action</label>
        <input type="text" id="inp">
      </div>

      <el-button v-type="type" @click="changeColors">Change color</el-button>
      <el-button @click="migal" class="migalka-btn">Migalka</el-button>
      <el-button type="info" @click="typeColor = typeColor == 'color' ? 'backgroundColor' : 'color'">Change type</el-button>
      <span style="margin-left: 20px">{{typeColor}}</span>
    </el-card>
  </div>
</template>

<script>
import colorDirective from "@/colorDirective";
import typeDirective from "@/typeDirective";

export default {
  data() {
    return {
      myColor: 'var(--el-color-primary)',
      type: 'el-button el-button--primary',
      default: true,
      typeColor: 'color'
    }
  },
  methods: {
    changeColors(){
      if (this.default){
        this.type = 'el-button el-button--danger'
        this.myColor = 'var(--el-color-danger)'
        this.default = false
      }
      else {
        this.type = 'el-button el-button--primary'
        this.myColor = 'var(--el-color-primary)'
        this.default = true
      }
    },
    migal(){
      setInterval(() => {
        setTimeout(() => {
          this.myColor = 'var(--el-color-success)'
        }, 500)
        setTimeout(() => {
          this.myColor = 'var(--el-color-warning)'
        }, 1500)
        setTimeout(() => {
          this.myColor = 'var(--el-color-danger)'
        }, 2500)
        setTimeout(() => {
          this.myColor = 'var(--el-color-primary)'
        }, 3500)
      }, 0)
    }
  },
  directives: {
    color: colorDirective,
    type: typeDirective
  }
}
</script>

<style>
.migalka-btn{
  background-image: linear-gradient(to right,var(--el-color-success),var(--el-color-warning), var(--el-color-primary), var(--el-color-danger));
  color: #ffffff !important;
}
</style>
