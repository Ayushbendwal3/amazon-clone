import React from 'react'
import './css/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Hush/Eventspage/GW/Prime_GW_Day_of_Headers_1500x600_Deals._CB408191898_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="ASUS VivoBook S14 Intel Core i5-10210U 10th Gen 14-inch FHD Thin and Light Laptop (8GB RAM/512GB NVMe SSD/Windows 10/MS Office 2019/2GB NVIDIA MX250 Graphics/Indie Black/1.40 kg), S433FL-EB168TS"
          price={68990.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61Hsm%2BC3XfL._SL1500_.jpg"
        />
        <Product
          id="2"
          title="Sony Alpha ILCE 6000Y 24.3 MP Mirrorless Camera with 16-50 mm and 55-210 mm Zoom Lenses (APS-C Sensor, Fast Auto Focus, Eye AF) - Black"
          price={50990.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81j0d8pNBFL._SL1425_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Tata Salt, 1kg"
          price={18.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61n1hm72dlL._SL1000_.jpg"
        />
        <Product
          id="4"
          title="WOW Skin Science Apple Cider Vinegar Foaming Face Wash - No Parabens, Sulphate & Silicones (with built-in brush)"
          price={355.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71P5PVH9CxL._SL1080_.jpg"
        />
        <Product
          id="5"
          title="GIORDANO Cotton Anti Pollution 6 Layer Reusable Outdoor Face Mask (Black, Blue, Maroon and Grey) - Pack of 4"
          price={599.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81pRq5n891L._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
          price={84000.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
        />
      </div>
    </div>
  )
}

export default Home
