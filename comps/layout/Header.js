import colors , {blue ,lime} from '../../styles/colors.js'
export default (props) => {
    const colorr = blue;
    return(
    <header>
    <div className='container'>
    <nav>
        <div id='main-logo'>Vinci</div>
        <img id='main-user-pic' className='right circle' src='http://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg' alt='User in session'/>
    </nav>
    </div>
    <style jsx>{`
    img{
        width:42px;
        height:42px;
        border-radius: 50%;
        float:right;
    }
    nav{
    padding: 12px 14px;
    height: 47px;
    }
    nav #main-logo{
        color:#171717;
        font-size: 24px;
        font-weight: bold;
float:left;
    }
  
    `}</style>
    </header>
)}