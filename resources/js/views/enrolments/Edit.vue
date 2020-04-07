<template>
  <b-row align-h="center">
    <b-col cols="8">
      <h3 v-if="!loggedIn">You are not logged in!!</h3>
      <b-card
        v-else
        title="Edit Course"
        tag="article"
      >

        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Date:" label-for="input-1">
              <b-form-input id="input-1" v-model="course.date" type="text" required placeholder="Enter date"></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-2" label="Time:" label-for="input-2">
             <b-form-input id="input-2" v-model="course.time" type="text" required  placeholder="Enter time"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="status:" label-for="input-3">
            <b-form-input id="input-3" v-model="course.status" type="text" required  placeholder="Enter status"></b-form-input>
       </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        course: {},
        show: true,
        loggedIn: false
      }
    },
    created() {
      // console.log(localStorage.getItem('token'));
      if (localStorage.getItem('token')) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }

      let app = this;
      let token = localStorage.getItem('token');
      axios.get(`/api/enrolments/${app.$route.params.id}`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(function (response) {
        app.course = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        let app = this;
        let token = localStorage.getItem('token');
        axios.put(`/api/enrolments/${app.$route.params.id}`, {
            title: app.course.title,
            code: app.course.code,
            description: app.course.description,
            points: app.course.points,
            level: app.course.level,
        },
        {
          headers: { Authorization: "Bearer " + token }
        })
        .then(function (response) {
          app.$router.push('/enrolments');
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>
