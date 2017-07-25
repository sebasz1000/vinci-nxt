import Header from './Header'


export default (props) => (
    <div className='container'>
        <Header />
        { props.children }
    </div>
)