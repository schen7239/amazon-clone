import React from 'react'
import Product from './Product'

function ProductFeed({productFeedProducts}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {productFeedProducts.slice(0,4)?.map(({id, title, price, description, category, image}) => (
                <Product 
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
                <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
                <div className="md:col-span-2">
                {productFeedProducts.slice(4,5)?.map(({id, title, price, description, category, image}) => (
                <Product 
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
                </div>
                {productFeedProducts.slice(5, productFeedProducts.length)?.map(({id, title, price, description, category, image}) => (
                <Product 
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
        </div>
    )
}

export default ProductFeed


