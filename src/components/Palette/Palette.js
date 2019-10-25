import React, {Component} from "react";

import InstaService from "../services/InstaService";

import ErrorMessage from "../ErrorMessage/ErrorMessage";


class Palette extends Component {
  InstaService = new InstaService();
  state = {
    error: false,
    photos: [],
  }
  
  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError)  
  }

  onPhotosLoaded = (photos) => {
    this.setState({
      error: false,
      photos,
    })
  }

  onError = () => {
    this.setState({
      error: true
    })
  }

  renderItems(photos) {
    return photos.map( (photo) => {
      const {src, alt} = photo;
      return (
        <img src = {src} alt = {alt}></img>
      )
    })
  }

  render() {
    /* Так лучше, чем писать this.state.photos */
    const {error, photos} = this.state;
    if (error) {
      return <ErrorMessage />
    }

    /* while (loading) {
      return <div>Загрузка..</div> - висит бесконечно
    } */
  
    const items = this.renderItems(photos);

    return(
      <div className="palette">
        {items}
      </div>
    )
  }
}

export default Palette;