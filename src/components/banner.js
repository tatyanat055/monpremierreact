import logo from '../assets/logo.png'
import '../styles/banner.css'

function Banner({children}) {
    let title = 'La maison jungle'
    return (
        <div className='banner-lmj'>
            {children}
        </div>
    )
}

export default Banner