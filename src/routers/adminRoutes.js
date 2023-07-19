import adminLogin from "../views/admin/Login.vue"
import adminForgot from "../views/admin/forgot.vue"
import adminVerificationCode from "../views/admin/verification-code.vue"
import adminConfirmPassword from "../views/admin/confirm-password.vue"
import Dashboard from "../views/admin/dasboard.vue"
import AdminVolunteer from "../views/admin/volunteer.vue"
import AddVolunteer from "../views/admin/add-volunteer.vue"
import VDetailActive from "../views/admin/volunteer-detail-active.vue"
import Vevent from "../views/admin/Vevent.vue"
import VeventID from "../views/admin/volunteer-detail-id.vue"
import Organization from "../views/admin/organization.vue"
import AddOrganization from "../views/admin/add-organization.vue"
import OrganizationDetails from "../views/admin/organization-details.vue"
import OrganizationRequest from "../views/admin/organization-request.vue"
import OrganizationRequestDetail from "../views/admin/organization-request-details.vue"
import OrganizationEvents from "../views/admin/events.vue"
import EventListning from "../views/admin/eventListing.vue"
import EventVList from "../views/admin/eventVlist.vue"
import upComingEvents from "../views/admin/upcoming-events.vue"
import pastEvents from "../views/admin/past-event.vue"
import editEvents from "../views/admin/edit-event-detail.vue"
import AadEvents from "../views/admin/add-event.vue"
import AFilter from "../views/admin/filter.vue"
import eventRequest from "../views/admin/event-request.vue"
import eventDRequest from "../views/admin/event-detail-request.vue"
import attendenceManagement from "../views/admin/attendence-management.vue"
import attendenceManagementDetail from "../views/admin/attendence-management-detail.vue"
import attendenceManagementPDetail from "../views/admin/past-attendence-detail.vue"
import certificateManagement from "../views/admin/certificate-management.vue"
import Addcertificate from "../views/admin/add-certificate.vue"
import certificateDetails from "../views/admin/certificate-detail.vue"
import certificateMDetails from "../views/admin/certificate-management-detail.vue"
import certificateAward from "../views/admin/certificate-management-award.vue"
import categoryM from "../views/admin/category-management.vue"
import AddCat from "../views/admin/add-category.vue"
import eCat from "../views/admin/edit-category.vue"
import CManagement from "../views/admin/content-management.vue"
import CManagementD from "../views/admin/content-management-detail.vue"
import Faq from "../views/admin/faqs.vue"
import EditFaq from "../views/admin/edit-faqs.vue"
import AddFaq from "../views/admin/add-faqs.vue"
import reportM from "../views/admin/report-management.vue"
import eventRDetail from "../views/admin/event-report-detail.vue"
import userDreport from "../views/admin/user-report-detail.vue"
import postRdetail from "../views/admin/post-report-detail.vue"
import CpostRdetail from "../views/admin/comment-post-report-detail.vue"
import SuggestRdetail from "../views/admin/suggestion-report-detail.vue"
import CommentRdetail from "../views/admin/comment-report-detail.vue"
import AdminTable from "../views/admin/admin-table.vue"
import AddAdmin from "../views/admin/add-admin.vue"
import FeedBack from "../views/admin/feedback.vue"
import FeedBackD from "../views/admin/feedback-details.vue"
import editAdmin from "../views/admin/edit-admin.vue"
import ChatBox from "../views/admin/chatBox.vue"
import VolunteerRequest from '../views/admin/volunteer-request.vue'
import Notification  from "../views/admin/notification.vue"
import VLayout from "../layout/admin/VLayout.vue"

export default [
    {
        path: "/admin/login",
        name: "Admin Login",
        components:
        {
            default: adminLogin
        }
    },
    {
        path: "/admin/forgot",
        name: "Admin Forgot",
        components:
        {
            default: adminForgot
        }
    },
    {
        path: "/admin/verification-code",
        name: "Admin Verification Code",
        components: {
            default: adminVerificationCode,
        }
    },
    {
        path: "/admin/confirm-password",
        name: "Admin Confirm Password",
        components: {
            default: adminConfirmPassword,
        }
    },
    {
        path: "/admin",
        name: "Dasboard",
        component: VLayout,
        children: [
            {
                path: "dashboard",
                component: Dashboard
            }
        ]
    },
    {
        path: "/admin",
        name: "Volunteer",
        component: VLayout,
        children: [
            {
                path: "volunteer",
                component: AdminVolunteer
            }
        ]
    },
    {
        path: "/admin",
        name: "Add Volunteer",
        component: VLayout,
        children: [
            {
                path: "add-volunteer",
                component: AddVolunteer
            }
        ]
    },
    {
        path: "/admin",
        name: "Volunteer Detail",
        component: VLayout,
        children: [
            {
                path: "volunteer-detail",
                component: VDetailActive
            }
        ]
    },
    {
        path: "/admin",
        name: "Volunteer Events",
        component: VLayout,
        children: [
            {
                path: "volunteer-events",
                component: Vevent
            }
        ]
    },
    {
        path: "/admin",
        name: "Volunteer Detai Emirates ",
        component: VLayout,
        children: [
            {
                path: "volunteer-detail-id",
                component: VeventID
            }
        ]
    },
    {
        path: "/admin",
        name: "Organization",
        component: VLayout,
        children: [
            {
                path: "organization",
                component: Organization
            }
        ]
    },
    {
        path: "/admin",
        name: "Add Organization",
        component: VLayout,
        children: [
            {
                path: "add-organization",
                component: AddOrganization
            }
        ]
    },
    {
        path: "/admin",
        name: "Organization Details",
        component: VLayout,
        children: [
            {
                path: "organization-details",
                component: OrganizationDetails
            }
        ]
    },
    {
        path: "/admin",
        name: "Organization Request",
        component: VLayout,
        children: [
            {
                path: "organization-request",
                component: OrganizationRequest
            }
        ]
    },
    {
        path: "/admin",
        name: "Organization Request Details",
        component: VLayout,
        children: [
            {
                path: "organization-request-details",
                component: OrganizationRequestDetail
            }
        ]
    },
    {
        path: "/admin",
        name: "Organization Events",
        component: VLayout,
        children: [
            {
                path: "events",
                component: OrganizationEvents
            }
        ]
    },
    {
        path: "/admin",
        name: "Event Listning",
        component: VLayout,
        children: [
            {
                path: "event-listning-detail",
                component: EventListning
            }
        ]
    },
    {
        path: "/admin",
        name: "Event Volunteer List",
        component: VLayout,
        children: [
            {
                path: "event-volunteer-list",
                component: EventVList
            }
        ]
    },
    {
        path: "/admin",
        name: "Upcoming Events",
        component: VLayout,
        children: [
            {
                path: "upcoming-events",
                component: upComingEvents
            }
        ]
    },
    {
        path: "/admin",
        name: "past Events",
        component: VLayout,
        children: [
            {
                path: "past-events",
                component: pastEvents
            }
        ]
    },
    {
        path: "/admin",
        name: "Edit Events",
        component: VLayout,
        children: [
            {
                path: "edit-events",
                component: editEvents
            }
        ]
    },
    {
        path: "/admin",
        name: "Add Events",
        component: VLayout,
        children: [
            {
                path: "add-events",
                component: AadEvents
            }
        ]
    },
    {
        path: "/admin",
        name: "Filter",
        component: VLayout,
        children: [
            {
                path: "filter",
                component: AFilter
            }
        ]
    },
    {
        path: "/admin",
        name: "Event Request",
        component: VLayout,
        children: [
            {
                path: "event-request",
                component: eventRequest
            }
        ]
    },
    {
        path: "/admin",
        name: "Event Request Detail",
        component: VLayout,
        children: [
            {
                path: "event-request-detail",
                component: eventDRequest
            }
        ]
    },
    {
        path: "/admin",
        name: "Attandence Management",
        component: VLayout,
        children: [
            {
                path: "attandence-management",
                component: attendenceManagement
            }
        ]
    },
    {
        path: "/admin",
        name: "Attandence Management Detail",
        component: VLayout,
        children: [
            {
                path: "attandence-management-detail",
                component: attendenceManagementDetail
            }
        ]
    },
    {
        path: "/admin",
        name: "Past Management Detail",
        component: VLayout,
        children: [
            {
                path: "past-management-detail",
                component: attendenceManagementPDetail
            }
        ]
    },
    {
        path: "/admin",
        name: "Certifictae Management",
        component: VLayout,
        children: [
            {
                path: "certificate-management",
                component: certificateManagement
            }
        ]
    },
    {
        path: "/admin",
        name: "Add Certificate",
        component: VLayout,
        children: [
            {
                path: "add-certificate",
                component: Addcertificate
            }
        ]
    },
    {
        path: "/admin",
        name: "Certificate Details",
        component: VLayout,
        children: [
            {
                path: "certificate-detail",
                component: certificateDetails
            }
        ]
    },
    {
        path: "/admin",
        name: "Certificate Management Details",
        component: VLayout,
        children: [
            {
                path: "certificate-management-detail",
                component: certificateMDetails
            }
        ]
    },
    {
        path: "/admin",
        name: "Certificate Management Award",
        component: VLayout,
        children: [
            {
                path: "certificate-management-award",
                component: certificateAward
            }
        ]
    },
    {
        path: "/admin",
        name: "Category Management",
        component: VLayout,
        children: [
            {
                path: "category-management",
                component: categoryM
            }
        ]
    },
    {
        path: "/admin",
        name: "Add Category",
        component: VLayout,
        children: [
            {
                path: "add-category",
                component: AddCat
            }
        ]
    },
    {
        path: "/admin",
        name: "Edit Category",
        component: VLayout,
        children: [
            {
                path: "edit-category",
                component: eCat
            }
        ]
    },
    {
        path: "/admin",
        name: "Content Management",
        component: VLayout,
        children: [
            {
                path: "content-management",
                component: CManagement
            }
        ]
    },
    {
        path: "/admin",
        name: "Content Management Detail",
        component: VLayout,
        children: [
            {
                path: "content-management-detail",
                component: CManagementD
            }
        ]
    },
    {
        path: "/admin",
        name: "FAQ'S",
        component: VLayout,
        children: [
            {
                path: "faqs",
                component: Faq
            }
        ]
    },
    {
        path: "/admin",
        name: "Edit FAQ'S",
        component: VLayout,
        children: [
            {
                path: "edit-faqs",
                component: EditFaq
            }
        ]
    },
    {
        path: "/admin",
        name: "Add FAQS",
        component: VLayout,
        children: [
            {
                path: "add-faqs",
                component: AddFaq
            }
        ]
    },
    {
        path: "/admin",
        name: "Report Management",
        component: VLayout,
        children: [
            {
                path: "report-management",
                component: reportM
            }
        ]
    },
    {
        path: "/admin",
        name: "Event Report Detail",
        component: VLayout,
        children: [
            {
                path: "event-report-detail",
                component: eventRDetail
            }
        ]
    },
    {
        path: "/admin",
        name: "User Report Detail",
        component: VLayout,
        children: [
            {
                path: "user-report-detail",
                component: userDreport
            }
        ]
    },
    {
        path: "/admin",
        name: "Post Report Detail",
        component: VLayout,
        children: [
            {
                path: "post-report-detail",
                component: postRdetail
            }
        ]
    },
    {
        path: "/admin",
        name: "Comment Post Report Detail",
        component: VLayout,
        children: [
            {
                path: "comment-post-report-detail",
                component: CpostRdetail
            }
        ]
    },
    {
        path: "/admin",
        name: "Suggestion Report Detail",
        component: VLayout,
        children: [
            {
                path: "suggestion-report-detail",
                component: SuggestRdetail
            }
        ]
    },
    {
        path: "/admin",
        name: "Comments Report Detail",
        component: VLayout,
        children: [
            {
                path: "comment-report-detail",
                component: CommentRdetail
            }
        ]
    },
    {
        path: "/admin",
        name: "Admin Table",
        component: VLayout,
        children: [
            {
                path: "admin-table",
                component: AdminTable
            }
        ]
    },
    {
        path: "/admin",
        name: "Add Admin",
        component: VLayout,
        children: [
            {
                path: "add-admin",
                component: AddAdmin
            }
        ]
    },
    {
        path: "/admin",
        name: "Edit Admin",
        component: VLayout,
        children: [
            {
                path: "edit-admin",
                component: editAdmin
            }
        ]
    },
    {
        path: "/admin",
        name: "Feedback",
        component: VLayout,
        children: [
            {
                path: "feedback",
                component: FeedBack
            }
        ]
    },
    {
        path: "/admin",
        name: "Feedback Details",
        component: VLayout,
        children: [
            {
                path: "feedback-details",
                component: FeedBackD
            }
        ]
    },
    {
        path: '/admin',
        name: 'Volunteer Request',
        component: VLayout,
        children: [
            {
                path: 'volunteer-request',
                component: VolunteerRequest
            }
        ]
    },
    {
        path: '/admin',
        name: 'ChatBox',
        component: VLayout,
        children: [
            {
                path: 'chat-box',
                component: ChatBox
            }
        ]
    },
    {
        path: '/admin',
        name: 'Notification',
        component: VLayout,
        children: [
            {
                path: 'notification',
                component: Notification
            }
        ]
    }
]