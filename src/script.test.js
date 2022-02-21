//テストする関数を読み込む
import googleSearch from './script';

//dbのデータモックをつくる
const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

//関連するテストをブロックにまとめる
describe('googleSearch', () => {
  //入力に対して正しい結果が返ってくるかどうか
  it('is searching google', () => {
    //検索結果0(空)のケース
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    //検索結果が2のケース
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  //入力がundefined, nullの場合に正しい結果(空)が返ってくるかどうか
  it('work with undefined and null input', () => {
    //入力がundefinedのケース
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    //入力がnullのケース
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  //入力に対して4つのデータが該当する場合にちゃんと3つのデータが返ってくるかどうか
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});