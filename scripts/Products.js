import { getProducts } from "./database.js"
import { getEmployees, getOrders } from "./database.js"

const orders = getOrders()
const employees = getEmployees()

// PROPS TO DEVIN FOR THE CODE HELP THIS IS HIS SOLUTION NOT MINE 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {

                if (employee.id === parseInt(employeeId)) {
                    const employeeOrders = orders.filter(
                        (order) => {
                            if (order.employeeId === employee.id) {
                                return true
                            }
                        }
                    )
                    console.log(employeeOrders)

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)
// THANKS AGAIN DEVIN FOR THE HELP ^^^
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productId] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs $${product.price}`)
                }
            }
        }
    }
)

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}"> ${product.name}</li>`
    }

    html += "</ul>"

    return html
}

