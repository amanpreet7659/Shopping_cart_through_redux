import Hedder from "./Hedder";

const Placed = ({show})=>{

    const local=JSON.parse(localStorage.getItem('placedorders'))
    console.log(local,"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    return (<div>
    <Hedder/>
    </div>)
}

export default Placed