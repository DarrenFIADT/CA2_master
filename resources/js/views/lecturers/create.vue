<!--
@Date:   2020-04-03T19:48:45+01:00
@Last modified time: 2020-04-07T21:25:11+01:00
-->



<template>
  <b-row>
    <b-col cols="8">

      <b-card title="Add Lecturer" tag="article">
        <b-form @submit="onSubmit">

          <b-col cols="12">
            <b-form-group id="input-group-1" label="Name:" label-for="i ">
            <b-form-input id="input-1" type="text" required placeholder="Enter name" v-model="form.name">
            </b-form-input>
            </b-form-group>

          </b-col>

          <b-col cols="12">
            <b-form-group id="input-group-2" "label="Address:" "label-for="input-2">
            <b-form-input id="input-2" "type="text" "required "placeholder="Enter Address" "v-model="form.address">
            </b-form-input>
            </b-form-group>

          </b-col>

          <b-col cols="12">
            <b-form-group id="input-group-3" "label="Email:" "label-for="input-3">
            <b-form-input id="input-3" "type="text" "required "placeholder="Enter Email" "v-model="form.email">
            </b-form-input>
            </b-form-group>

          </b-col>

          <b-col cols="12">
            <b-form-group id="input-group-4" "label="Phone:" "label-for="input-4">
            <b-form-input id="input-4" "type="text" "required "placeholder="Enter Phone" "v-model="form.phone">
            </b-form-input>
            </b-form-group>

          </b-col>









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
      form: {
        name: '',
        address: '',
        email: '',
        phone: ''
      },
      loggedIn: false,
      errors: []
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
      this.$router.push('/');
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      axios.post('/api/lecturers', {
        name: app.form.name,
        address: app.form.address,
        email: app.form.email,
        phone: app.form.phone
      }, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        app.$router.push('/lecturers');
      })
      .catch(function (error) {
        console.log(error.response.data);

        app.errors = error.response.data.errors
      });

    }
  }
}
</script>
