import Router from 'vue-router';
import adDash from '../components/adDash.vue';
import adComplain from '../components/adComplain.vue';
import adSuggest from '../components/adSuggest.vue';
import adStudRegis from '../components/adStudRegis.vue';
import adWorkerReg from '../components/adWorkerReg.vue';
import adAllot from '../components/adAllot.vue';
import userProfile from '../components/userProfile.vue';
import userRequest from '../components/userRequest.vue';
import userFeedback from '../components/userFeedback.vue';
import userDash from '../components/userDash.vue';
import LoginComp from '../components/LoginComp.vue';
import RegistrationComp from '../components/RegistrationComp.vue';

function checkaddash(to, from, next) {
    let loginStatus = JSON.parse(localStorage.getItem('token'));
    let isAdmin = (loginStatus && (JSON.parse(localStorage.getItem("userType")))['type'] === 'admin');
    if (!isAdmin) {
        return next('/login');
    }
    next();
}
function checkusdash(to, from, next) {
    let loginStatus = JSON.parse(localStorage.getItem('token'));
    let isStudent = (loginStatus && (JSON.parse(localStorage.getItem("userType")))['type'] === 'student');

    if (!isStudent) {
        return next('/login');
    }
    next();
}
function loginCheck(to, from, next) {
    let loginStatus = JSON.parse(localStorage.getItem('token'));
    let userType = (loginStatus && (JSON.parse(localStorage.getItem("userType")))['type']);

    // If loggedIn -> Go to Dashboard
    if (loginStatus) {
        return next(userType === 'student' ? '/usdash' : '/addashboard');
    }
    next();
}


const router = new Router({
    routes: [
        {
            name: 'login',
            path: '/login',
            component: LoginComp,
            beforeEnter: loginCheck

        },
        {
            name: 'register',
            path: '/register',
            component: RegistrationComp,
            beforeEnter: loginCheck

        },
        { path: '/', redirect: '/login' },
        {

            name: 'addashboard',
            path: '/addashboard',
            component: adDash,
            beforeEnter: checkaddash
        },
        {
            name: 'adallot',
            path: '/adallot',
            component: adAllot,
            beforeEnter: checkaddash
        },
        {
            name: 'adcomplain',
            path: '/adcomplain',
            component: adComplain,
            beforeEnter: checkaddash
        },
        {
            name: 'adsuggest',
            path: '/adsuggest',
            component: adSuggest,
            beforeEnter: checkaddash
        },
        {
            name: 'adstudregis',
            path: '/adstudregis',
            component: adStudRegis,
            beforeEnter: checkaddash
        },
        {
            name: 'adworkreg',
            path: '/adworkreg',
            component: adWorkerReg,
            beforeEnter: checkaddash
        },
        {
            name: 'usprofile',
            path: '/usprofile',
            component: userProfile,
            beforeEnter: checkusdash
        },
        {
            name: 'usrequest',
            path: '/usrequest',
            component: userRequest,
            beforeEnter: checkusdash
        },
        {
            name: 'usfeedback',
            path: '/usfeedback',
            component: userFeedback,
            beforeEnter: checkusdash
        },
        {
            name: 'usdash',
            path: '/usdash',
            component: userDash,
            beforeEnter: checkusdash
        }

    ]
});
export default router;



