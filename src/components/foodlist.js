import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
	const [foods, setFoods] = useState([]);
	const [itemName, setItemName] = useState("");
	const [foodType, setFoodType] = useState("");
	const [spicinessLevel, setSpicinessLevel] = useState("");
	const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
	const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
	const [isFormEnabled, setIsFormEnabled] = useState(false);

	const [hateU, setHateU] = useState(false);
	function iamPissed() {
		setIsFirstCardEnabled(true);
		setIsSecondCardEnabled(true);
		setHateU(true);
		// setIsFormEnabled(true);
	}
	const handleFormClick = () => {
		setIsFormEnabled(true);
	};

	function meganFox() {
		const newFood = {
			name: itemName,
			type: foodType,
			hott: spicinessLevel,
		};
		setFoods((prev) => [...prev, newFood]);
		setIsFirstCardEnabled(false);
		setIsSecondCardEnabled(false);
		setHateU(false);
		setIsFormEnabled(false);
		setItemName("");
		setFoodType("");
		setSpicinessLevel("");
	}
	function meguunFaxx(val) {
		setFoods((prev) => prev.filter((ele) => ele.name !== val));
	}
	return (
		<>
			<div className="container">
				<h1>Food Items List</h1>
				<button onClick={iamPissed}>Add Food</button>

				<div className="card-container">
					{isFirstCardEnabled ? (
						<>
							<h2>Item Name:</h2>
							<input
								name="itemName"
								type="text"
								disabled={!isFirstCardEnabled}
								value={itemName}
								onChange={(e) => setItemName(e.target.value)}
							/>
							<h2>Food Type:</h2>
							<input
								name="foodType"
								type="text"
								disabled={!isFirstCardEnabled}
								value={foodType}
								onChange={(e) => setFoodType(e.target.value)}
							/>
							<div className={`card`}>
								<form
									style={{ opacity: isFormEnabled ? 1 : 0.5 }}
									onSubmit={(e) => e.preventDefault()}
									onClick={handleFormClick}
								>
									<h2>Spiciness Level:</h2>
									<input
										name="spicinessLevel"
										type="text"
										disabled={!isFormEnabled}
										value={spicinessLevel}
										onChange={(e) =>
											setSpicinessLevel(e.target.value)
										}
									/>
								</form>
							</div>
						</>
					) : (
						""
					)}
				</div>
				{isFirstCardEnabled ? (
					<div
						className={`card ${
							isSecondCardEnabled ? "" : "disabled"
						}`}
					>
						<button onClick={meganFox}>Save</button>
					</div>
				) : (
					" "
				)}

				<ul className="list">
					{foods.map((ele, index) => (
						<li key={index}>
							{ele.name} ({ele.type}) - Spiciness Level:{" "}
							{ele.hott}
							<button onClick={() => meguunFaxx(ele.name)}>
								Delete
							</button>
						</li>
					))}
					{/* <li>
						{itemName} ({foodType}) - Spiciness Level:{" "}
						{spicinessLevel}
						<button>Delete</button>
					</li> */}
				</ul>
			</div>
		</>
	);
}

export default FoodList;

// original
/* 
return (
		<>
			<div className="container">
				<h1>Food Items List</h1>
				<button onClick={iamPissed}>Add Food</button>

				{hateU && (
					<>
						<div className="card-container">
							<h2>Item Name:</h2>
							<input
								name="itemName"
								type="text"
								disabled={!isFirstCardEnabled}
								value={itemName}
								onChange={(e) => setItemName(e.target.value)}
							/>
							<h2>Food Type:</h2>
							<input
								name="foodType"
								type="text"
								disabled={!isFirstCardEnabled}
								value={foodType}
								onChange={(e) => setFoodType(e.target.value)}
							/>
							<div className={`card`}>
								<form
									style={{ opacity: isFormEnabled ? 1 : 0.5 }}
									onSubmit={(e) => e.preventDefault()}
									onClick={handleFormClick}
								>
									<h2>Spiciness Level:</h2>
									<input
										name="spicinessLevel"
										type="text"
										disabled={!isFormEnabled}
										value={spicinessLevel}
										onChange={(e) =>
											setSpicinessLevel(e.target.value)
										}
									/>
								</form>
							</div>
						</div>
						<div
							className={`card ${
								isSecondCardEnabled ? "" : "disabled"
							}`}
						>
							<button onClick={meganFox}>Save</button>
						</div>
					</>
				)}

				<ul className="list">
					{foods.map((ele, index) => (
						<li key={index}>
							{ele.name} ({ele.type}) = Spiciness Level:{" "}
							{ele.hott}
							<button onClick={() => meguunFaxx(ele.name)}>
								Delete
							</button>
						</li>
					))}
					// {<li>
					// 	{itemName} ({foodType}) - Spiciness Level:{" "}
					// 	{spicinessLevel}
					// 	<button>Delete</button>
					// </li> }
				</ul>
			</div>
		</>
	);


*/
