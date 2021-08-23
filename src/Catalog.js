import React, {useState} from 'react';
import dishes from './dishes'
import Rating from "./Rating"

const Catalog = () => {
    const [products, setDishes] = useState(dishes)
    return (
            <div className="row">
                    {products.map(item => (
                           <div className="col-4" key='id'>
                              <div className="box-icon">
                                  <img src={item.image} alt=""/>
                                 <div className='main-content'>
                                     <h2>{item.title}</h2>
                                     <span>{item.price}$</span>
                                 </div>
                                  <p className='desc'>{item.desc}</p>
                                  <Rating rating={item.rating}/>
                              </div>
                           </div>
                    )
                    )
                    }
            </div>
    );
};

export default Catalog;