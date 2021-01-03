import MenuCard from "../Component/menuCard";

import "../Component/menuPage.css";

import food2 from "../Component/food2.jpg";
import food3 from "../Component/food3.jpg";

import food6 from "../Component/food6.jpg";
import food5 from "../Component/food5.jpg";

import food8 from "../Component/food8.jpg";





// import food2 from "../Component/food2.jpg";

// import ScrollableTabsButtonForce from "./Component/menuTab";

export default function FirstCategory(props) {
    const menuCardData = [

        {
			id: 1,
			img: food2,
			dishName: "Potato and cheese balls",
			content:
				" made with fresh potatoes and Italian cheese, in addition to some spices",
			cost: 54,
		},

		{
			id: 2,
			dishName: "Risotto",
			img: food3,
			content:
				" A unique part of traditional Italian cuisine, it is a creamy rice dish cooked in a broth with saffron. ",
			cost: 30,
		},
		{
			id: 3,
			dishName: "Ragu alla Bolognese ",
			img:
				"https://images.pexels.com/photos/5807019/pexels-photo-5807019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			content:
				" Ragu is the meat sauce used in many Italian pasta dishes, and is made with ground meat. ",
			cost: 45,
		},
		{
			id: 4,
			dishName: "Fettuccine Alfredo",
			img: food5,
			content:
				"The famous traditional Fettuccine Alfredo dish, topped with chicken and broccoli. ",
			cost: 45,
		},
		{
			id: 5,
			dishName: "Tomato cheese with oil ",
			img: food6,
			content:
				" One of the most popular dishes made of tomatoes, cheese cubes, in addition to olive oil. ",
			cost: 30,
		},
		{
			id: 6,
			dishName: "Pasta",
			img: food8,
			content:
				"  A plate of pasta with white cream sauce, in addition to some vegetables. ",
			cost: 40,
		},
		{
			id: 7,
			dishName: "Sliced tomato on bread",
			img:
				"https://images.pexels.com/photos/2532006/pexels-photo-2532006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			content:
				" A quick easy appetizer, featuring fresh tomatoes and herbed ricotta. Perfect for game day .",
			cost: 30,
		},

		{
			id: 8,
			dishName: "Shrimp pasta",
			img:
				"https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			content:
				"Pasta with white sauce, as well as some fresh shrimp, organic sauce and  vegetables. ",
			cost: 55,
        },
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
                            id={item.id}
                            setItem={props.setItem}

                        />
                    )
                }
            </div>

        </div>


    );
}
