import '../App.css'

const UserCard = () => {
  let users = ['ali','usman','hamza']

    let clickFunction = (a)=>{
        console.log('clicked')
    }
    return (
        <div>
        {users.map((user)=>(
            <div className='card'>
            <h2>{user}</h2>
            <button onClick={()=> {clickFunction('hi')}}
            className='details_btn'>view details</button>
        </div>
        ))}
        </div>
    )
}

export default UserCard