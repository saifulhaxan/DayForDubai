import Login from "../views/Login.vue";
import ErrorPage from "../views/error.vue"
import Main from "../views/mainScreen.vue"
import Forgot from "../views/forgot.vue"
import VerificationCode from "../views/verification-code.vue"
import ConfirmPassword from "../views/confirm-password.vue"
import SignUp from "../views/sign-up.vue"
import Home from "../views/home.vue"
import eventHome from "../components/eventHome.vue"
import eXplore from "../views/explore.vue"
import myEvent from "../views/myEvent.vue"
import Filter from "../views/filter.vue"
import Invitation from "../views/invitation.vue"
import upComing from "../views/upComing.vue"
import upComingRequested from "../views/upComing-Requested.vue"
import upComingGoing from "../views/upComing-Going.vue"
import AddPost from "../views/add-new-post.vue"
import checkIn from "../views/eventCheckIn.vue"
import checkOut from "../views/eventCheckout.vue"
import endedEvent from "../views/eventPageEnded.vue"
import eventInvitation from "../views/eventInvitation.vue"
import OrganizerProfile from "../views/organizerProfile.vue"
import Inbox from "../views/inbox.vue"
import Certificate from "../views/certificate.vue"
import Logs from "../views/log.vue"
import LogDetail from "../views/logDetails.vue"
import Setting from "../views/setting.vue"
import updatePass from '../views/changePassword.vue'
import contactUs from '../views/contactUs.vue'
import AboutUs from '../views/aboutUs.vue'
import TermCondition from '../views/terms-and-condition.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Notification from '../views/notification.vue'
import VProfile from '../views/profile.vue'
import VEditProfile from '../views/edit-profile.vue'
import Faqs from '../views/faqs.vue'
import VLayout from '../layout/VLayout.vue'
import Blank from '../layout/blank.vue'
import ChatInbox from '../views/chatInbox.vue'

export default [
    {
        path: '*',
        component: ErrorPage
      },
      {
        path: "/",
        name: "Event",
        component: VLayout,
        children: [
          { path: 'event', component: eventHome }
        ]
  
      },
      // {
      //   path: "/",
      //   name: "Main Screen",
      //   component: Blank,
      //   children: [
      //   {path: 'main', component: }
      //   ]
  
      // },
      {
        path: "/login",
        name: "login",
        components: {
          default: Login,
        }
      },
      {
        path: "../",
        name: "Main Screen",
        components: {
          default: Main,
        }
      },
      {
        path: "/forgot",
        name: "Forgot",
        components: {
          default: Forgot,
        }
      },
      {
        path: "/verification-code",
        name: "Verification Code",
        components: {
          default: VerificationCode,
        }
      },
      {
        path: "/confirm-password",
        name: "Confirm Password",
        components: {
          default: ConfirmPassword,
        }
      },
      {
        path: "/sign-up",
        name: "Sign Up",
        components: {
          default: SignUp,
        }
      },
      {
        path: "/",
        name: "Home",
        component: VLayout,
        children: [
          { path: 'home', component: Home }
        ]
  
      },
      {
        path: "/",
        name: "Explore",
        component: VLayout,
        children: [
          { path: 'explore', component: eXplore }
        ]
  
      },
      {
        path: "/",
        name: "My Event",
        component: VLayout,
        children: [
          { path: 'myevent', component: myEvent }
        ]
  
      },
      {
        path: "/",
        name: "Filter",
        component: VLayout,
        children: [
          { path: 'filter', component: Filter }
        ]
      },
      {
        path: "/",
        name: "Invitation",
        component: VLayout,
        children: [
          { path: 'invitation', component: Invitation }
        ]
      },
      {
        path: "/",
        name: "Upcoming",
        component: VLayout,
        children: [
          { path: 'up-coming', component: upComing }
        ]
      },
      {
        path: "/",
        name: "upComingRequested",
        component: VLayout,
        children: [
          { path: 'up-coming-requested', component: upComingRequested }
        ]
      },
      {
        path: "/",
        name: "upComingGoing",
        component: VLayout,
        children: [
          { path: 'up-coming-going', component: upComingGoing }
        ]
      },
      {
        path: "/",
        name: "AddPost",
        component: VLayout,
        children: [
          { path: 'add-new-post', component: AddPost }
        ]
      },
      {
        path: "/",
        name: "checkIn",
        component: VLayout,
        children: [
          { path: 'event-check-in', component: checkIn }
        ]
      },
      {
        path: "/",
        name: "checkOut",
        component: VLayout,
        children: [
          { path: 'event-check-out', component: checkOut }
        ]
      },
      {
        path: "/",
        name: "endedEvent",
        component: VLayout,
        children: [
          { path: 'event-page-ended', component: endedEvent }
        ]
      },
      {
        path: "/",
        name: "eventInvitation",
        component: VLayout,
        children: [
          { path: 'event-ivitation', component: eventInvitation }
        ]
      },
      {
        path: "/",
        name: "OrganizerProfile",
        component: VLayout,
        children: [
          { path: 'organizer-profile', component: OrganizerProfile }
        ]
      },
      {
        path: "/",
        name: "Inbox",
        component: VLayout,
        children: [
          { path: 'inbox', component: Inbox }
        ]
      },
      {
        path: "/",
        name: "Certificate",
        component: VLayout,
        children: [
          { path: 'certificate', component: Certificate }
        ]
      },
      {
        path: "/",
        name: "Logs",
        component: VLayout,
        children: [
          { path: 'logs', component: Logs }
        ]
      },
      {
        path: "/",
        name: "LogDetail",
        component: VLayout,
        children: [
          { path: 'log-detail', component: LogDetail }
        ]
      },
      {
        path: "/",
        name: "Setting",
        component: VLayout,
        children: [
          { path: 'setting', component: Setting }
        ]
      },
      {
        path: "/",
        name: "Change Password",
        component: VLayout,
        children: [
          { path: 'change-password', component: updatePass }
        ]
      },
      {
        path: "/",
        name: "Contact Us",
        component: VLayout,
        children: [
          { path: 'contact-us', component: contactUs }
        ]
      },
      {
        path: "/",
        name: "About",
        component: VLayout,
        children: [
          { path: 'about-us', component: AboutUs }
        ]
      },
      {
        path: "/",
        name: "Terms and Condition",
        component: VLayout,
        children: [
          { path: 'term-and-condition', component: TermCondition }
        ]
      },
      {
        path: "/",
        name: "Privacy Policy",
        component: VLayout,
        children: [
          { path: 'privacy-policy', component: PrivacyPolicy }
        ]
      },
      {
        path: "/",
        name: "Notification",
        component: VLayout,
        children: [
          { path: 'notification', component: Notification }
        ]
      },
      {
        path: "/",
        name: "FAQ's",
        component: VLayout,
        children: [
          { path: 'faqs', component: Faqs }
        ]
      },
      {
        path: "/",
        name: "Profile",
        component: VLayout,
        children: [
          { path: 'profile', component: VProfile }
        ]
      },
      {
        path: '/',
        name: 'Edit Profile',
        component: VLayout,
        children: [
          {
            path: 'edit-profile',
            component: VEditProfile
          }
        ]
      },
      {
        path: '/',
        name: 'Chat Inbox',
        component: VLayout,
        children: [
          {
            path: 'chat-inbox',
            component: ChatInbox
          }
        ]
      },
]