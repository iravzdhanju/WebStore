// let counter = 0;
// for (let i = 0; i < buttons.length; i++) {
//     const button = buttons[i];

//     button.onclick = (event) => {
//         const cartItem = `
//         <div class="item">
//             <h1>  ${button.parentElement.querySelector('h1').innerText
//             } </h1 >
//         <hr>
//             <svg class="removeCartItem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                 <path
//                     d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
//                 <path d="M0 0h24v24H0z" fill="none" /></svg>
//             <h1 class="item-price"> ${button.parentElement.querySelector('h2').innerText} </h1>
//         </div>
//     `;
//         $('.cart span').style.transform = 'rotate(0deg)'
//         $('.cart-items').innerHTML += cartItem;
//         counter += 1;


//         event.stopPropagation();
//         let removeItem = $$('.cart-items .item .removeCartItem');

//         removeItem.forEach(button => {
//             button.onclick = () => {

//                 button.parentElement.style.transform = 'translateX(-200%)';
//                 setTimeout(function () {
//                     button.parentElement.style.display = 'none';
//                 }, 400);
//                 counter -= 1;

//                 $('.cart span').innerText = counter;
//             }
//         });

//         setTimeout(function () {
//             $('.cart span').style.transform = 'rotate(360deg)'
//         }, 50);

//         $('.cart span').innerText = counter;

//     }
// }
