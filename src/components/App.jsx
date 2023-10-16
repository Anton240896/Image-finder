import { Component } from 'react';

import { fetchRequestApi } from './Api/Api';
import toast, { Toaster } from 'react-hot-toast';

import { AppWrapper } from './Layout';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { SearchBarContainer } from './Searchbar/SearchBar';

//      /*======== STATE =========*/

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: 0,
    loading: false,
    error: false,
    showBtn: false,
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
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  //   /*======== HTTP REQUEST =========*/

  async componentDidUpdate(prevProps, prevState) {
    const prevStateQuery = prevState.query;
    const prevStatePage = prevState.page;
    const { page, query } = this.state;

    if (prevStateQuery !== query || prevStatePage !== page) {
      this.setState({ loading: true, error: false });
      const responseData = await fetchRequestApi(page, query);
      try {
        if (responseData.hits.length === 0) {
          toast.error(' 🥺! Sorry, no images found, please try again!');
        }

        if (responseData.hits.length !== 0) {
          toast.success('😊! We found images');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...responseData.hits],
          showBtn: page < Math.ceil(responseData.totalHits / 12),
        }));
      } catch (error) {
        this.setState({
          error: toast.error(' No! Sorry, no images found, please try again!'),
        });

        // toast.error(' No! Sorry, no images found, please try again!');
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  //   /*======== RENDER ========*/

  render() {
    const { images, loading, error, showBtn } = this.state;

    return (
      <AppWrapper>
        <SearchBarContainer onSubmit={this.handleSubmit} />

        {loading && <Loader />}
        {error && toast.error(' No! Sorry, no images found, please try again!')}

        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p
            style={{
              padding: 100,
              color: 'darkblue',
              textAlign: 'center',
              fontSize: 60,
            }}
          >
            No photos at the moment ... 🥺
          </p>
        )}

        {showBtn && <Button onLoadMore={this.handleLoadMore}>Load more</Button>}

        <Toaster position="top-right" />
      </AppWrapper>
    );
  }
}
