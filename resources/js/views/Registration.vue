<!--
@Date:   2020-04-05T19:22:06+01:00
@Last modified time: 2020-04-08T00:04:48+01:00
-->



<template>
  <div>
    <h3>Registration Form</h3>
    <h3 v-if="loggedIn">You are logged in!!!</h3>
    <b-form v-else @submit="onSubmit" >


      <b-form-group
        id="input-group-1"
        label="Name"
        label-for="input-1"
      >
      <b-form-input
        id="input-1"
        type="name"
        required
        placeholder="Enter name"
        v-model="form.name"
      >
      </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      >
      <b-form-input
        id="input-2"
        type="email"
        required
        placeholder="Enter email"
        v-model="form.email"
      >
      </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Password:"
        label-for="input-3"
      >
      <b-form-input
        id="input-3"
        type="password"
        required
        placeholder="Enter password"
        v-model="form.password"
      >
      </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {

  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      loggedIn: false
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  },
  methods: {

    onSubmit(evt) {
      evt.preventDefault();

      let app = this;

      axios.post('/api/register', {
        name: app.form.name,
        email: app.form.email,
        password: app.form.password
      })
      .then(function(response) {
        localStorage.setItem('token', response.data.token)
        app.loggedIn = true;
      })
      .catch(function(error) {
        console.log(error.response.data);
      });
    }
  }
}
</script>
<style>
</style>
