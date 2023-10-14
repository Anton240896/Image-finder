import React, { Component } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { fetchRequestApi } from './Api/Api';

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
    counter: 0,
    loading: false,
    error: false,
  };

  //   /*======= QUERY SEARCHBAR ========*/

  handleSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
    });
  };
  //   /*=========== LOAD-MORE BUTTON + 1 PAGE =============*/

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState + 1 }));
  };

  //   /*======== HTTP REQUEST =========*/

  async componentDidUpdate(prevProps, prevState) {
    const stateQuery = this.state.query;
    const statePage = this.state.page;
    const prevStateQuery = prevState.query;
    const prevStatePage = prevState.page;
    const { page, query } = this.state;

    if (prevStateQuery !== stateQuery || prevStatePage !== statePage) {
      try {
        this.setState({ loading: true, error: false });
        const responseData = await fetchRequestApi(page, query);
        toast.success('✅ Yes! We found images.');
        this.setState(prevState => ({
          images: [...prevState.images, ...responseData.hits],
          counter: responseData.counter,
        }));
      } catch (error) {
        console.log('Error:', error);
        this.setState({ error: true });
        toast.error('❌ No! Sorry, no images found, please try again!');
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  //   /*======== RENDER ========*/

  render() {
    const { images, loading, error, counter } = this.state;
    const HTTP_REQUEST = this.componentDidUpdate;
    const LoadMoreButton = this.handleLoadMore;

    return (
      <AppWrapper>
        <SearchBarContainer onSubmit={HTTP_REQUEST} />
        {loading && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 && images.length < counter && !loading && !error && (
          <Button onClick={LoadMoreButton}>Load more</Button>
        )}
        <Toaster position="top-right" />
      </AppWrapper>
    );
  }
}
