<!--
@Date:   2020-04-04T22:38:01+01:00
@Last modified time: 2020-04-07T23:54:35+01:00
-->
<template>
  <b-row align-h="center">
    <b-col cols="12">

      <b-table-simple hover responsive>
        <b-head>
          <b-tr>
            <b-th>Name</b-th>
            <b-th>Address</b-th>
            <b-th>Email</b-th>
            <b-th>Phone Number</b-th>

          </b-tr>
        </b-head>
        <b-body>
          <b-tr v-for="item in items" :key="item.id">
            <b-td>{{ item.name }}</b-td>
              <b-td>{{ item.address }}</b-td>
                <b-td>{{ item.email }}</b-td>
                  <b-td>{{ item.phone }}</b-td>

            <b-td><router-link :to="`/lecturers/edit/${item.id}`">Edit</router-link></b-td>
            <b-td><button v-on:click="deleteLecturer(item.id)">Delete</button></b-td>

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
    axios.get('/api/lecturers', {
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
    getLecturers() {
      let app = this;
      let token = localStorage.getItem('token'); //get the user token
      axios.get('/api/lecturers', { //get the json data from this route
        headers: { Authorization: "Bearer " + token}
      })
      .then(function (response) {
         console.log(response.data); //display the data in the response
         app.lecturers = response.data.data;
      })
      .catch(function (error) {
         console.log(error);
      })
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
    }
  }
  }

</script>
<style>
</style>
