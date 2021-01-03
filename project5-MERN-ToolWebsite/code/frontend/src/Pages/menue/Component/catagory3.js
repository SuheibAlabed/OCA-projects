import MenuCard from "../Component/menuCard";

import "../Component/menuPage.css";

import card2 from "../Component/sweets (1).jpg";
import card3 from "../Component/sweets (2).jpg";

import card6 from "../Component/sweets (5).jpg";
import card7 from "../Component/sweets (6).jpg";
import card8 from "../Component/sweets (7).jpg";
import sweet21 from "../Component/sweet21.jpg";
import ahmad from "../Component/ahmad.png"

// import ScrollableTabsButtonForce from "./Component/menuTab";

export default function DrinkCategory(props) {
    const menuCardData = [
        {
			id: 15,
			img:
				"https://images.pexels.com/photos/4329844/pexels-photo-4329844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			dishName: "Chocolate Mousse Cake",
			content:
				"Cake with chocolate sauce stuffed with delicious fruits and more chocolate.",
			cost: "50",
		},

		{
			id: 16,
			dishName: "Ice cream",
			img:
				"https://images.pexels.com/photos/4916466/pexels-photo-4916466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				" It contains less fat, less air and more natural flavors to indulge your senses. ",
			cost: "45",
		},
		{
			id: 17,
			dishName: "Tiramisu",
			img: sweet21,
			content:
				"An elegant and rich layered Italian original dessert made with delicate ladyfinger cookies, and espresso. ",
			cost: "45",
		},
		{
			id: 18,
			dishName: "Panettone bread",
			img: card8,
			content:
				"Is a luxurious and light type of sweet bread that is made using candied fruit.",
			cost: "45",
		},
		{
			id: 19,
			dishName: "Macaroon",
			img: card6,
			content:
				"Macaron Cake is very different from a regular cake and it can be adapted to different flavors.",
			cost: "45",
		},

		{
			id: 20,
			dishName: "Torun",
			img: card7,
			content:
				"A creamy type of dessert, made with ingredients like honey,toasted nuts, and a zest of citrus fruits ",
			cost: "55",
		},
		{
			id:21,
			dishName: "Ahmad E'mar",
			content: "The Best Sweet Ever ♥♥♥♥" +
				"And awesome scrum Master ♥" +

				"We all Love him ♥♥♥♥♥♥♥",

			img:ahmad,
			cost:"Priceless"
		}
	]


    return (
        <div>
            <div className='menuPage'>

                {
                    menuCardData.map((item) =>
                        < MenuCard
                            img={item.img}
                            dishName={item.dishName}
                            content={item.content}
                            cost={item.cost}
                            key={item.id}
							setItem={props.setItem}
                        />
                    )
                }
            </div>

        </div>


    );
}
