import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailNav from '../components/Detail/DetailNav';
import DetailContent from '../components/Detail/DetailContent';
import DetailProduct from '../components/Detail/DetailProduct';
import Navbar from '../components/navbar/Navbar';
import PageContainers from '../containers/PageContainers';
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '.././redux/productSlice';
import DetailSlider from '../components/Detail/DetailSlider';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [dispatch, id])


  return (
    <div>

      <Navbar />
      <DetailNav id={id} productDetail={productDetail} />
      <PageContainers >
        <div className='flex my-20'>
          <DetailSlider image={productDetail.image} />
          <DetailProduct productDetail={productDetail} />
        </div>
      </PageContainers>
    </div>
  )
}

export default Detail