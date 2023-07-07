import { LoginPage } from "./pages/login_pages.cy"
import { DashboardPage } from "./pages/dashboard_pages.cy"
import { DetailPage } from "./pages/detail_pages.cy"
import { CartPage } from "./pages/cart_pages.cy"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let detailPage = new DetailPage()
let cartPage = new CartPage()
const URL = 'https://www.saucedemo.com'

describe('Add one product to cart', () => {
    it('Add one product to cart positive case', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')  
        loginPage.assertLogin()
        dashboardPage.sauceLabsBackpack() 

        detailPage.detailAndAddProduct()
        detailPage.checkCart()
        cartPage.cartList()
    })
})