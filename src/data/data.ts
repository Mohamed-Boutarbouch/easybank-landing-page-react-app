import icon1 from '../assets/icon-online.svg';
import icon2 from '../assets/icon-budgeting.svg';
import icon3 from '../assets/icon-onboarding.svg';
import icon4 from '../assets/icon-api.svg';

import image1 from '../assets/image-currency.jpg';
import image2 from '../assets/image-restaurant.jpg';
import image3 from '../assets/image-plane.jpg';
import image4 from '../assets/image-confetti.jpg';

export const navLinks: string[] = ['home', 'about', 'contact', 'blog', 'careers'];

interface FeaturesTypes {
  id: number;
  icon: string;
  title: string;
  body: string;
}

export const featuresData: FeaturesTypes[] = [
  {
    id: 1,
    icon: icon1,
    title: 'Online Banking',
    body: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Simple Budgeting',
    body: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. ',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Fast Onboarding',
    body: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Open API',
    body: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];

interface ArticlesTypes {
  id: number;
  image: string;
  author: string;
  title: string;
  body: string;
}

export const articlesData: ArticlesTypes[] = [
  {
    id: 1,
    image: image1,
    author: 'claire robinson',
    title: 'Receive money in any currency with no fees',
    body: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single',
  },
  {
    id: 2,
    image: image2,
    author: 'wilson hutton',
    title: 'Treat yourself without worrying about money',
    body: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you',
  },
  {
    id: 3,
    image: image3,
    author: 'wilson hutton',
    title: 'Take your Easybank card wherever you go',
    body: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you',
  },
  {
    id: 4,
    image: image4,
    author: 'claire robinson',
    title: 'Our invite-only Beta accounts are now live!',
    body: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site',
  },
];

export const footerLinks: string[] = [
  'about us',
  'contact',
  'blog',
  'careers',
  'support',
  'privacy policy',
];
