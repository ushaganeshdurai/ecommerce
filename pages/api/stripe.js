const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  console.log(req.body.cartItems);  
  if (req.method === 'POST') {
   
    try {
      
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          {
            shipping_rate:'shr_1PCKEoSAtO73Z9Ae9GfyBV7L'
          },
          {
            shipping_rate:'shr_1PCKGDSAtO73Z9AeUj6RsLnJ'
          }
        ],
            line_items: req.body.cartItems.map((item)=>
          {
            const img = item.image[0].asset._ref;
            const newimg=img.replace('image-','https://cdn.sanity.io/images/qs2hb0re/production/').replace('-webp','.webp')
            console.log('image',newimg)
          }),
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}