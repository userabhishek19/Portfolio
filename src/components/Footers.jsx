import React from 'react'
import {FaGithubSquare, FaInstagram} from 'react-icons'
const Footers = () => {
  return (
    <div class="mt-12 w-max-[800px] border-t border-gray-500 text-center">
        <p class="my-5 text-gray-500 ">33 Test <br/> Test</p>
        <div class="inline-flex text-gray-500 gap-4 text-3xl">
            <FaGithubSquare/>
            <FaInstagram/>
            <FaGithubSquare/>
            <FaInstagram/>
        </div>
      
    </div>
  )
}

export default Footers
