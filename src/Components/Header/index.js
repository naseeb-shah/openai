import { MdNotifications } from "react-icons/md"
import { IoReorderThreeSharp } from "react-icons/io5";
import './index.css'

const Header = ({ name, onToggle }) => {
    const toggle = () => {
        onToggle()
    }
    return(
        <div className='header-container'>
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                {/* <IoReorderThreeSharp size={25} onClick={toggle}/> */}
                <h2 className="heading">{name}</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} >
                <MdNotifications size={30} />
                <img src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' alt='profile' className='profile-photo' />
            </div>
        </div>
    )
}

export default Header