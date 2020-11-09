// eslint-disable-next-line strict
'use strict';

import 'normalize.css';
import './index.sass';

import 'loading-attribute-polyfill';

import header from '@blocks/header/header';
import reviewsSlider from '@blocks/reviews-slider/reviewsSlider';
import subscribe from '@blocks/subscribe/subscribe';


header();
reviewsSlider();
subscribe();
