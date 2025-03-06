import React from 'react'

const Experience = () => {
  return (
    <div  className='bg-black text-white py-20 ' id='experience'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
           <div className='mt-16' id='experience'>
                <h2 className='text-3xl font-bold text-center mb-8'>Job Experience</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Experience 1 */}
                    <div className='bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform'>
                        <h3 className='text-xl font-semibold text-green-400'>MindBridge</h3>
                        <p className='text-gray-400'>Data Uploading - 1 Year</p>
                        <p className='mt-2 text-gray-300'>Worked as a data uploader, ensuring accurate and efficient data management.</p>
                    </div>
                    
                    {/* Experience 2 */}
                    <div className='bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform'>
                        <h3 className='text-xl font-semibold text-blue-400'>Hospital Receptionist</h3>
                        <p className='text-gray-400'>1 Year Experience</p>
                        <p className='mt-2 text-gray-300'>Managed front desk operations, handled patient queries, and maintained hospital records.</p>
                    </div>

                    {/* Experience 3 */}
                    <div className='bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform'>
                        <h3 className='text-xl font-semibold text-yellow-400'>Digital Marketing</h3>
                        <p className='text-gray-400'>1 Year Experience</p>
                        <p className='mt-2 text-gray-300'>Specialized in social media marketing to drive engagement and growth.</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Experience