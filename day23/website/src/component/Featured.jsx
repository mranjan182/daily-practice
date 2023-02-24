import React from 'react'
import '../component/Featured.css'


const Featured = () => {
  return (
    <>
    <div className="featured">
        <div className="featureditem">
            <img className='featuredimg' src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGFqJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="title">
                <h1>Mumbai</h1>
                <h2>1458 properties</h2>
            </div>
        </div>
        <div className="featureditem">
            <img className='featuredimg' src="https://images.unsplash.com/photo-1633702738734-443da2c18f3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRhaiUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="title">
                <h1>Jaipur</h1>
                <h2>1300 properties</h2>
            </div>
        </div>
        <div className="featureditem">
            <img className='featuredimg' src="https://media.istockphoto.com/id/907076702/photo/luxury-hotels-on-the-bank-of-a-lake.jpg?b=1&s=170667a&w=0&k=20&c=eaCUP4q8ePISQJvAl_bzR6KI5K1jtvAon8v1_ov0kzk=" alt="" />
            <div className="title">
                <h1>Kerala</h1>
                <h2>1160 properties</h2>
            </div>
        </div>
    </div>

    </>
  )
}

export default Featured