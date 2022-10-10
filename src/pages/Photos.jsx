import React ,{useContext} from 'react'
import Image from '../components/Image'
import {Context} from '../Context'
import {getClass} from '../utils'
export default function Photos(){
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img, index) =>(
        <Image key={img.id} img={img} className={getClass(index)}/>
    ))


    return(
        <main className='photos'>
            {imageElements}
        </main>
    )
}