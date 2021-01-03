import MenuCard from "../Component/menuCard";

import "../Component/menuPage.css";




// import ScrollableTabsButtonForce from "./Component/menuTab";

export default function SecondeCategory(props) {
    const menuCardData = [
        {
			id: 10,
			dishName: "Original Pizza",
			img:
				"https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				" Original pizza is the perfect choice, made of meat, cheese and red tomato original sauce. ",
			cost: "40",
		},
		{
			id: 11,
			dishName: "Buffalo Pizza",
			img:
				"https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				" Branch out with some buffalo sauce on your pizza. All its spicy, salty, buttery goodness .",
			cost: "45",
		},
		{
			id: 12,
			dishName: "Veggie Pizza",
			img:
				"https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				" Everything from peppers and mushrooms, to eggplant and onions.",
			cost: "40",
		},
		{
			id: 13,
			dishName: "Shrimp Pizza",
			img:
				"https://images.pexels.com/photos/4553127/pexels-photo-4553127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				"  Pizza with seafood and basil in addition to cheese and our amazing sauce. ",
			cost: "55",
		},

		{
			id: 14,
			dishName: "Margherita Pizza ",
			img:
				"https://images.pexels.com/photos/3731423/pexels-photo-3731423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				"Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. ",
			cost: "50",
		},
		{
			id: 14,
			dishName: "Eggs Pizza",
			img:
				"https://images.pexels.com/photos/845802/pexels-photo-845802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				" Sprinkles of cheese over dough; top with bacon, tomatoes and with eggs cracked all over it.   ",
			cost: "40",
		},]


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
