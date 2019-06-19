<template>
  <div class="home">
    <div class="container mt-5">
      <h1>Software Developers</h1>
      <div class="row mt-5">
        <div  class="col-md-4 mb-5" v-for="student in students">
            <div class="card bg-secondary">
              <img v-if="student.photo !== null" v-bind:src="student.photo" class="card-img-top student-photos" v-bind:alt="student.name">
              <img class="card-img-top student-photos" v-else v-bind:src="no_photo" alt="No Photo :(">
              <div class="card-body">
                <router-link class="card-text student-names" v-bind:to="'/resumes/' + student.id"><h3> {{student.first_name}} {{student.last_name}} </h3></router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      students: [],
      // no_photo: '././assets/no_avatar.jpg',
      no_photo: 'https://forums.roku.com/styles/canvas/theme/images/no_avatar.jpg'
    };
  },
  created: function() {
    axios.get('https://young-brook-18580.herokuapp.com/api/students').then(response => {
      this.students = response.data;
      console.log(this.students);
      console.log(this.no_photo);
    });
  },
  methods: {}
};
</script>