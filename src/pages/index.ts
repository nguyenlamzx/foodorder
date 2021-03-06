import toArray from "lodash/toArray";

export const pages = {
  tutorial: { title: 'Tutorial', component: 'TutorialPage' },
  welcome: { title: 'Welcome', component: 'WelcomePage' },
  tabs: { title: 'Tabs', component: 'TabsPage' },
  cards: { title: 'Cards', component: 'CardsPage' },
  content: { title: 'Content', component: 'ContentPage' },
  login: { title: 'Login', component: 'LoginPage' },
  signup: { title: 'Signup', component: 'SignupPage' },
  master: { title: 'Master Detail', component: 'ListMasterPage' },
  menu: { title: 'Menu', component: 'MenuPage' },
  settings: { title: 'Settings', component: 'SettingsPage' },
  search: { title: 'Search', component: 'SearchPage' }
};

export const pagesAsArray = toArray(pages);

// The page the user lands on after opening the app and without a session
export const FirstRunPage = pages.tutorial.component;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = pages.tabs.component;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = pages.master.component;
export const Tab2Root = pages.search.component;
export const Tab3Root = pages.settings.component;
