<!--
@Date:   2020-04-04T22:38:01+01:00
@Last modified time: 2020-04-07T23:44:58+01:00
-->
<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive>
        <b-head>
          <b-tr>
            <b-th>Date</b-th>
            <b-th>Time</b-th>
            <b-th>status</b-th>
            <b-th>Course ID</b-th>
            <b-th>Lecturer</b-th>

          </b-tr>
        </b-head>


        <b-body>
          <b-tr v-for="item in items" :key="item.id">
            <b-td>{{ item.date }}</b-td>
            <b-td>{{ item.time }}</b-td>
            <b-td>{{ item.status }}</b-td>
            <b-td>{{ item.course_id }}</b-td>
            <b-td>{{ item.lecturer_id }}</b-td>
            <b-td><router-link :to="`/enrolments/edit/${item.id}`">Edit</router-link></b-td>
            <b-td><button v-on:click="deleteEnrolment(item.id)">Delete</button></b-td>

          </b-tr>
        </b-body>
      </b-table-simple>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created(){
    let app = this;
    let token = localStorage.getItem('token');
    axios.get('/api/enrolments', {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.items = response.data.data;
    })
    .catch(function (error) {
       console.log(error);
    })
  },
  methods: {
    getEnrolments() {
      let app = this;
      let token = localStorage.getItem('token'); //get the user token
      axios.get('/api/enrolments', { //get the json data from this route
        headers: { Authorization: "Bearer " + token}
      })
      .then(function (response) {
         console.log(response.data); //display the data in the response
         app.enrolments = response.data.data;
      })
      .catch(function (error) {
         console.log(error);
      })
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
  }
  }
</script>
<style>
</style>
