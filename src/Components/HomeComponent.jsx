const Home = () => {
  return (
    <>
      <div className="home-hero container-fluid">
        <section className="home-text">
          <header className="row home-header">
            Exquisite dining since 1989
          </header>
          <p className="row home-description">
            Experience our seasonal menu in beautiful country
            <br />
            surroundings. Eat the freshest produce from the
            <br /> comfort of our farmhouse.
          </p>
          <div className="row book-button-row">
            <button type="button" className="book-button">
              BOOK A TABLE
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
