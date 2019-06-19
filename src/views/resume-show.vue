<template>
  <div class="resume-show">
    <div class="container mt-5">

      <img v-if="student.photo !== null" class="student-photo" v-bind:src="student.photo" v-bind:alt="student.first_name + ' ' + student.last_name">
      <img v-else class="student-photo" src="https://forums.roku.com/styles/canvas/theme/images/no_avatar.jpg" v-bind:alt="student.first_name">
      <h1> {{student.first_name}} {{student.last_name}} </h1>
      <h5> {{student.email}} || {{student.phone_number}} </h5>
      <h5> 
        <a class="resume-links" v-bind:href="'http://' + student.github_url" target="_blank">GitHub</a> || 
        <a class="resume-links" v-bind:href="'http://' + student.linked_in_url" target="_blank">LinkedIn</a> 
      </h5>
      <h5> 
        <span v-if="student.twitter_handle !== null">
          <a class="resume-links" v-bind:href="'http://' + student.twitter_handle" target="_blank">Twitter</a> || 
        </span>  
        <span v-if="student.personal_blog !== null"> 
          <a class="resume-links" v-bind:href="'http://' + student.personal_blog" target="_blank">Blog</a> ||  
        </span> 
        <span v-if="student.website_url !== null"> 
          <a class="resume-links" v-bind:href="'http://' + student.website_url" target="_blank">Personal Website</a> 
        </span> 
      </h5>
      <p> {{student.short_bio}} </p>
          
      <div v-if="student.skills.length">
        <h3 class="resume-headers">Skills</h3>
        <div class="skills" v-for="skill in student.skills" v-if="skill !== student.skills[student.skills.length - 1]">
          <h5 class="skills">{{skill.skill_name}}, &nbsp;</h5>
        </div>
        <h5 class="skills">{{student.skills[student.skills.length - 1].skill_name}}</h5>   
      </div>

      <div v-if="student.experiences.length">
        <h3 class="resume-headers">Experience</h3>
        <div v-for="experience in student.experiences">
          <h5> {{experience.company_name}} | {{experience.start_date}} - {{experience.end_date}} </h5>
          <h5> {{experience.job_title}} </h5>
          <p> {{experience.details}} </p>
        </div>
      </div>


      <div v-if="student.educations.length">
        <h3 class="resume-headers">Education</h3>
        <div v-for="education in student.educations">
          <h5> {{education.schooling}} | {{education.start_date}} - {{education.end_date}} </h5>
          <span> <h6> {{education.degree}} </h6> </span>
          <p> {{education.details}} </p>
        </div>
      </div>

      <div v-if="student.capstones.length">
        <h3 class="resume-headers">Capstones</h3>
        <div v-for="capstone in student.capstones">
          <img class="capstone-photo" v-bind:src="capstone.screenshot" v-bind:alt="capstone.name">
          <a class="capstone-link" v-bind:href="capstone.url" target="_blank"><h5 class="mt-3"> {{capstone.name}} </h5></a>
          <p> {{capstone.description}} </p>
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
      student: {}
      };
  },
  created: function() {
    axios.get('https://young-brook-18580.herokuapp.com/api/students/' + this.$route.params.id).then(response => {
      this.student = response.data;
      console.log(this.student);
    });
  },
  methods: {}
};
</script>
