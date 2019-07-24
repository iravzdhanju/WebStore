// /* Set rates + misc */
// var taxRate = 0.05;
// var shippingRate = 15.00;
// var fadeTime = 300;


// /* Assign actions */
// $('.product-quantity input').change(function () {
//     updateQuantity(this);
// });

// $('.product-removal button').click(function () {
//     removeItem(this);
// });


// /* Recalculate cart */
// function recalculateCart() {
//     var subtotal = 0;

//     /* Sum up row totals */
//     $('.product').each(function () {
//         subtotal += parseFloat($(this).children('.product-line-price').text());
//     });

//     /* Calculate totals */
//     var tax = subtotal * taxRate;
//     var shipping = (subtotal > 0 ? shippingRate : 0);
//     var total = subtotal + tax + shipping;

//     /* Update totals display */
//     $('.totals-value').fadeOut(fadeTime, function () {
//         $('#cart-subtotal').html(subtotal.toFixed(2));
//         $('#cart-tax').html(tax.toFixed(2));
//         $('#cart-shipping').html(shipping.toFixed(2));
//         $('#cart-total').html(total.toFixed(2));
//         if (total == 0) {
//             $('.checkout').fadeOut(fadeTime);
//         } else {
//             $('.checkout').fadeIn(fadeTime);
//         }
//         $('.totals-value').fadeIn(fadeTime);
//     });
// }


// /* Update quantity */
// function updateQuantity(quantityInput) {
//     /* Calculate line price */
//     var productRow = $(quantityInput).parent().parent();
//     var price = parseFloat(productRow.children('.product-price').text());
//     var quantity = $(quantityInput).val();
//     var linePrice = price * quantity;

//     /* Update line price display and recalc cart totals */
//     productRow.children('.product-line-price').each(function () {
//         $(this).fadeOut(fadeTime, function () {
//             $(this).text(linePrice.toFixed(2));
//             recalculateCart();
//             $(this).fadeIn(fadeTime);
//         });
//     });
// }


// /* Remove item from cart */
// function removeItem(removeButton) {
//     /* Remove row from DOM and recalc cart total */
//     var productRow = $(removeButton).parent().parent();
//     productRow.slideUp(fadeTime, function () {
//         productRow.remove();
//         recalculateCart();
//     });
// }

// var atcBtn = document.querySelectorAll('.addtocart');
// let allItems = '';
// var cartItems = document.querySelector('.forcartItems');
// // console.log(cartItems);

// atcBtn.forEach(function (btn) {
//     btn.onclick = function () {
//         var name = btn.parentElement.innerHTML;

//         let temp = ''
//             < div class="items" >
//                 <h3> </h3>
//                 </div > `

//         allItems += temp;
//         console.log(allItems);

//     }
// });

let buttons = document.querySelectorAll('.addtocart');
let cart = document.querySelector('.carts');


buttons.forEach((btn) => {
    // console.log(btn);

    btn.onclick = () => {
        let name = btn.parentElement.parentElement.parentElement.querySelector('.product-bottom h3').innerText;
        let price = btn.parentElement.parentElement.parentElement.querySelector('.product-bottom h2').innerText;


        let infoname = "Name";
        let infoprice = "Price";

        // console.log(name, price);

        const item = `
        <div class="item">
        
         
        <hr>
    
        <table>
           
            <tr>
                <td width="1000px"><h3>${name}</h3> </td>
                <td width="1000px"><h4>${price}</h4></td>
                <td width="1000px"><input type="button" class="btn-delete" value="Delete"></td>
                </tr>
        </table>
   
          
        </div>
    `;

        console.log(item);

        cart.innerHTML += item;
    }
})
