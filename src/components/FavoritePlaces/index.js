import React, { Component } from 'react';
import { connect } from 'react-redux';

import Place from '../Place';
// import { addFavorite } from '../../services/favorites/actions';

import './style.scss';

class SearchResult extends Component {
  render() {
    let { favoritePlaces } = this.props;

    if (favoritePlaces.length === 0) {
      return <div>Empty</div>;
    }

    const places = favoritePlaces.map(p => (
      <Place key={p.zipCode} place={p} noMap />
    ));

    return <div className="favorite-places">{places}</div>;
  }
}

const mapStateToProps = state => ({
  favoritePlaces: state.favorite.places
});

export default connect(
  mapStateToProps,
  {}
)(SearchResult);
