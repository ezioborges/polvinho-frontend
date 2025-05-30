import newElement from "../../utils/newElement.js"
import PageTitle from "../PageTitle.js"
import { Sidebar } from "../Sidebar.js"
import DashContent from "./DashListItems.js"

const DashboardMainContent = () => {
    const dashboardContent = newElement('div')
    dashboardContent.classList.add('dash-content')

    const sidebar = Sidebar()

    const dashMainBody = newElement('div')
    dashMainBody.classList.add('body')
    dashMainBody.id = 'main-body'

    const dashBody = newElement('div')
    dashBody.classList.add('dashboard-body')

    const dashTitle = PageTitle('Dashboard', 'Bem vindo, Admin')
    const dashContent = DashContent()

    dashMainBody.appendChild(dashTitle)
    dashMainBody.appendChild(dashContent)

    dashboardContent.appendChild(sidebar)
    dashboardContent.appendChild(dashMainBody)

    return dashboardContent
}

export default DashboardMainContent