import Header from './Header'
import colors , {blue} from '../../styles/colors.js'

export default (props) => (
    <div id='main' className='container'>
        <Header/>
        { props.children }
    
    <style jsx global>{`
        .container{
            max-width: 90%;
            margin: 0 auto;
        }
    `}</style>
    </div>
)