import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../store/FirebaseContext'
import SkeltonPost from './SkeltonPost'

const Posts = lazy(()=>import ('./Posts'))

function QuickmenuTab() {

  const {firestore,db} = useContext(FirebaseContext)
  const [products,setProducts] = useState([])

  useEffect(()=>{
   async function getProducts(){
    try{const query = firestore.query( firestore.collection(db,'products'))
    const prodata = await firestore.getDocs(query)
    const newProducts = prodata.docs.map(doc => doc.data());
    console.log(newProducts);
    setProducts([...newProducts])
  }catch(err){
    console.log(err);
  }
  }
  getProducts()
  },[firestore,db])



  return (
    <div className='flex justify-center my-10'>
        <div className=' p-8 bg-[#e9e9e9] w-[90%]'>
            <h3 className='font-semibold tracking-wider my-2'>Quick Menu</h3>
            <div className='flex flex-wrap gap-12'>
            {
              products.map(product=>{
                return(
                  <Suspense key={product.id} fallback={<SkeltonPost/>}>
                  <Posts key={product.id} data={product} />
                  </Suspense>
                )
              })
            }

            </div>
        </div>
    </div>
  )
}

export default QuickmenuTab
