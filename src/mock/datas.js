// users
const users = [
  {
    userId: "dev_user1",
    userName: "name:dev_user1",
    password: "dev_user1_pass",
  },
  {
    userId: "dev_user2",
    userName: "name:dev_user2",
    password: "dev_user2_pass",
  },
];

export { users };

// impressions
const impressions = [
  {
    impressionId: 1,
    title: "感想タイトル1",
    text: "感想本文1",
    ratioValue: 3,
    updateDate: "2021/04/01",
    favoriteCount: "12345",
    isFavorite: true,
    tags: ["webデザイン", "web"],
    book: {
      isbn: "4694844365260",
      title: "Webデザインの見本帳",
      author: "森本友理/ラナデザインアソシエイツ",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5266/9784844365266.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user1",
      userName: "dev_user1name",
    },
  },
  {
    impressionId: 2,
    title: "感想タイトル2",
    text: "感想本文2",
    ratioValue: 4,
    updateDate: "2021/04/02",
    favoriteCount: "12345",
    isFavorite: false,
    tags: ["プログラミング", "php", "Laravel"],
    book: {
      isbn: "9784798060996",
      title: "PHPフレームワークLaravel入門第2版",
      author: "掌田津耶乃",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0996/9784798060996.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user1",
      userName: "dev_user1name",
    },
  },
  {
    impressionId: 3,
    title: "感想タイトル3",
    text: "感想本文3",
    ratioValue: 5,
    updateDate: "2021/04/03",
    favoriteCount: "12345",
    isFavorite: false,
    tags: ["システム開発", "みずほ銀行"],
    book: {
      isbn: "9784296105359",
      title: "みずほ銀行システム統合、苦闘の19年史",
      author: "日経コンピュータ/山端 宏実",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5359/9784296105359.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user2",
      userName: "dev_user2name",
    },
  },
  {
    impressionId: 4,
    title: "感想タイトル4",
    text: "感想本文4",
    ratioValue: 1,
    updateDate: "2021/04/03",
    favoriteCount: "12345",
    isFavorite: false,
    tags: ["webデザイン", "web"],
    book: {
      isbn: "9784802612289",
      title: "動くWebデザインアイディア帳",
      author: "久保田涼子/杉山彰啓",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2289/9784802612289.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user2",
      userName: "dev_user2name",
    },
  },
  {
    impressionId: 5,
    title: "感想タイトル5",
    text: "感想本文5",
    ratioValue: 5,
    updateDate: "2021/04/03",
    favoriteCount: "12345",
    isFavorite: false,
    tags: ["Git"],
    book: {
      isbn: "9784295004837",
      title: "サルでもわかるGit入門",
      author: "大串肇/アクツユミ",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4837/9784295004837.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user2",
      userName: "dev_user2name",
    },
  },
  {
    impressionId: 6,
    title: "感想タイトル6",
    text: "感想本文6",
    ratioValue: 5,
    updateDate: "2021/04/03",
    favoriteCount: "12345",
    isFavorite: false,
    tags: ["React", "環境構築"],
    book: {
      isbn: "9784844378778",
      title: "【POD】React環境構築の教科書",
      author: "井手 優太",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8778/9784844378778.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user2",
      userName: "dev_user2name",
    },
  },
  {
    impressionId: 7,
    title: "感想タイトル7",
    text: "感想本文7",
    ratioValue: 4,
    updateDate: "2021/04/02",
    favoriteCount: "12345",
    isFavorite: true,
    tags: ["プログラミング", "Vue"],
    book: {
      isbn: "9784844398691",
      title: "＜POD＞後悔しないためのVueコンポーネント設計",
      author: "中島直博",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8691/9784844398691.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user1",
      userName: "dev_user1name",
    },
  },
  {
    impressionId: 8,
    title: "感想タイトル8",
    text: "感想本文8",
    ratioValue: 4,
    updateDate: "2021/04/02",
    favoriteCount: "12345",
    isFavorite: true,
    tags: ["プログラミング"],
    book: {
      isbn: "9784891004552",
      title: "コードコンプリート（上）第2版",
      author: "ティーヴ・マコネル/クイープ",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8910/89100455.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user1",
      userName: "dev_user1name",
    },
  },
  {
    impressionId: 9,
    title: "感想タイトル9",
    text: "感想本文9",
    ratioValue: 4,
    updateDate: "2021/04/02",
    favoriteCount: "12345",
    isFavorite: true,
    tags: ["データベース", "Oracle", "資格"],
    book: {
      isbn: "9784798138176",
      title: "pgrade to Oracle Database 12c［1Z0-060］試験対応 オラクルマスター教科書Gold Oracle Database 12c Upgrade[新機能]編",
      author: "株式会社 システム・テクノロジー・アイ/代田 佳子",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8176/9784798138176.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user1",
      userName: "dev_user1name",
    },
  },
  {
    impressionId: 10,
    title: "感想タイトル10",
    text: "感想本文10",
    ratioValue: 4,
    updateDate: "2021/04/02",
    favoriteCount: "12345",
    isFavorite: true,
    tags: ["英語", "ドキュメント"],
    book: {
      isbn: "9784798149493",
      title: "現場で困らない！ ITエンジニアのための英語リーディング",
      author: "株式会社 システム・テクノロジー・アイ/代田 佳子",
      image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9493/9784798149493.jpg?_ex=120x120"
    },
    user: {
      userId: "dev_user1",
      userName: "dev_user1name",
    },
  },
];

export { impressions };