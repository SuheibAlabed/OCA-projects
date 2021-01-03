

export default function Newspaper(){

    return(
        <div className="container bg-dark p-4 ">
            <div className="row justify-content-around  px-2 ">
                <div className="col-10" >
                    <h3 className="text-primary">Don't Miss a Post! Stay Tuned</h3>
                    <input className="col-12 py-2 "  type="text"/>
                    <label className="text-primary row p-2"><input name="wpgdprc" value="1" required="" type="checkbox" className="m-2"/>
                        I have read and agree to the <a className=" text-light " href="#"><h6 className="pl-1 py-1"> More Info.</h6></a></label>
                </div>
                <div className="row justify-content-between align-items-center px-2 pb-4">
                    <a className=" text-light more" href="#"><h4 className="mb-0">More Info.</h4></a>
                </div>
            </div>


        </div>
    )
}