// 第一引数には文字列、第二引数には配列(要素は文字列)が入る
const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;