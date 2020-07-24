import React from 'react'
import Header from './Header'
import './../CSS Files/Home.css'
import ItemCard from './ItemCard'
function Home() {
    return (
        
        <div className="home">
            <img src="https://media.gq.com/photos/57a2002b18941d5256600df7/16:9/w_2560%2Cc_limit/gosha-half-cab-vans-01.jpg" alt="" className="home__banner"/>
        
        {/* Shoes List  */}
            {/* List 1 */}
            <div className="home__itemList">
                {/* Item 1 */}
                <ItemCard id="1" name = "First Item in Store" price={23.99} rating={4} image="https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"></ItemCard>

                {/* Item 2 */}
                <ItemCard id="2" name = "First Item in Store" price={25.37} rating={4} image="https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"></ItemCard>
            </div>
            {/* List 2 */}
            <div className="home__itemList">
                {/* Item 1 */}
                <ItemCard id="3" name = "First Item in Store" price={19.27} rating={4} image="https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"></ItemCard>

                {/* Item 2 */}
                <ItemCard id="4" name = "First Item in Store" price={15.25} rating={4} image="https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"></ItemCard>

                {/* Item 3 */}

                <ItemCard id="5" name = "First Item in Store" price={10.87} rating={4} image="https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"></ItemCard>

            </div>

            {/* List 3 */}
            <div className="home__itemList">
                {/* Item 1 */}
                <ItemCard id="6" name = "First Item in Store" price={11.99} rating={4} image="https://images.ctfassets.net/od02wyo8cgm5/mwtuRPXhS6CHwQB0oqA11/78ebafbc12f98797c0fd7b5c4cd266bd/cloud_x_1-fw19-midnight_cobalt-m-g1.png"></ItemCard>
            </div>    
        </div>
    )
}

export default Home
