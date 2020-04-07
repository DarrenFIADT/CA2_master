<!--
@Date:   2020-03-26T17:40:30+00:00
@Last modified time: 2020-04-07T23:43:35+01:00
-->



<template>
  <div>
    <MyNavbar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
<script>
import MyNavbar from './components/MyNavbar'

export default {
  name: 'app',
  components: {
    MyNavbar
  },

  methods:{
    deleteCourse(id) {
     let app = this;
     let token = localStorage.getItem('token');
     axios.delete(`/api/courses/${id}`, { //delete the course with this id in the route
       headers: { Authorization: "Bearer " + token}
     })
     .then(function (response){
       console.log(response.data);
       app.getCourses(); //get all courses
     });
   },
   deleteLecturer(id) {
     let app = this;
     let token = localStorage.getItem('token');
     axios.delete(`/api/lecturers/${id}`, { //delete the course with this id in the route
       headers: { Authorization: "Bearer " + token}
     })
     .then(function (response){
       console.log(response.data);
       app.getLecturers(); //get all courses
     });
   },
   deleteEnrolment(id) {
     let app = this;
     let token = localStorage.getItem('token');
     axios.delete(`/api/enrolments/${id}`, { //delete the course with this id in the route
       headers: { Authorization: "Bearer " + token}
     })
     .then(function (response){
       console.log(response.data);
       app.getEnrolments(); //get all courses
     });
   }
 },




  data() {
    return {

    }
  }
}
</script>
<style>
</style>
