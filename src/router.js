import Vue from 'vue'
import Router from 'vue-router'
import ResumesIndex from './views/resumes-index.vue'
import ResumeShow from './views/resume-show.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [  
    { path: '/resumes', name: 'home', component: ResumesIndex },
    { path: '/resumes/:id', name: 'resume-show', component: ResumeShow }
  ]
})
