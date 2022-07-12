import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './services/images-api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import * as API from './services/images-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    query: '',
    page: 1,
    imagesOnPage: 0,
    totalImages: 0,
    isLoading: false,
    showModal: false,
    images: null,
    error: null,
    currentImageUrl: null,
    currentImageDescription: null,
    status: Status.IDLE,
    totalHits: null,
    hits: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const { query: prevQuery, page: prevPage } = prevState;
    if (
      (prevQuery.trim() !== query.trim() && query.trim().length > 0) ||
      page > prevPage
    ) {
      API.searchParams.q = query;
      API.searchParams.page = page;
      this.setState({ status: Status.PENDING });
      try {
        const { totalHits, hits } = await API.getImages(API.searchParams);
        if (totalHits || hits.length) {
          if (page === 1) {
            toast.success(`We found ${totalHits} pictures for you!`);
          }
          if (page >= 1) {
            this.setState(prevState => ({
              totalHits: totalHits,
              hits: prevState.hits ? [...prevState.hits, ...hits] : hits,
              status: Status.RESOLVED,
            }));
          }
        }
      } catch (error) {
        this.setState({
          totalHits: null,
          hits: [],
          status: Status.REJECTED,
          error,
        });
        toast.error(`${error}`);
      }
    }
    if (prevState.hits !== this.state.hits) {
      window.scrollBy({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevState.query !== query) {
      this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

      fetchImages(query)
        .then(({ hits, totalHits }) => {
          const imagesArray = hits.map(hit => ({
            id: hit.id,
            description: hit.tags,
            smallImage: hit.webformatURL,
            largeImage: hit.largeImageURL,
          }));

          return this.setState({
            page: 1,
            images: imagesArray,
            imagesOnPage: imagesArray.length,
            totalImages: totalHits,
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() =>
          this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
        );
    }

    if (prevState.page !== page && page !== 1) {
      this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

      fetchImages(query, page)
        .then(({ hits }) => {
          const imagesArray = hits.map(hit => ({
            id: hit.id,
            description: hit.tags,
            smallImage: hit.webformatURL,
            largeImage: hit.largeImageURL,
          }));

          return this.setState(({ images, imagesOnPage }) => {
            return {
              images: [...images, ...imagesArray],
              imagesOnPage: imagesOnPage + imagesArray.length,
            };
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() =>
          this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
        );
    }
  }

  getSearchRequest = query => {
    this.setState({ query });
  };

  onNextFetch = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
        currentImageUrl: currentImageUrl,
        currentImageDescription: currentImageDescription,
      }));
    }
  };

  render() {
    const {
      images,
      imagesOnPage,
      totalImages,
      isLoading,
      showModal,
      currentImageUrl,
      currentImageDescription,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.getSearchRequest} />

        {images && <ImageGallery images={images} openModal={this.openModal} />}

        {isLoading && <Loader />}

        {imagesOnPage >= 12 && imagesOnPage < totalImages && (
          <Button onNextFetch={this.onNextFetch} />
        )}

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            currentImageUrl={currentImageUrl}
            currentImageDescription={currentImageDescription}
          />
        )}

        <ToastContainer />
      </>
    );
  }
}

export default App;
