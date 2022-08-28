import { moviesFetcher } from '../api';
import { openModal } from './';

export const onTrailerClick = async target => {
  const trailersData = await moviesFetcher.fetchVideos(target.dataset.movie);

  document.querySelector('.frame-wrapper').innerHTML = '';
  let key;

  if (trailersData.length === 0) {
    key = '2U76x2fD_tE';
  } else {
    key = trailersData[0].key;
  }

  trailersData.map(trailerData => {
    if (trailerData.name === 'Official Trailer') {
      key = trailerData.key;
    }
  });
  const markup = `<iframe width="560" height="315" src='https://www.youtube.com/embed/${key}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  document
    .querySelector('.frame-wrapper')
    .insertAdjacentHTML('beforeend', markup);

  openModal(target);
};
