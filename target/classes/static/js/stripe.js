const stripe = Stripe('pk_test_51S7tZHAcD2XKA2lmWUqyeZCgn1ZZ8fxsA353QOpQfez1pE6jSUpq1v6RRCYjFLDPEPtPYnPV495eLHfQFZAnPwZu00GaDhAwxD');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});