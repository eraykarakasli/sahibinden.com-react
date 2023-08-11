import React from 'react'
import Foot from '../components/footer/Foot'
import LoginContainer from '../containers/LoginContainer'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { Formik } from 'formik'
import * as Yup from 'yup'


function Register() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#F8F8F8]'>
      <LoginContainer>
        <div >
          <div className='justify-center flex '>
            <div className='shadow-lg bg-[#FFE800] text-2xl font-semibold justify-center flex p-1 my-10 cursor-pointer w-48' onClick={() => navigate('/')}> mahibinden.com</div>
          </div>

          <Formik
            initialValues={{
              email: "",
              password: "",
              agree: false,
            }}

            validationSchema={
              Yup.object({
                email: Yup.string().email().required("E-posta adresinizi veya kullanıcı adınızı girin."),
                password: Yup.string().required("Şifrenizi girin."),
                agree: Yup.boolean()
              })
            }

            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                resetForm();
                setSubmitting(false);
              }, 2000)
            }}
          >
            {({ values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting, touched }) => (
              <form
                onSubmit={handleSubmit}
                className='bg-white w-[550px] p-8 shadow-xl border'
              >
                <div className='justify-center flex text-3xl font-bold pt-7'>Hesap Aç</div>

                <input
                  id='email'
                  type="text"
                  placeholder='E-posta...'
                  className='border w-[480px] h-12 mt-8 shadow-lg p-2'
                  value={values.email}
                  onChange={handleChange}
                />
                {
                  errors.email && touched.email && (
                    <div className='text-red-500 text-sm p-2'>{errors.email}</div>
                  )
                }



                <button
                  type="submit"
                  className='w-full bg-[#438ED8] h-12 rounded-md mt-5 shadow-lg text-white hover:bg-[#4594DE]'
                  disabled={!dirty || isSubmitting}

                >E-posta ile hesap aç</button>

                <div className='my-10 flex justify-center '>

                  <div> Zaten hesabın var mı? <a href="#" className='text-blue-600 font-semibold hover:underline'>Giriş yap</a></div>
                </div>

                <div className='grid grid-flow-col items-center  text-lg'>
                  <span><hr /></span>  <span className='justify-center flex'>Veya</span> <span><hr /></span>
                </div>



                <a href='#' className='rounded-md shadow-lg  border w-full h-12 m-2 mt-10 flex items-center justify-center gap-2 hover:bg-gray-100'><FcGoogle /><p> Google ile giriş yap</p></a>

                <a href='#' className='rounded-md shadow-lg border w-full h-12 m-2 mt-4 flex items-center justify-center gap-2 hover:bg-gray-100'><BsApple /> <p>Apple ile giriş yap</p></a>




                <div className='text-xs p-3 px-4 text-gray-500'>
                  <p>Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde <a href="#" className='text-blue-600 hover:underline'>Bireysel Hesap Sözleşmesi ve Ekleri</a>'ni kabul etmiş sayılırsınız.</p>
                </div>
                <div className='flex justify-center my-6 text-lg'>
                  <p>İşletme sahibi misin? <a href="#" className='text-blue-600 hover:underline'> Kurumsal hesap aç</a></p>
                </div>
              </form>
            )}
          </Formik>
          <p className='text-xs p-3 px-4 text-gray-500'>
            Tarafınızca sağlanmış olan kişisel verileriniz hesap açma esnasında kimlik doğrulama tercihinize bağlı olarak Google veya Apple vasıtasıyla işlenebilecektir. Kişisel verilerin korunması hakkında detaylı bilgiye <a href="#" className='text-blue-600 hover:underline'> buradan</a> ulaşabilirsiniz.
          </p>
          <p className='text-xs p-3 px-4 text-gray-500'>
            Bu site reCAPTCHA ile korunmaktadır. <a href="#" className='text-blue-600 hover:underline'> Google Gizlilik Politikası </a> ve <a href="#" className='text-blue-600 hover:underline'>Kullanım Koşulları </a>  geçerlidir.
          </p>

        </div>
      </LoginContainer>
      <Foot />
    </div>
  )
}


export default Register