export const setPageTokens = (pageTokens, nextToken, currentPage) => {
  if (!pageTokens[currentPage - 1]) {
    pageTokens[currentPage - 1] = nextToken;
  }
  return pageTokens;
}

export const setHashTable = (response, videoHashTable, isSearch) => {
  if (isSearch) videoHashTable = {};
  const { items, nextPageToken } = response;
  if (!videoHashTable[nextPageToken]) {
    videoHashTable[nextPageToken] = items;
  }
  return videoHashTable;
}