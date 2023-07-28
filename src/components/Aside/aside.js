import './aside.css';
import flower from '../../pics/flower.png';

const Aside = () => {
    return (
        <aside className='aside-bar'>
            <img className='side-bar-pic' src={flower} alt='flower'/>
        </aside>
    );
}


export default Aside;
