
import Card from './Card';
import Header from './Header';
import data from './data'

export default function App() {

  const cards = data.map((item) => (
    <Card 
      key={item.id}
      {...item} />
  ))

  return (
    <div className="App">
      <Header />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}
