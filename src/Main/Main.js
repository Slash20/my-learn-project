import '../Main/Main.css';
import articles from '../data/articles.json';

function Main() {
    return (
        <div className="Main">
            {articles.map(item => 
            <selection>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
            </selection>)}
        </div>
    )
}

export default Main;