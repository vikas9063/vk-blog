import React from 'react'
import './style.scss'
import ServiceCard from './servicecard/ServiceCard';



const ServiceSection = () => {

  const cardData = [{
    "id": "1",
    "serviceDesc": "Technology questions on your mind? Bring them to the table, and let your teammates help you navigate the answers.",
    "serviceTitle": "Technology questions on your mind",
    "imageData": "assets/images/s1.jpg"
  },
  {
    "id": "2",
    "serviceDesc": "Uncover the mysteries of technology by asking questions and seeking advice from your teammates. Your tech journey starts with a simple inquiry.",
    "serviceTitle": "Uncover the mysteries of technology",
    "imageData": "assets/images/s2.jpg"
  },
  {
    "id": "3",
    "serviceDesc": "Curious about technology? Ask away! Our team is here to address any doubts or inquiries you may have,reach out and get support from your team for quick resolutions.",
    "serviceTitle": "Curious about technology related stuff?",
    "imageData": "assets/images/s3.jpg"
  }
  ];


  return (
    <div className='service-container'>
      <div className="service-header">
        <h4>About Our Services</h4>
      </div>
      <div className="card-wrapper-services">
        {cardData.map((card) => (
          <ServiceCard card={card} key={card.id} />
        ))}

      </div>
    </div>
  )
}

export default ServiceSection