import Header from "./components/Header";
import Card from "./components/Card";

import cardData from "./data/card";

function App() {
  const cards = cardData.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Header />
      <section className="mx-auto flex max-w-6xl flex-col gap-10 p-20">
        {cards}
      </section>
    </>
  );
}

export default App;
