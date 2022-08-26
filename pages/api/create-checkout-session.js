/* eslint-disable import/no-anonymous-default-export */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { image, email, description, tags } = req.body;

  // const transformedItems = {
  //   description: description,
  //   quantity: 1,
  //   price_data: {
  //     currency: 'usd',
  //     unit_amount: 13 * 100,
  //     product_data: {
  //       name: 'an image',
  //       images: [image]
  //     },
  //   }
  // }
  // console.log(transformedItems)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          unit_amount: 1300,
          product_data: {
            name: 'A very beautifull image',
            description: description,
            images: [image],
          },
        },
        quantity: 1,
      }],
    mode: 'payment',
    success_url: `${req.headers.origin}/success?payment=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
    metadata: {
      email,
      images: image
    }
  })

  res.status(200).json({ id: session.id })

}