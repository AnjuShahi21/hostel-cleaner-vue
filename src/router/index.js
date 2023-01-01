import Router from'vue-router';
import adDash from '../components/adDash.vue';
import adComplain from'../components/adComplain.vue';
import adSuggest from'../components/adSuggest.vue';
import adStudRegis from'../components/adStudRegis.vue';
import adWorkerReg from'../components/adWorkerReg.vue';
import adAllot from'../components/adAllot.vue';
import userProfile from '../components/userProfile.vue';
import userRequest from '../components/userRequest.vue';
import userFeedback from '../components/userFeedback.vue';
import userDash from '../components/userDash.vue';
import LoginComp from '../components/LoginComp.vue';
import RegistrationComp from '../components/RegistrationComp.vue';

function checkaddash(to, from, next) {
    let loginStatus = JSON.parse(localStorage.getItem('token'));
    if(!loginStatus) {
        return next('/login');
    }
    next();
}
function notLogin(to, from, next) {
    let loginStatus = JSON.parse(localStorage.getItem('token'));

    // If loggedIn -> Go to Dashboard
    if(loginStatus) {
        return next('/dashboard');
    }
    next();
}
function Login(to, from, next){
    let loginStatus = JSON.parse(localStorage.getItem('token'));

    // If loggedIn -> Go to Dashboard
    if(loginStatus) {
        return next('/dashboard');
    }
    next();

}


const router= new Router({
    routes:[
        {
            name:'login',
            path:'/login',
            component:LoginComp,
            beforeEnter:Login



        },
        {
            name:'register',
            path:'/register',
            component:RegistrationComp,
            beforeEnter:notLogin

        },
        {
            
            name:'addashboard',
            path:'/addashboard',
            component:adDash,
            beforeEnter:checkaddash
        },
        {
            name:'adallot',
            path:'/adallot',
            component:adAllot
        },
        {
            name:'adcomplain',
            path:'/adcomplain',
            component:adComplain
        },
        {
            name:'adsuggest',
            path:'/adsuggest',
            component: adSuggest
        },
        {
            name:'adstudregis',
            path:'/adstudregis',
            component:adStudRegis
        },
        {
            name:'adworkreg',
            path:'/adworkreg',
            component:adWorkerReg
        },
        {
            name:'usprofile',
            path:'/usprofile',
            component:userProfile
        },
        {
            name:'usrequest',
            path:'/usrequest',
            component:userRequest
        },
        {
            name:'usfeedback',
            path:'/usfeedback',
            component:userFeedback
        },
        {
            name:'usdash',
            path:'/usdash',
            component:userDash
        }
        
    ]
});
export default router;



