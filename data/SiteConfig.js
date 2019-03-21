const config = {
  siteTitle: "Kurinsu", // Site title.
  siteTitleShort: "Kurinsu", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Kurinsu", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://kurinsu.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Développement personnel, inspiration et productivité.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-59515367-9", // GA tracking ID.
  disqusShortname: "kurinsu", // Disqus shortname.
  postDefaultCategoryID: "developpement", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Cala", // Username to display in the author segment.
  userEmail: "hello@kurinsu.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Insta",
      url: "https://instagram.com/kurinsu",
      iconClassName: "fa fa-instagram",
      icon: "/icons/instagram.svg"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/kurinsu",
      iconClassName: "fa fa-twitter",
      icon: "/icons/twitter.svg"
    },
    {
      label: "Facebook",
      url: "https://facebook.com/kurinsu",
      iconClassName: "fa fa-envelope",
      icon: "/icons/facebook.svg"
    },
    {
      label: "Medium",
      url: "https://medium.com/kurinsu",
      iconClassName: "fa fa-envelope",
      icon: "/icons/medium.svg"
    }
  ],
  menuLink: [
    {
      name: 'home',
      link: '/'
    },
    {
      name: 'productivite',
      link: '/productivite'
    },
    {
      name: 'inspiration',
      link: '/inspiration'
    },
    {
      name: 'developpement',
      link: '/developpement'
    },
    {
      name: 'newsletter',
      link: '#newsletter'
    }
  ],
  copyright: "Copyright © 2019. Kurinsu", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
