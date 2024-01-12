import React from 'react'
import { Chrono } from 'react-chrono';

function Education() {

  const items = [
    {
      title: "June 2019 - June 2023",
      cardTitle: "B.Tech , Information Technology",
      cardSubtitle: "Haldia Institute Of Technology",
      cardDetailedText: "CGPA - 8.44",
    },
    {
      title: "March 2018",
      cardTitle: "Higher Secondary Education (XII)",
      cardSubtitle: "Burdwan sri Ramashis Hindi High School",
      cardDetailedText: "Score - 83.80%",
    },
    {
      title: "March 2016",
      cardTitle: "Secondary Education (X)",
      cardSubtitle: "Burdwan Nehru Vidyamandir High School",
      cardDetailedText: "Score - 74%",
    }
  ];

  return (
    <div className=' w-full flex justify-center'>
    
      <div className=' text-lg mt-8 w-full'>
        <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardWidth={400}
        hideControls={true}
        theme={{
          cardBgColor: "#2f3651",
          cardTitleColor:"#347efd",
          cardDetailsColor: 'white',
          cardSubtitleColor:"white",
          titleColor:"#8ebbff",
          primary:"white",
          secondary:"#8ebbff"
          
        }}
          

      />
      </div>
      
    </div>
  )
}

export default Education