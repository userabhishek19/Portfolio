import React from 'react'

const Phone = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center ' id='contact'>
        <div class="max-w-[1200px] mx-auto " >
            <div class="grid grid-cols1 md:grid-cols-2">
                <div class="p-6 mr-2 bg-gray-900 mt-2 rounded-xl flex flex-col justify-around" >
                <h1 class="text-4xl sm:text-5xl text-white">
                    Contact<span>Me</span>
                </h1>
                <p class="text-normal text-lg  text-gray-400 mt-2">
                    Let's connect on LinkedIn <br/> or send me an  Email
                </p>
                <div class="flex items-center mt-2 text-gray-400">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M3 8l7.89 5.26L20 8"></path>
    </svg>
    <div class="ml-4 text-md tracking-wide w-40">
        <p>Abhishek Jha</p>
    </div>
</div>

                </div>
                <form action="https://app.getform.io/forms/1aMR0BbW" method='post' class="p-6 flex flex-col justify-center max-w-[700px]">
                    <div class="flex flex-col">
                        <input type="name" name="name" id="name" placeholder='Full Name' class="w-100 mt-2 p-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white  required " />
                    </div>

                    <div class="flex flex-col mt-2">
                        <input type="email" name="email" id="email" placeholder='Email' class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white  required " />
                    </div>
                    <div class="flex flex-col mt-2">
                        <textarea name="message"  id="message" placeholder='Your Message' class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white required  " ></textarea>
                    </div>

                    <button type='submit' class=" bg-primary-color text-white py-3 px-6 rounded-lg mt-3 hover:bg-red">
                        Submit
                    </button>
                </form>

            </div>
        </div>
     
    </div>
  )
}

export default Phone
