import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    totalHits: null,
    hits: [],
    status: Status.IDLE,
    error: null,
    loading: false,
    showModal: false,
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
        } else {
          this.setState({
            totalHits: null,
            hits: [],
            status: Status.REJECTED,
          });
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
  }

  handleFormSearch = query => {
    if (query === '') {
      this.setState({
        query: '',
        totalHits: null,
        hits: [],
        status: Status.REJECTED,
        loading: false,
      });
      toast.warning('Please enter your request!');
    }
    this.setState({
      query,
      page: 1,
      totalHits: null,
      hits: [],
    });
  };

  handleClickLoadMore = () => this.setState(({ page }) => ({ page: page + 1 }));

  handleToggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    if (!this.state.showModal) {
      this.setState({
        largeImageURL: e.target.dataset.source,
        tags: e.target.alt,
      });
    }
  };

  render() {
    const { hits, showModal, largeImageURL, tags, status } = this.state;
    return (
      <>
        <Searchbar onSearch={this.handleFormSearch} />
        <ToastContainer autoClose={3000} />
        {status === 'pending' && <Loader />}
        {hits.length !== 0 && (
          <ImageGallery images={hits} onClick={this.handleToggleModal} />
        )}
        {hits.length >= API.searchParams.per_page && (
          <Button onClick={this.handleClickLoadMore} />
        )}
        {showModal && (
          <Modal onClose={this.handleToggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
