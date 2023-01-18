
<template>
  <div>
    <!------ Include the above in your HEAD tag ---------->


    <div>
      <LoadingOverlay :active="isLoading" />
      <AlertComp :error="error" :success="success" :hideAlert="hideAlert" />
      <form class="bg bg-white mx-auto my-4 rounded border " style="max-width: 30rem;" @submit.prevent="register">
        <h3 class="bg bg-secondary w-100 px-3 py-2 text text-white">Registration Form</h3>
        <div class="p-3">
          <div class="col-sm-12">
            <div class="form-group mb-2">
              <label> Name </label>
              <input type="text" v-model="formData.name" placeholder="Enter your name.." class="form-control">
            </div>

            <div class="form-group mb-2">
              <label>Email</label>
              <input type="email" v-model="formData.email" placeholder="Enter your email.." class="form-control">
            </div>

            <div class="form-group mb-2">
              <label>Password</label>
              <input type="password" v-model="formData.password" placeholder="Enter your password.."
                class="form-control">
            </div>


            <div class="form-group mb-2">
              <label>Roll Number</label>
              <input type="number" v-model="formData.rollNo" placeholder="Enter Your Roll No.." class="form-control">
            </div>

            <div class="form-group mb-2">
              <label>Hostel</label>
              <select v-model="formData.hostel" class="form-control">
                <option value="">-- Select hostel --</option>
                <option value="pdgh">pdgh</option>
                <option value="iggh">iggh</option>
                <option value="rgbh">rgbh</option>
                <option value="fgp">fgp</option>

              </select>
            </div>

            <div class="form-group mb-2">
              <label>Room No.</label>
              <input type="text" v-model="formData.room" placeholder="Enter your roomno.." class="form-control">
            </div>

            <div class="form-group mb-2">
              <label>Floor No</label>
              <select v-model="formData.floor" class="form-control">
                <option value="">-- Select Floor --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div class="my-2 mx-4">
            <div class="form-text small"><router-link to="/login">Already a member | Login</router-link></div>
          </div>
          <button type="submit" class="mx-4 my-2 btn btn-secondary">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AlertComp from '../components/AlertComp.vue';
import LoadingOverlay from '../components/LoadingOverlay.vue';
import { register } from '../services/api';
export default {
  name: "RegistrationComp",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        rollNo: 0,
        hostel: "",
        room: "",
        floor: "",
        
      },
      isLoading: false,
      error: false,
      success: false
    };
  },
  methods: {
    async register() {
      console.log(this.formData);
      this.hideAlert();
      this.isLoading = true;
      try {
        await register(this.formData);
        this.success = true;
        console.log("Registered");
        this.$router.push('/login');
      }
      catch (e) {
        this.error = true;
        console.log("Error:", e.message);
      }
      this.isLoading = false;
    },
    hideAlert() {
      this.error = false;
      this.success = false;
    }
  },
  components: { LoadingOverlay, AlertComp }
}
</script>

<style scoped>
/* Space out content a bit */
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-right: 15px;
  padding-left: 15px;
}

/* Custom page header */
.header {
  border-bottom: 1px solid #e5e5e5;
}

/* Make the masthead heading the same height as the navigation */
.header h3 {
  padding-bottom: 19px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
}

/* Custom page footer */
.footer {
  padding-top: 19px;
  color: #777;
  border-top: 1px solid #e5e5e5;
}

/* Customize container */
@media (min-width: 768px) {
  .container {
    max-width: 730px;
  }
}

.container-narrow>hr {
  margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
}

.jumbotron .btn {
  padding: 14px 24px;
  font-size: 21px;
}

/* Supporting marketing content */
.marketing {
  margin: 40px 0;
}

.marketing p+h4 {
  margin-top: 28px;
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {

  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-right: 0;
    padding-left: 0;
  }

  /* Space out the masthead */
  .header {
    margin-bottom: 30px;
  }

  /* Remove the bottom border on the jumbotron for visual effect */
  .jumbotron {
    border-bottom: 0;
  }
}
</style>
