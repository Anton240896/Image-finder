import React, { Component } from 'react';

import toast, { Toaster } from 'react-hot-toast';
// import { SearchQuery } from './api';
import axios from 'axios';

import { AppWrapper } from './Layout';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/modal';
import { SearchBarContainer } from './Searchbar/SearchBar';

//      /*======== STATE =========*/

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };
  //   /*======= QUERY SEARCHBAR ========*/

  handleSubmit = query => {
    query.preventDefault();
    const trimQuery = query.trim();

    if (trimQuery === '') {
      toast.error('Please enter a search query!');
      return;
    }

    //   /*======== UPDATE QUERY ========*/

    this.setState({
      query: trimQuery,
      page: 1,
      images: [],
    });
  };
  //   /*=========== LOAD-MORE BUTTON + 1 PAGE =============*/

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState + 1 }));
  };

  //   /*======== HTTP REQUEST =========*/

  async componentDidMount() {
    const URL_API = 'https://pixabay.com/api/';
    const KEY_API = '39074822-7a439c7ecb254f2e87bade55b';

    const params = new URLSearchParams({
      key: KEY_API,
      // q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      page: 1,
      per_page: 27,
    });

    this.setState({ loading: false });

    try {
      // console.log('Base URL:', axios.defaults.baseURL);
      const response = await axios.get(`${URL_API}?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      this.Setstate({ error: true });
      toast.error(
        'Sorry, no images were found for your search, please try again.!'
      );
    } finally {
      this.Setstate({ loading: false });
    }
  }

  //   /*======== CONPONENT DID UPDATE ========*/

  componentDidUpdate(prevProps, prevState) {
    const stateQuery = this.state.query;
    const statePage = this.state.page;
    const prevStateQuery = prevState.query;
    const prevStatePage = prevState.page;

    if (prevStateQuery !== stateQuery || prevStatePage !== statePage) {
    }
  }
  //   /*======== RENDER ========*/

  render() {
    const { images, loading } = this.state;
    const HTTP_REQUEST = this.componentDidUpdate;
    const LoadMoreButton = this.handleLoadMore;

    return (
      <AppWrapper>
        <SearchBarContainer onSubmit={HTTP_REQUEST} />
        <ImageGallery images={images} />
        {loading ? <Loader /> : <ImageGallery images={images} />}

        <Button onClick={LoadMoreButton} />
        {<Toaster position="top-right" />}
      </AppWrapper>
    );
  }
}
