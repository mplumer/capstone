import { loadStripe } from '@stripe/stripe-js';

// Loads the Stripe SDK then returns a promise that resolves with the Stripe object.
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
