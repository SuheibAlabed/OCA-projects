import eventimg from "../../../../Img/event.jpg";

function Event() {
	return (
		<div
			style={{ backgroundColor: "#f1eee8" }}
			className="jumbotron mb-0 rounded-0 "
		>
			<div className="container justify-content-center ">
				<div className="row justify-content-center">
					<img
						src="https://images.pexels.com/photos/3771833/pexels-photo-3771833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						className="col-md-5 mx-0 px-0 "
					/>
					<div className="d-inline-flex flex-column p-4 align-items-center col-md-5 bg-dark mx-0 justify-content-center text-center">
						<h2
							style={{ fontFamily: "Sacramento" }}
							className=" text-primary card-title"
						>
							Mon-Fri 5pm – 7pm
						</h2>
						<br />
						<p className="text-light font-weight-bold">
							Visit Us for Happy Hour!
							<br />
							10% <br />
							off all Entrees
						</p>

						<a className="pt-5 text-light more" href="#">
							<h4 className="mb-0">More Info.</h4>
						</a>
					</div>
				</div>
				<div className="row justify-content-center mt-5">
					<div className="col-md-3  text-center col-sm-6 ">
						<h4 className="card-title font-weight-bold">Address</h4>
						<p className="text-primary mt-3">
							8500,
							<br />
							Italian Street,
							<br />
							Chicago,
							<br />
							IL, 55030
						</p>
					</div>{" "}
					<div className="col-md-3  text-center col-sm-6 ">
						<h4 className="card-title font-weight-bold">Since</h4>
						<p className="text-primary mt-3">
							1985
							<br />
							Luxuries <br />
							Purity <br />
							Originality
						</p>
					</div>{" "}
					<div className="col-md-3 text-center col-sm-6">
						<h4 className="card-title font-weight-bold">Founders</h4>
						<p className="text-primary mt-3">
							since 1757
							<br />
							fom our
							<br />
							ancestors
							<br />
							to you
						</p>
					</div>{" "}
					<div className="col-md-3 text-center col-sm-6">
						<h4 className="card-title font-weight-bold">Business</h4>
						<p className="text-primary mt-3">
							Contact,
							<br />
							Italian Street,
							<br />
							Chicago,
							<br />
							IL, 88030
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
