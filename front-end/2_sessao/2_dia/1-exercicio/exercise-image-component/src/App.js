import React from 'react';

class App extends React.Component {
  state = {
    imageUrl: '',
    isLoading: true,
  };

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => this.setState({ imageUrl: data.message, isLoading: false }));
  };

  render() {
    const { imageUrl, isLoading } = this.state;
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <>
        <h1>Doguinhos</h1>
        <button type="button" onClick={this.fetchDog}>
            Novo doguinho!
        </button>
        <div>
            {}
            <img src={imageUrl} alt="Doguinho aleatório" />
        </div>
        </>
    );
  }
}

export default App;
