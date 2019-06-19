<template>
  <div v-bind:class="{darkmode: active, lightmode: on}" id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar">
        <router-link class="navbar-brand navbar-link" to="/resumes">Home</router-link>
          
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <h6 id="dark-light" class="navbar-brand navbar-link mt-2" v-on:click="isDarkMode()">Dark Mode</h6>
              </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      active: false,
      on: true
    };
  },
  methods: {
    isDarkMode() {
      if (this.active === true) {
        this.on = true;
        this.active = false;
        document.getElementById("dark-light").innerHTML = "Dark Mode";
      }
      else {
        this.on = false;
        this.active = true;
        document.getElementById("dark-light").innerHTML = "Light Mode";
      }
    }
  }
};
</script>
