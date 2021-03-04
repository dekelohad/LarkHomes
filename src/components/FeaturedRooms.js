import React, { Component } from 'react';
import Title from './Title';
import { RoomContext } from '../context';
import Room from './Room';
import Loading from './Loading';
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(house => {
      return <Room key={house.id} house={house} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured homes" />
        <div className="featured-homes-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}