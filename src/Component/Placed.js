import Hedder from "./Hedder";

const Placed = ({ show }) => {

    const local = JSON.parse(localStorage.getItem('placedorders'))
    const local1 = JSON.parse(localStorage.getItem('All'))
    console.log(local, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    console.log("All ", local1);
    return (<div>
        <Hedder />
        <div className="display">
            {local.map((i, j) => {
                return (<div >
                    <div className="product">
                        {/* <lable>{i.category}</lable>
                            <br></br> */}
                        {/* <p>{i.description}</p> */}
                        <br></br>
                        <img src={i.data.data.image} />
                        <br></br>
                        <label>Price is : {i.data.data.price}</label><br></br>
                        <br></br>
                        <lable>{i.data.data.title}</lable>
                        <br></br>
                        <br></br>
                        <lable><b>Quantity : </b>{i.quantity}</lable>
                        {/* <input className="cartNumber" min="1" type="number" onChange={(e) => {
                        }} placeholder={i.quantity} value={i.quantity} /> */}
                    </div>


                </div>)
            })
            }
        </div>
        {/* <button className="checkout" onClick={handleCheckout}>Checkout</button> */}
    </div>)
}

export default Placed