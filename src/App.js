import Card from './components/Card';
import './App.css';
import emojipedia from './data/emojiBank';


function emoji(data){
  return(
    <Card 
   id={data.id} 
   emoji={data.emoji} 
   name={data.name}
   meaning={data.meaning}
   />

  )
}
      







function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>

    <dl className="dictionary">
      {
        emojipedia.map(emoji)
      }
      
      
    </dl>
  </div>
  );
}

export default App;
