require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a PaymentIntent for a customer
exports.handler = async (event, context) => {
  // Parse the request body from the event
  const { amount } = JSON.parse(event.body);

  /*
    Create a PaymentIntent with the order amount and currency
    The PaymentIntent will be created asynchronously.
    The response will contain a PaymentIntent object in the body.
    The PaymentIntent will be in the requires_action state.
    The PaymentIntent will need to be confirmed by the customer.
    */

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    // Return the PaymentIntent details to the client
    return {
      statusCode: 200,
      body: JSON.stringify(paymentIntent),
    };
  } catch (err) {
    // Return an error to the client
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
