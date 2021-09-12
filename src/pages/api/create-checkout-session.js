

const stripe = require('stripe')('sk_test_51JZ0U1BYRcVnqY2qWp6BvSPvV25y9WOrdBSKCbPkrh3UlYsyMfPi2OCy0X87DzqSwIDxpoflSSAErBUO0aLIP6Hr00IxgX62aq')

export default async (req, res) => {
    const {items, email} = req.body;
    const transformedItems = items.map((item) => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: "usd",
            unit_amount: item.price*100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ['shr_1JZ0ZnBYRcVnqY2qLm4nAuPq'],
        shipping_address_collection: {
            allowed_countries: ['GB', "US","CA"]
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    });

    res.status(200).json({id: session.id});
};