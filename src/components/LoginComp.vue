<template>
    <div>
        <LoadingOverlay :active="isLoading" />
        <AlertComp :error="error" :hideAlert="hideAlert" />
        <form class="bg bg-white mx-auto my-4 rounded border" style="max-width: 25rem;" @submit.prevent="loginUser">
            <h3 class="bg bg-secondary w-100 px-3 py-2 text text-white">Login</h3>
            <div class="p-3">

                <div class="mb-3" v-for="e in formDatas" :key="e.id">
                    <label :for="e.id" class="form-label">{{ e.label }}</label>
                    <input :type="e.type" class="form-control" v-model="formData[e.model]" :id="e.id"
                        :placeholder="e.placeholder">
                </div>
                <div class="mb-2">
                    <div class="form-text small"><a href="/sessions/forgot_password">forgot password</a></div>
                    <div class="form-text small"><router-link to="/register">Not a member | Register</router-link></div>
                </div>
                <div class="mb-2 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-text" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="my-2 btn btn-success">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import AlertComp from './AlertComp.vue';
import LoadingOverlay from './LoadingOverlay.vue';
import { login } from '../services/api';

export default {
    name: "LoginComp",
    data() {
        return {
            formDatas: [
                { label: "Email", type: "text", placeholder: "Enter your Email", isRequired: true, id: "email", model: "email" },
                { label: "Password", type: "password", placeholder: "Enter your Password", isRequired: true, id: "pass", model: "password" },
            ],
            formData: {
                email: "",
                password: ""
            },
            isLoading: false,
            error:false
        };
    },
    methods: {
        async loginUser() {
            this.isLoading = true;
            try {
                const data = await login(this.formData);
                if (!data) {
                    throw new Error("No user found");
                }
                console.log(data)
                localStorage.setItem("token", JSON.stringify({token: data.token}));
                localStorage.setItem("userType", JSON.stringify({"type": data._doc.userType}));
                localStorage.setItem("userData", JSON.stringify(data));
                this.userType=data._doc.userType
                this.$router.push(this.userType === 'student' ? '/usdash' : '/addashboard');
            }
            catch (e) {
                this.error =true;
                console.log("Error:", e.message);
            }
            this.isLoading = false;
        },
        hideAlert() {
          this.error = false;
        }
    },
    components: { LoadingOverlay, AlertComp }
}

</script>
