export enum ExternalURL {
  discord,
  twitter,
  notion,
  discourse,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return 'https://discord.gg/Y8nCkStHtR';
    case ExternalURL.twitter:
      return 'https://twitter.com/kingsazit';
    case ExternalURL.notion:
      return 'https://docs.kingsdao.wtf/';
    case ExternalURL.discourse:
      return 'https://discourse.kingsdao.wtf/';
  }
};
