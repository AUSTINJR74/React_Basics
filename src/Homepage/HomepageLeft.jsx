import React from 'react'

const HomepageLeft = (props) => {


  // Data destructuring
  const {title, description, url, reviews} = props.data;

  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{url}</p>
        <p>{reviews.total}</p>
    </div>
  )
}

export default HomepageLeft;