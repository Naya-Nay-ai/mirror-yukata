const styleTypeSelect = document.querySelector("#styleType");
const yukataColorSelect = document.querySelector("#yukataColor");
const patternSelect = document.querySelector("#pattern");
const obiSelect = document.querySelector("#obi");
const itemSelect = document.querySelector("#item");
const footwearSelect = document.querySelector("#footwear");
const arrangeSelect = document.querySelector("#arrange");
const arrangeLabel = document.querySelector("#arrangeLabel");

const coordName = document.querySelector("#coordName");
const coordDescription = document.querySelector("#coordDescription");
const colorChips = document.querySelector("#colorChips");
const coordDetails = document.querySelector("#coordDetails");
const orderText = document.querySelector("#orderText");
const yukataBodyPreview = document.querySelector("#yukataBodyPreview");
const yukataObiPreview = document.querySelector("#yukataObiPreview");
const previewCaption = document.querySelector("#previewCaption");
const yukataPatternPreview = document.querySelector("#yukataPatternPreview");
const yukataBodyFillPreview = document.querySelector("#yukataBodyFillPreview");
const yukataObiFillPreview = document.querySelector("#yukataObiFillPreview");
const yukataItemPreview = document.querySelector("#yukataItemPreview");
const yukataFootwearPreview = document.querySelector("#yukataFootwearPreview",);
const yukataArrangePreview = document.querySelector("#yukataArrangePreview",);
const yukataObiTexturePreview = document.querySelector("#yukataObiTexturePreview");

const copyOrderTextButton = document.querySelector("#copyOrderTextButton");
const copyOrderTextStatus = document.querySelector("#copyOrderTextStatus");

const previewAssets = {
  women: {
    body: "assets/svg/women-yukata-basic.svg",
    obi: "assets/svg/women-obi-basic.svg",
    bodyFill: "assets/svg/women-yukata-fill.svg",
    obiFill: "assets/svg/women-obi-fill.svg",
    caption: "女性浴衣プレビュー",
  },
  men: {
    body: "assets/svg/men-yukata-basic.svg",
    obi: "assets/svg/men_obi-basic.svg",
    bodyFill: "assets/svg/men-yukata-fill.svg",
    obiFill: "assets/svg/men-obi-fill.svg",
    caption: "男性浴衣プレビュー",
  },
};
const patternPreviewAssets = {
  women: {
    asagao: "assets/svg/patterns/women-asagao.png",
    ajisai: "assets/svg/patterns/women-ajisai.png",
    kingyo: "assets/svg/patterns/women-kingyo.png",
    hanabi: "assets/svg/patterns/women-hanabi.png",
    tsubaki: "assets/svg/patterns/women-tsubaki.png",
    ryusui: "assets/svg/patterns/women-ryusui.png",
    kurage: "assets/svg/patterns/women-kurage.png",
    "moon-gradient": "assets/svg/patterns/women-tsukiyo.png",
    "dot-pop": "assets/svg/patterns/women-dot.png",
    neko: "assets/svg/patterns/women-neko.png",
    "geometric-pop": "assets/svg/patterns/women-geometric-pop.png",
    "star-pop": "assets/svg/patterns/women-star-pop.png",
    
  },
  
  men: {
    stripe: "assets/svg/patterns/men-stripe.png",
    ichimatsu: "assets/svg/patterns/men-ichimatsu.png",
    ryusui: "assets/svg/patterns/men-ryusui.png",
    tonbo: "assets/svg/patterns/men-tonbo.png",
    geometric: "assets/svg/patterns/men-geometric.png",
  },
};

 const obiTexturePreviewAssets = {
 women: "assets/svg/patterns/women-obi-texture.png",
 };

const itemPreviewAssets = {
  women: {
kinchaku: "assets/svg/item/women-item-kinchaku.png",
kago: "assets/svg/item/women-item-kago.png",
"wasou-bag": "assets/svg/item/women-item-wasou-bag.png",
"hoshitsuki-beads": "assets/svg/item/women-item-hoshitsuki-beads.png",
"asagao-bamboo": "assets/svg/item/women-item-asagao-bamboo.png",
"retro-gamaguchi": "assets/svg/item/women-item-retro-gamaguchi.png",   
"retro-flower-gamaguchi": "assets/svg/item/women-item-retro-flower-gamaguchi.png",
"kurage-kinchaku": "assets/svg/item/women-item-kurage-kinchaku.png",
"black-bamboo": "assets/svg/item/women-item-black-bamboo.png",
yumekawa: "assets/svg/item/women-item-yumekawa.png",    
},

  men: {
    shingen: "assets/svg/item/men-item-shingen.png",
    sensu: "assets/svg/item/men-item-sensu.png",
    uchiwa: "assets/svg/item/men-item-uchiwa.png",
  },
};
const footwearPreviewAssets = {
   women: {
  "shiroki-geta": "assets/svg/footwear/women-footwear-shiroki-geta.png",
  "black-geta": "assets/svg/footwear/women-footwear-black-geta.png",
  zori: "assets/svg/footwear/women-footwear-zori.png",
  },
  men: {
    yakigeta:
      "assets/svg/footwear/men-footwear-yakigeta.png",
    "black-hanao-geta":
      "assets/svg/footwear/men-footwear-black-hanao-geta.png",
    setta:
      "assets/svg/footwear/men-footwear-setta.png",
  },
};
const arrangePreviewAssets = {
  women: {
    none: "",
    "white-lace": "assets/svg/arrange/women-arrange-white-lace.png",
    "black-lace": "assets/svg/arrange/women-arrange-black-lace.png",
    antique: "assets/svg/arrange/women-arrange-antique.png",
    romantic: "assets/svg/arrange/women-arrange-romantic.png",
  },
};


const options = {
  styleTypes: [
    {
      id: "women",
      label: "女性浴衣",
      orderText: "女性浴衣コーデ",
    },
    {
      id: "men",
      label: "男性浴衣",
      orderText: "男性浴衣コーデ",
    },
  ],

  yukataColors: {
    women: [
      {
        id: "enji",
        label: "臙脂",
        swatch: "#8f3545",
        mood: "艶やかで落ち着いた",
        orderText: "深い臙脂色の浴衣",
      },
      {
        id: "nadeshiko",
        label: "撫子ピンク",
        swatch: "#e9a4b7",
        mood: "やわらかく甘い",
        orderText: "撫子ピンクの浴衣",
      },
      {
        id: "budou",
        label: "葡萄色",
        swatch: "#684b73",
        mood: "しっとり華やかな",
        orderText: "葡萄色の浴衣",
      },
      {
        id: "wisteria",
        label: "薄藤",
        swatch: "#b9a7db",
        mood: "上品で涼しげな",
        orderText: "薄藤色の浴衣",
      },
      {
        id: "navy",
        label: "藍色",
        swatch: "#263d73",
        mood: "凛とした",
        orderText: "深い藍色の浴衣",
      },
      {
        id: "asagi",
        label: "浅葱色",
        swatch: "#6fb7bd",
        mood: "爽やかな",
        orderText: "浅葱色の浴衣",
      },
      {
        id: "shiraai",
        label: "白藍",
        swatch: "#c6dce6",
        mood: "淡く透明感のある",
        orderText: "白藍色の浴衣",
      },
      {
        id: "fukamidori",
        label: "深緑",
        swatch: "#31594d",
        mood: "静かで気品のある",
        orderText: "深緑色の浴衣",
      },
      {
        id: "kinari",
        label: "生成り",
        swatch: "#f3ead8",
        mood: "やさしく抜け感のある",
        orderText: "生成り色の浴衣",
      },
      {
        id: "sumi",
        label: "墨黒",
        swatch: "#2c2a31",
        mood: "大人っぽくモードな",
        orderText: "墨黒の浴衣",
      },
    ],

    men: [
      {
        id: "enji",
        label: "臙脂",
        swatch: "#753642",
        mood: "渋く色気のある",
        orderText: "臙脂色の男性浴衣",
      },
      {
        id: "fujinezu",
        label: "藤鼠",
        swatch: "#786f88",
        mood: "上品で柔らかな",
        orderText: "藤鼠色の男性浴衣",
      },
      {
        id: "kon",
        label: "紺",
        swatch: "#24375f",
        mood: "落ち着いた",
        orderText: "紺色の男性浴衣",
      },
      {
        id: "haiao",
        label: "灰青",
        swatch: "#6f8298",
        mood: "涼しげで静かな",
        orderText: "灰青色の男性浴衣",
      },
      {
        id: "seiji",
        label: "青磁",
        swatch: "#719b91",
        mood: "穏やかで涼やかな",
        orderText: "青磁色の男性浴衣",
      },
      {
        id: "fukamidori",
        label: "深緑",
        swatch: "#2f5a4a",
        mood: "落ち着きのある",
        orderText: "深緑の男性浴衣",
      },
      {
        id: "kinari",
        label: "生成り",
        swatch: "#f3ead8",
        mood: "軽やかな",
        orderText: "生成り色の男性浴衣",
      },
      {
        id: "shiracha",
        label: "白茶",
        swatch: "#d4c1a5",
        mood: "軽やかで品のある",
        orderText: "白茶色の男性浴衣",
      },
      {
        id: "kogecha",
        label: "焦茶",
        swatch: "#5b3b2f",
        mood: "渋く温かみのある",
        orderText: "焦茶色の男性浴衣",
      },
      {
        id: "sumi",
        label: "墨黒",
        swatch: "#2c2a31",
        mood: "端正で渋い",
        orderText: "墨黒の男性浴衣",
      },
    ],
  },
  patterns: {
    women: [
      {
        id: "asagao",
        label: "朝顔",
        category: "王道",
        namePart: "朝顔",
        mood: "涼しげ",
        orderText: "朝顔柄",
      },
      {
      id: "ajisai",
      label: "あじさい",
      category: "季節",
      namePart: "あじさい",
      mood: "やさしく涼やかな",
      orderText: "あじさい柄",
      },
      {
        id: "kingyo",
        label: "金魚",
        category: "王道",
        namePart: "金魚",
        mood: "夏祭りらしい",
        orderText: "金魚柄",
      },
      {
        id: "hanabi",
        label: "花火",
        category: "王道",
        namePart: "花火",
        mood: "華やかな",
        orderText: "花火柄",
      },
      {
        id: "tsubaki",
        label: "椿",
        category: "レトロ",
        namePart: "椿",
        mood: "レトロで上品な",
        orderText: "椿柄",
      },
      {
        id: "ryusui",
        label: "流水",
        category: "王道",
        namePart: "流水",
        mood: "しっとりした",
        orderText: "流水柄",
      },
      {
        id: "kurage",
        label: "海月",
        category: "モダン",
        namePart: "海月",
        mood: "透明感のある",
        orderText: "淡い光をまとった海月柄",
      },
      {
        id: "moon-gradient",
        label: "月夜グラデーション",
        category: "モダン",
        namePart: "月夜",
        mood: "幻想的な",
        orderText: "月夜を思わせるグラデーション柄",
      },
       {
        id: "neko",
       label: "猫",
       category: "ポップ",
       namePart: "猫",
       mood: "遊び心のある",
       orderText: "猫とまたたびの花柄",
       },
       {
       id: "geometric-pop",
       label: "幾何ポップ",
       category: "モダン",
       namePart: "幾何",
       mood: "軽やかでモダンな",
       orderText: "幾何ポップ柄",
       },
{
  id: "dot-pop",
  label: "ドット",
  category: "ポップ",
  namePart: "ドット",
  mood: "軽やかな",
  orderText: "ドット柄",
},
       {
       id: "star-pop",
       label: "星あそび",
       category: "ポップ",
       namePart: "星",
       mood: "きらめく",
       orderText: "星あそび柄",
       },
    ],

    men: [
      {
        id: "plain",
        label: "無地",
        category: "王道",
        namePart: "無地",
        mood: "すっきりした",
        orderText: "無地",
      },
      {
        id: "stripe",
        label: "縞",
        category: "王道",
        namePart: "縞",
        mood: "粋な",
        orderText: "縞柄",
      },
      {
        id: "ichimatsu",
        label: "市松",
        category: "レトロ",
        namePart: "市松",
        mood: "端正な",
        orderText: "市松柄",
      },
      {
        id: "ryusui",
        label: "流水",
        category: "王道",
        namePart: "流水",
        mood: "涼しげな",
        orderText: "流水柄",
      },
      {
        id: "tonbo",
        label: "とんぼ",
        category: "王道",
        namePart: "とんぼ",
        mood: "夏らしい",
        orderText: "とんぼ柄",
      },
      {
        id: "geometric",
        label: "幾何学",
        category: "モダン",
        namePart: "幾何学",
        mood: "モダンな",
        orderText: "幾何学柄",
      },
      ],
      },

  obi: {
women: [
  {
    id: "white",
    label: "白",
    swatch: "#ffffff",
    orderText: "白い帯",
  },
  {
    id: "kinari",
    label: "生成り",
    swatch: "#f3ead8",
    orderText: "生成りの帯",
  },
  {
    id: "nanohana",
    label: "菜の花色",
    swatch: "#ffec47",
    orderText: "菜の花色の帯",
  },
  {
    id: "yamabuki",
    label: "山吹",
    swatch: "#e2ae42",
    orderText: "山吹色の帯",
  },
  {
    id: "gold",
    label: "くすみ金",
    swatch: "#c9a25d",
    orderText: "くすみ金の帯",
  },
  {
    id: "red",
    label: "朱赤",
    swatch: "#c8544b",
    orderText: "朱赤の帯",
  },
  {
    id: "benihi",
    label: "紅緋",
    swatch: "#e83929",
    orderText: "紅緋の帯",
  },
  {
    id: "usumomo",
    label: "薄桃",
    swatch: "#e7b3bf",
    orderText: "淡い薄桃色の帯",
  },
  {
    id: "tsutsuji",
    label: "躑躅色",
    swatch: "#e95295",
    orderText: "躑躅色の帯",
  },
  {
    id: "budou",
    label: "葡萄色",
    swatch: "#6d3b6f",
    orderText: "葡萄色の帯",
  },
  {
    id: "ruri",
    label: "瑠璃",
    swatch: "#315ba8",
    orderText: "鮮やかな瑠璃色の帯",
  },
  {
    id: "turquoise",
    label: "青緑",
    swatch: "#2f9b91",
    orderText: "鮮やかな青緑色の帯",
  },
  {
    id: "black",
    label: "墨黒",
    swatch: "#29262d",
    orderText: "墨黒の帯",
  },
],

men: [
  {
    id: "brown",
    label: "焦茶",
    swatch: "#5b3b2f",
    orderText: "焦茶の帯",
  },  
  {
    id: "enji",
    label: "臙脂",
    swatch: "#793743",
    orderText: "深い臙脂色の帯",
  },
  {
    id: "yamabuki",
    label: "山吹",
    swatch: "#c99a32",
    orderText: "落ち着いた山吹色の帯",
  },
  {
    id: "navy",
    label: "濃紺",
    swatch: "#1d2d52",
    orderText: "濃紺の帯",
  },
  {
    id: "seiji",
    label: "青磁",
    swatch: "#739b91",
    orderText: "青磁色の帯",
  },
  {
    id: "green",
    label: "深緑",
    swatch: "#2f5a4a",
    orderText: "深緑の帯",
  },
  {
    id: "kinari",
    label: "生成り",
    swatch: "#f3ead8",
    orderText: "生成りの帯",
  },
  {
    id: "ginnezu",
    label: "銀鼠",
    swatch: "#aaa8ae",
    orderText: "銀鼠色の帯",
  },
  {
    id: "gray",
    label: "灰色",
    swatch: "#777d86",
    orderText: "灰色の帯",
  },
  {
    id: "black",
    label: "黒",
    swatch: "#222222",
    orderText: "黒い帯",
  },
],
  },

  items: {
    women: [
      {
        id: "kinchaku",
        label: "巾着",
        orderText: "小さな巾着",
      },
      {
        id: "kago",
        label: "かごバッグ",
        orderText: "かごバッグ",
      },
      {
        id: "wasou-bag",
        label: "小さめ和装バッグ",
        orderText: "小さめの和装バッグ",
      },
      {
  id: "hoshitsuki-beads",
  label: "星月ビーズバッグ",
  orderText: "星月モチーフのビーズバッグ",
},
{
  id: "asagao-bamboo",
  label: "朝顔バンブーバッグ",
  orderText: "朝顔柄のバンブーハンドルバッグ",
},
{
  id: "retro-gamaguchi",
  label: "レトロがま口バッグ",
  orderText: "レトロながま口バッグ",
},
{
  id: "retro-flower-gamaguchi",
  label: "レトロ花がま口",
  orderText: "レトロな花柄のがま口バッグ",
},
{
  id: "kurage-kinchaku",
  label: "くらげ巾着",
  orderText: "海月モチーフの幻想的な巾着バッグ",
},
{
  id: "black-bamboo",
  label: "黒かごバッグ",
  orderText: "黒い編みかごバッグ",
},
{
  id: "yumekawa",
  label: "ゆめかわ巾着",
  orderText: "淡いピンクのゆめかわ巾着バッグ",
},  
    ],

men: [
  {
    id: "none",
    label: "なし",
    orderText: "持ち物なし",
  },
  {
    id: "shingen",
    label: "信玄袋",
    orderText: "信玄袋",
  },
  {
    id: "sensu",
    label: "扇子",
    orderText: "扇子",
  },
  {
    id: "uchiwa",
    label: "団扇",
    orderText: "団扇",
  },
],
  },

footwear: {
 women: [
    {
      id: "shiroki-geta",
      label: "白木下駄",
      orderText: "白木の下駄",
    },
    {
      id: "black-geta",
      label: "黒塗り下駄",
      orderText: "黒塗りの下駄",
    },
    {
      id: "zori",
      label: "草履",
      orderText: "草履",
    },
],

  men: [
    {
      id: "yakigeta",
      label: "焼桐下駄",
      orderText: "焼桐の下駄",
    },
    {
      id: "black-hanao-geta",
      label: "黒鼻緒の下駄",
      orderText: "黒鼻緒の下駄",
    },
    {
      id: "setta",
      label: "雪駄",
      orderText: "雪駄",
    },
  ],
},
  
  arrangeSets: [
    {
      id: "none",
      label: "なし",
      mood: "浴衣らしく軽やか",
      orderText: "キモノアレンジなし",
      detail: "浴衣らしくシンプルに着る",
    },
{
  id: "white-lace",
  label: "白レース清楚セット",
  mood: "清楚で涼しげ",
orderText:
  "白レースの半襟を、着物の襟元から少し見えるように重ねる。白レース足袋、白レースの帯揚げ、帯締め。浴衣の柄にあわせた可憐なモチーフの帯留めを合わせる",
detail:
  "白レース半襟（襟元に重ねる）・白レース足袋・白レース帯揚げ・白レース帯締め・柄にあわせたモチーフ帯留め",
},
{
  id: "black-lace",
  label: "黒レースモードセット",
  mood: "モードで大人っぽい",
  orderText:
    "黒レースの半襟を、着物の襟元から少し見えるように重ねる。黒レース足袋、黒レースの帯揚げ、帯締め。浴衣の柄にあわせたモダンなモチーフの帯留めを合わせる",
  detail:
    "黒レース半襟（襟元に重ねる）・黒レース足袋・黒レース帯揚げ・黒レース帯締め・柄にあわせたモチーフ帯留め",
},
{
  id: "antique",
  label: "生成りアンティークセット",
  mood: "レトロで物語感のある",
  orderText:
    "生成りレースの半襟を、着物の襟元から少し見えるように重ねる。生成りレースの足袋、生成りレースの帯揚げ、帯締め。浴衣の柄にあわせたアンティーク調の帯留めを合わせる",
  detail:
    "生成りレース半襟（襟元に重ねる）・生成り足袋・生成り帯揚げ・生成り帯締め・柄にあわせたアンティーク調帯留め",
},
{
  id: "romantic",
  label: "淡色ロマンティックセット",
  mood: "淡く甘い",
  orderText:
    "淡い色のレース半襟を、着物の襟元から少し見えるように重ねる。淡色の足袋、幻想的な淡色の帯揚げ、帯締め。浴衣の柄にあわせたモチーフの帯留めを合わせる",
  detail:
    "淡色レース半襟（襟元に重ねる）・淡色の足袋・淡色帯揚げ・淡色帯締め・柄にあわせたモチーフ帯留め",
},
  ],
};

const defaultSelectionIds = {
  women: {
    yukataColor: "asagi",
    pattern: "ajisai",
    obi: "kinari",
    item: "kinchaku",
    footwear: "shiroki-geta",
    arrange: "none",
  },
  men: {
    yukataColor: "kon",
    pattern: "stripe",
    obi: "brown",
    item: "none",
    footwear: "yakigeta",
  },
};

function fillSelect(select, values) {
  select.innerHTML = "";

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value.id;
    option.textContent = value.label;
    select.append(option);
  });
}

function findSelected(values, selectedId) {
  return values.find((value) => value.id === selectedId) ?? values[0];
}

function getCurrentType() {
  return styleTypeSelect.value || "women";
}

function getCurrentSelection() {
  const type = getCurrentType();

  const yukataColor = findSelected(
    options.yukataColors[type],
    yukataColorSelect.value,
  );
  const pattern = findSelected(
    options.patterns[type],
    patternSelect.value,
  );
  const obi = findSelected(
    options.obi[type],
    obiSelect.value,
  );
  const item = findSelected(
    options.items[type],
    itemSelect.value,
  );
  const footwear = findSelected(
    options.footwear[type],
    footwearSelect.value,
  );
  const arrange =
    type === "women"
      ? findSelected(options.arrangeSets, arrangeSelect.value)
      : null;

  return {
    type,
    styleType: findSelected(options.styleTypes, type),
    yukataColor,
    pattern,
    obi,
    item,
    footwear,
    arrange,
  };
}

function createCoordName(selection) {
  if (selection.type === "men") {
    return `${selection.pattern.namePart}と${selection.yukataColor.label}の夏夜浴衣`;
  }

  if (selection.arrange && selection.arrange.id !== "none") {
    return `${selection.pattern.namePart}と${selection.arrange.label.replace("セット", "")}の夕涼み浴衣`;
  }

  return `${selection.pattern.namePart}と${selection.yukataColor.label}の夕涼み浴衣`;
}

function createDescription(selection) {
if (selection.type === "men") {
  const itemText =
    selection.item.id === "none"
      ? ""
      : `${selection.item.label}を添えて、`;

  return `${selection.yukataColor.mood}${selection.yukataColor.label}の浴衣に、${selection.pattern.mood}${selection.pattern.label}を合わせた男性浴衣コーデ。${selection.obi.label}の帯で引き締め、${itemText}花火の夜にすっと馴染む装いに。`;
}

  const arrangeText =
    selection.arrange && selection.arrange.id !== "none"
      ? `さらに${selection.arrange.label}を重ねて、${selection.arrange.mood}雰囲気を足しています。`
      : "浴衣らしい軽やかさをそのまま楽しめる、シンプルな装いです。";

  return `${selection.yukataColor.mood}${selection.yukataColor.label}の浴衣に、${selection.pattern.mood}${selection.pattern.label}を合わせた女性浴衣コーデ。${selection.obi.label}の帯と${selection.item.label}で、夏夜に映えるバランスに。${arrangeText}`;
}

function createOrderText(selection) {
const baseParts = [
  selection.yukataColor.orderText,
  selection.pattern.orderText,
  selection.obi.orderText,
  selection.footwear.orderText,
];

  if (selection.item.id !== "none") {
    baseParts.push(selection.item.orderText);
  }

  if (selection.type === "women" && selection.arrange) {
    if (selection.arrange.id !== "none") {
      baseParts.push(selection.arrange.orderText);
    }
  }

  return `${baseParts.join("、")}。髪型・顔立ち・体型・固定アクセサリーは元のアバター設定を優先してください。`;
}

function createChip(label, color) {
  const chip = document.createElement("span");
  chip.className = "chip";

  const swatch = document.createElement("span");
  swatch.className = "swatch";
  swatch.style.background = color;

  const text = document.createElement("span");
  text.textContent = label;

  chip.append(swatch, text);
  return chip;
}

function renderColorChips(selection) {
  colorChips.innerHTML = "";
  colorChips.append(
    createChip(`浴衣：${selection.yukataColor.label}`, selection.yukataColor.swatch),
    createChip(`帯：${selection.obi.label}`, selection.obi.swatch),
  );

  if (selection.type === "women" && selection.arrange?.id !== "none") {
    colorChips.append(createChip("アレンジ：レース", "#f8f1ff"));
  }
}

function addDetail(label, value) {
  const dt = document.createElement("dt");
  dt.textContent = label;

  const dd = document.createElement("dd");
  dd.textContent = value;

  coordDetails.append(dt, dd);
}

function renderDetails(selection) {
  coordDetails.innerHTML = "";

  addDetail("衣装タイプ", selection.styleType.label);
  addDetail("浴衣", selection.yukataColor.label);
  addDetail("柄", `${selection.pattern.label} / ${selection.pattern.category}`);
  addDetail("帯", selection.obi.label);
  addDetail("履物", selection.footwear.label);
  addDetail("小物", selection.item.label);

  if (selection.type === "women") {
    addDetail("キモノアレンジ", selection.arrange.detail);
  }
}

function setMaskLayer(layer, assetPath, color) {
  layer.style.backgroundColor = color;
  layer.style.webkitMaskImage = `url("${assetPath}")`;
  layer.style.maskImage = `url("${assetPath}")`;
  layer.style.webkitMaskRepeat = "no-repeat";
  layer.style.maskRepeat = "no-repeat";
  layer.style.webkitMaskPosition = "center";
  layer.style.maskPosition = "center";
  layer.style.webkitMaskSize = "contain";
  layer.style.maskSize = "contain";
}

function renderPreview(selection) {
if (
  !yukataBodyPreview ||
  !yukataObiPreview ||
  !yukataBodyFillPreview ||
  !yukataObiFillPreview ||
  !yukataObiTexturePreview ||
  !yukataPatternPreview ||
  !yukataArrangePreview ||
  !yukataItemPreview ||
  !yukataFootwearPreview ||
  !previewCaption
) {
  return;
}

  const assets = previewAssets[selection.type];
  const patternAsset =
    patternPreviewAssets[selection.type]?.[selection.pattern.id] ?? "";
  setMaskLayer(
    yukataBodyFillPreview,
    assets.bodyFill,
    selection.yukataColor.swatch,
  );

  setMaskLayer(
    yukataObiFillPreview,
    assets.obiFill,
    selection.obi.swatch,
  );

  const obiTextureAsset =
  selection.type === "women"
    ? obiTexturePreviewAssets.women
    : "";

if (obiTextureAsset) {
  yukataObiTexturePreview.src = obiTextureAsset;
  yukataObiTexturePreview.hidden = false;
} else {
  yukataObiTexturePreview.removeAttribute("src");
  yukataObiTexturePreview.hidden = true;
}

if (patternAsset) {
  yukataPatternPreview.src = patternAsset;
  yukataPatternPreview.hidden = false;
} else {
  yukataPatternPreview.removeAttribute("src");
  yukataPatternPreview.hidden = true;
}
  yukataBodyPreview.src = assets.body;
  yukataObiPreview.src = assets.obi;
  previewCaption.textContent = assets.caption;

const arrangeAsset =
  selection.type === "women"
    ? arrangePreviewAssets.women[selection.arrange?.id] ?? ""
    : "";

if (arrangeAsset) {
  yukataArrangePreview.src = arrangeAsset;
  yukataArrangePreview.hidden = false;
} else {
  yukataArrangePreview.removeAttribute("src");
  yukataArrangePreview.hidden = true;
}
  
  const itemAsset =
    itemPreviewAssets[selection.type]?.[selection.item.id] ?? "";

  if (itemAsset) {
    yukataItemPreview.src = itemAsset;
    yukataItemPreview.hidden = false;
  } else {
    yukataItemPreview.removeAttribute("src");
    yukataItemPreview.hidden = true;
  }
const footwearAsset =
  footwearPreviewAssets[selection.type]?.[
    selection.footwear.id
  ] ?? "";

if (footwearAsset) {
  yukataFootwearPreview.src = footwearAsset;
  yukataFootwearPreview.hidden = false;
} else {
  yukataFootwearPreview.removeAttribute("src");
  yukataFootwearPreview.hidden = true;
}


  
}
function renderCard() {
  const selection = getCurrentSelection();

  coordName.textContent = createCoordName(selection);
  coordDescription.textContent = createDescription(selection);
  orderText.textContent = createOrderText(selection);

  renderColorChips(selection);
  renderDetails(selection);
  renderPreview(selection);
}

function refreshOptionsForType() {
  const type = getCurrentType();

  fillSelect(yukataColorSelect, options.yukataColors[type]);
  fillSelect(patternSelect, options.patterns[type]);
  fillSelect(obiSelect, options.obi[type]);
  fillSelect(itemSelect, options.items[type]);
  fillSelect(footwearSelect, options.footwear[type]);

  if (type === "women") {
    arrangeLabel.hidden = false;
    arrangeSelect.disabled = false;
    fillSelect(arrangeSelect, options.arrangeSets);
  } else {
    arrangeLabel.hidden = true;
    arrangeSelect.disabled = true;
    arrangeSelect.innerHTML = "";
  }

const defaults = defaultSelectionIds[type];

if (defaults) {
  yukataColorSelect.value = defaults.yukataColor;
  patternSelect.value = defaults.pattern;
  obiSelect.value = defaults.obi;
  itemSelect.value = defaults.item;
  footwearSelect.value = defaults.footwear;

  if (type === "women") {
    arrangeSelect.value = defaults.arrange;
  }
}
  
  renderCard();
}

function setCopyStatus(message) {
  if (!copyOrderTextStatus) return;

  copyOrderTextStatus.textContent = message;

  if (message) {
    window.setTimeout(() => {
      copyOrderTextStatus.textContent = "";
    }, 1800);
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";

  document.body.append(textarea);
  textarea.select();

  const success = document.execCommand("copy");
  textarea.remove();

  return success;
}

async function copyOrderText() {
  const text = orderText.textContent.trim();

  if (!text) {
    setCopyStatus("コピーする文がありません");
    return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else if (!fallbackCopyText(text)) {
      throw new Error("copy failed");
    }

    setCopyStatus("コピーしました");
  } catch (error) {
    setCopyStatus("コピーに失敗しました");
  }
}

function init() {
  fillSelect(styleTypeSelect, options.styleTypes);
  fillSelect(arrangeSelect, options.arrangeSets);

  styleTypeSelect.addEventListener("change", refreshOptionsForType);

  [
    yukataColorSelect,
    patternSelect,
    obiSelect,
    itemSelect,
    footwearSelect,
    arrangeSelect,
  ].forEach((select) => {
    select.addEventListener("change", renderCard);
  });

if (copyOrderTextButton) {
  copyOrderTextButton.addEventListener("click", copyOrderText);
}
  
  refreshOptionsForType();
}

init();
