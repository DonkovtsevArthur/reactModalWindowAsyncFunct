import React from "react";

class Json extends React.Component {
  state = {
    name: "",
    street: "",
    city: "",
    zipcode: "",
    isView: true
  };
  getName(name) {
    this.setState({ name });
  }
  getGeo(address) {
    this.setState({
      street: address.street,
      city: address.city,
      zipcode: address.zipcode
    });
  }
  async getFetch(id) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  componentWillMount() {
    this.getFetch(3).then(data => {
      this.getName(data.name);
      this.getGeo(data.address);
      this.setState({isView:!this.state.isView})
    });
  }
  render() {
    const { name, street, city, zipcode, isView } = this.state;
    return (
      <div>
        {isView ? (
          <p>Загружаю....</p>
        ) : (
          <div>
            <h2>{name}</h2>
            <span>Улица: {street}</span>
            <br />
            Город: {city}
            <br />
            <span> Индекс: {zipcode}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Json;
