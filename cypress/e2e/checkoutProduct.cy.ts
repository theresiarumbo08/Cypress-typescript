import { LoginPage } from "./pages/login_pages.cy";
import { DashboardPage } from "./pages/dashboard_pages.cy";
import { CartPage } from "./pages/cart_pages.cy";
import { CheckoutInformation } from "./pages/checkoutInfo_pages.cy";
import { CheckoutOverview } from "./pages/checkoutOverview_pages.cy";
import { CheckoutComplete } from "./pages/checkoutComplete_pages.cy";
import { DetailPage } from "./pages/detail_pages.cy";

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutInformation = new CheckoutInformation()
let checkoutOverview =  new CheckoutOverview()
let checkoutComplete = new CheckoutComplete()
let detailPage = new DetailPage()

const URL = 'https://www.saucedemo.com'

describe('Checkout product', () => {
    it('Checkout one product positive case', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')  
        loginPage.assertLogin()
       dashboardPage.iconCartToClick()
        cartPage.btnCheckout()
        checkoutInformation.formInformationCheckout('Theresia','Rumahorbo','111111')
        checkoutOverview.checkOverviewCheckout()
        checkoutComplete.checkOverviewCheckout()
    })
})