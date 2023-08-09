import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import ContentContainer from '../../containers/ContentContainer'
import Product from './Product'


function Content() {
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    console.log(products, "ürünler")

    return (
        <ContentContainer>
            <div>
                <div className='flex justify-between border-b p-1 '>
                    <div className=''>   Anasayfa Vitrin </div>
                    <div className='text-blue-800 hover:underline cursor-pointer'> Tüm vitrin ilanlarını göster</div>
                </div>

                <div className='flex flex-wrap  my-3'>
                    {
                        products.map((product, index) => (
                            <div className='mx-[6px]'>
                                <Product
                                    index={index}
                                    product={product}
                                    key={index}
                                />

                            </div>
                        ))
                    }
                </div>

            </div>
        </ContentContainer>
    )
}

export default Content