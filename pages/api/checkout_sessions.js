const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'eur',
              unit_amount: 1300,
              product_data: {
                name: 'A very beautifull image',
                description: 'Hier moet dynamische info komen van de geklikte image maar da lukt ni.',
                images: ['https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg'],
              },
            },
            quantity: 1,
          }],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?payment=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}