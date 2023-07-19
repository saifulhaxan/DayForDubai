import OrganizationMainScreen from "../views/organization/mainScreen.vue"
import OrganizationLogin from "../views/organization/Login.vue";
import OrganizationForgot from "../views/organization/forgot.vue"
import OrganizationVerificationCode from "../views/organization/verification-code.vue"
import OrganizationConfirmPassword from "../views/organization/confirm-password.vue"
import OrganizationSignUp from "../views/organization/sign-up.vue"
import EventLive from "../views/organization/eventLive.vue"
import EventAttendence from "../views/organization/eventVolunteerAteendence.vue"
import eventPast from "../views/organization/event-past.vue"
import AddEvents from "../views/organization/add-event.vue"
import OrganizationUpComing from "../views/organization/upComing.vue"
import OrganizationmyEvent from "../views/organization/myEvent.vue"
import OrganizationFilter from "../views/organization/filter.vue"
import AwardCertificate from "../views/organization/award-certificate.vue"
import VolunteerDetails from "../views/organization/volunteer-details.vue"
import addCertificates from "../views/organization/add-certificates.vue"
import OrganizationAddPost from "../views/organization/add-new-post.vue"
import OrganizationCertificate from "../views/organization/certificate.vue"
import CertificateDetails from "../views/organization/certificate-details"
import Profile from "../views/organization/profile.vue"
import EProfile from "../views/organization/edit-profile.vue"
import OrganizationAward from "../views/organization/award-certificate-page.vue"
import OrganizationLogs from "../views/organization/log.vue"
import OrganizationLogDetail from "../views/organization/logDetails.vue"
import OrganizationSetting from "../views/organization/setting.vue"
import OrganizationupdatePass from '../views/organization/changePassword.vue'
import OrganizationcontactUs from '../views/organization/contactUs.vue'
import OAdmin from '../views/organization/faqs.vue'
import OrganizationAboutUs from '../views/organization/aboutUs.vue'
import OionrganizationTermCondit from '../views/organization/terms-and-condition.vue'
import OrganizationPrivacyPolicy from '../views/organization/PrivacyPolicy.vue'
import OrganizationNotification from '../views/organization/notification.vue'
import OLayout from '../layout/organization/VLayout.vue'

export default [
    // Organization Screens
    {
        path: "/organization",
        name: "organization-main-screens",
        components: {
            default: OrganizationMainScreen,
        }
    },
    {
        path: "/Organization/login",
        name: "login",
        components: {
            default: OrganizationLogin,
        }
    },
    {
        path: "/Organization/forgot",
        name: "Organization Forgot",
        components: {
            default: OrganizationForgot,
        }
    },
    {
        path: "/Organization/verification-code",
        name: "Organization Verification Code",
        components: {
            default: OrganizationVerificationCode,
        }
    },
    {
        path: "/Organization/confirm-password",
        name: "Organization Confirm Password",
        components: {
            default: OrganizationConfirmPassword,
        }
    },
    {
        path: "/Organization/sign-up",
        name: "Organization Sign Up",
        components: {
            default: OrganizationSignUp,
        }
    },
    {
        path: "/organization",
        name: "OrganizerHome",
        component: OLayout,
        children: [
            { path: 'home', component: OrganizationmyEvent }
        ]
    },
    {
        path: "/organization",
        name: "OrganizerFilter",
        component: OLayout,
        children: [
            { path: 'filter', component: OrganizationFilter }
        ]
    },
    {
        path: "/organization",
        name: "Upcoming",
        component: OLayout,
        children: [
            { path: 'up-coming', component: OrganizationUpComing }
        ]
    },
    {
        path: "/organization",
        name: "OrganizationAddPost",
        component: OLayout,
        children: [
            { path: 'add-new-post', component: OrganizationAddPost }
        ]
    },
    {
        path: "/organization",
        name: "EventLive",
        component: OLayout,
        children: [
            { path: 'event-live', component: EventLive }
        ]
    },
    {
        path: "/organization",
        name: "EventAttendence",
        component: OLayout,
        children: [
            { path: 'volunteer-attendence', component: EventAttendence }
        ]
    },
    {
        path: "/organization",
        name: "Event Past",
        component: OLayout,
        children: [
            { path: 'event-past', component: eventPast }
        ]
    },
    {
        path: "/organization",
        name: "Event Award Certificate",
        component: OLayout,
        children: [
            { path: 'award-certificate', component: AwardCertificate }
        ]
    },
    {
        path: "/organization",
        name: "Volunteer Details",
        component: OLayout,
        children: [
            {
                path: 'volunteer-details',
                component: VolunteerDetails,
            }
        ]
    },
    {
        path: "/organization",
        name: "Add Event",
        component: OLayout,
        children: [
            { path: 'add-event', component: AddEvents }
        ]
    },
    {
        path: "/organization",
        name: "Organization Certificate",
        component: OLayout,
        children: [
            { path: 'certificate', component: OrganizationCertificate }
        ]
    },
    {
        path: "/organization",
        name: "Add Certificate",
        component: OLayout,
        children: [
            { path: 'add-certificate', component: addCertificates }
        ]
    },
    {
        path: "/organization",
        name: "Certificate Details",
        component: OLayout,
        children: [
            { path: 'certificate-detail', component: CertificateDetails }
        ]
    },
    {
        path: "/organization",
        name: "Organization Logs",
        component: OLayout,
        children: [
            { path: 'logs', component: OrganizationLogs }
        ]
    },
    {
        path: "/organization",
        name: "Organization Setting",
        component: OLayout,
        children: [
            { path: 'setting', component: OrganizationSetting }
        ]
    },
    {
        path: "/organization",
        name: "Organization Change Password",
        component: OLayout,
        children: [
            { path: 'change-password', component: OrganizationupdatePass }
        ]
    },
    {
        path: "/organization",
        name: "Organization Contact Us",
        component: OLayout,
        children: [
            { path: 'contact-us', component: OrganizationcontactUs }
        ]
    },
    {
        path: "/organization",
        name: "Organization About Us",
        component: OLayout,
        children: [
            { path: 'about-us', component: OrganizationAboutUs }
        ]
    },
    {
        path: "/organization",
        name: "Organization Terms & Condition",
        component: OLayout,
        children: [
            { path: 'term-and-condition', component: OionrganizationTermCondit }
        ]
    },
    {
        path: "/organization",
        name: "Organization Privacy Policy",
        component: OLayout,
        children: [
            { path: 'privacy-policy', component: OrganizationPrivacyPolicy }
        ]
    },
    {
        path: "/organization",
        name: "Organization Notification",
        component: OLayout,
        children: [
            { path: 'notification', component: OrganizationNotification }
        ]
    },
    {
        path: "/organization",
        name: "Organization Log Detail",
        component: OLayout,
        children: [
            { path: 'log-detail', component: OrganizationLogDetail }
        ]
    },
    {
        path: "/organization",
        name: "Organization Faq's",
        component: OLayout,
        children: [
            { path: 'faqs', component: OAdmin }
        ]
    },
    {
        path: '/organization',
        name: 'Award Certificate Page',
        component: OLayout,
        children: [
            {
                path: 'award-certificate-page',
                component: OrganizationAward
            }
        ]
    },
    {
        path: '/organization',
        name: 'Profile',
        component: OLayout,
        children: [
            {
                path: 'profile',
                component: Profile
            }
        ]
    },
    {
        path: '/organization',
        name: 'Edit Profile',
        component: OLayout,
        children: [
            {
                path: 'edit-profile',
                component: EProfile
            }
        ]
    },

]