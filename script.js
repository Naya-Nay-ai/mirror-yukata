const styleTypeSelect = document.querySelector("#styleType");
const yukataColorSelect = document.querySelector("#yukataColor");
const patternSelect = document.querySelector("#pattern");
const obiSelect = document.querySelector("#obi");
const itemSelect = document.querySelector("#item");
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
    asagao: "assets/svg/patterns/women-asagao.svg",
    kingyo: "assets/svg/patterns/women-kingyo.png",
    hanabi: "assets/svg/patterns/women-hanabi.png",
    tsubaki: "assets/svg/patterns/women-tsubaki.png",
    ryusui: "assets/svg/patterns/women-ryusui.png",
    "moon-gradient": "assets/svg/patterns/women-tsukiyo.png",
  },
  men: {
    stripe: "assets/svg/patterns/men-stripe.svg",
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
        id: "navy",
        label: "藍色",
        swatch: "#263d73",
        mood: "凛とした",
        orderText: "深い藍色の浴衣",
      },
      {
        id: "nadeshiko",
        label: "撫子ピンク",
        swatch: "#e9a4b7",
        mood: "やわらかく甘い",
        orderText: "撫子ピンクの浴衣",
      },
      {
        id: "wisteria",
        label: "薄藤",
        swatch: "#b9a7db",
        mood: "上品で涼しげな",
        orderText: "薄藤色の浴衣",
      },
      {
        id: "kinari",
        label: "生成り",
        swatch: "#f3ead8",
        mood: "やさしく抜け感のある",
        orderText: "生成り色の浴衣",
      },
      {
        id: "asagi",
        label: "浅葱色",
        swatch: "#6fb7bd",
        mood: "爽やかな",
        orderText: "浅葱色の浴衣",
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
        id: "kon",
        label: "紺",
        swatch: "#24375f",
        mood: "落ち着いた",
        orderText: "紺色の男性浴衣",
      },
      {
        id: "sumi",
        label: "墨黒",
        swatch: "#2c2a31",
        mood: "端正で渋い",
        orderText: "墨黒の男性浴衣",
      },
      {
        id: "haiao",
        label: "灰青",
        swatch: "#6f8298",
        mood: "涼しげで静かな",
        orderText: "灰青色の男性浴衣",
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
        id: "kogecha",
        label: "焦茶",
        swatch: "#5b3b2f",
        mood: "渋く温かみのある",
        orderText: "焦茶色の男性浴衣",
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
        id: "moon-gradient",
        label: "月夜グラデーション",
        category: "モダン",
        namePart: "月夜",
        mood: "幻想的な",
        orderText: "月夜を思わせるグラデーション柄",
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
        id: "kinari",
        label: "生成り",
        swatch: "#f3ead8",
        orderText: "生成りの帯",
      },
      {
        id: "red",
        label: "朱赤",
        swatch: "#c8544b",
        orderText: "朱赤の帯",
      },
      {
        id: "yamabuki",
        label: "山吹",
        swatch: "#e2ae42",
        orderText: "山吹色の帯",
      },
      {
        id: "budou",
        label: "葡萄色",
        swatch: "#6d3b6f",
        orderText: "葡萄色の帯",
      },
      {
        id: "gold",
        label: "くすみ金",
        swatch: "#c9a25d",
        orderText: "くすみ金の帯",
      },
      {
        id: "white",
        label: "白",
        swatch: "#ffffff",
        orderText: "白い帯",
      },
    ],

    men: [
      {
        id: "black",
        label: "黒",
        swatch: "#222222",
        orderText: "黒い帯",
      },
      {
        id: "navy",
        label: "濃紺",
        swatch: "#1d2d52",
        orderText: "濃紺の帯",
      },
      {
        id: "brown",
        label: "焦茶",
        swatch: "#5b3b2f",
        orderText: "焦茶の帯",
      },
      {
        id: "gray",
        label: "灰色",
        swatch: "#777d86",
        orderText: "灰色の帯",
      },
      {
        id: "kinari",
        label: "生成り",
        swatch: "#f3ead8",
        orderText: "生成りの帯",
      },
      {
        id: "green",
        label: "深緑",
        swatch: "#2f5a4a",
        orderText: "深緑の帯",
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
        "白レース半襟、白レース足袋、淡色の帯揚げ、細めの帯締め、小さめの帯留め、草履",
      detail: "白レース半襟・白レース足袋・淡色帯揚げ・細め帯締め・小さめ帯留め・草履",
    },
    {
      id: "black-lace",
      label: "黒レースモードセット",
      mood: "モードで大人っぽい",
      orderText:
        "黒レース半襟、黒レース足袋、濃色の帯揚げ、細めの帯締め、シルバー系の帯留め、草履",
      detail: "黒レース半襟・黒レース足袋・濃色帯揚げ・細め帯締め・シルバー系帯留め・草履",
    },
    {
      id: "antique",
      label: "生成りアンティークセット",
      mood: "レトロで物語感のある",
      orderText:
        "生成りレース半襟、生成り足袋、くすみ色の帯揚げ、丸組風の帯締め、レトロな帯留め、草履",
      detail: "生成りレース半襟・生成り足袋・くすみ色帯揚げ・丸組風帯締め・レトロな帯留め・草履",
    },
    {
      id: "romantic",
      label: "淡色ロマンティックセット",
      mood: "淡く甘い",
      orderText:
        "淡いレース半襟、白足袋、薄桃または薄藤の帯揚げ、細い帯締め、花モチーフの帯留め、草履",
      detail: "淡いレース半襟・白足袋・薄桃または薄藤の帯揚げ・細い帯締め・花モチーフ帯留め・草履",
    },
  ],
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
  const pattern = findSelected(options.patterns[type], patternSelect.value);
  const obi = findSelected(options.obi[type], obiSelect.value);
  const item = findSelected(options.items[type], itemSelect.value);
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
    return `${selection.yukataColor.mood}${selection.yukataColor.label}の浴衣に、${selection.pattern.mood}${selection.pattern.label}を合わせた男性浴衣コーデ。${selection.obi.label}の帯と${selection.item.label}で、花火の夜にすっと馴染む装いに。`;
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
    "下駄",
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
  addDetail("履物", "下駄");
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
  !yukataPatternPreview ||
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

  yukataPatternPreview.src = patternAsset;
  yukataBodyPreview.src = assets.body;
  yukataObiPreview.src = assets.obi;
  previewCaption.textContent = assets.caption;
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

  if (type === "women") {
    arrangeLabel.hidden = false;
    arrangeSelect.disabled = false;
    fillSelect(arrangeSelect, options.arrangeSets);
  } else {
    arrangeLabel.hidden = true;
    arrangeSelect.disabled = true;
    arrangeSelect.innerHTML = "";
  }

  renderCard();
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
    arrangeSelect,
  ].forEach((select) => {
    select.addEventListener("change", renderCard);
  });

  refreshOptionsForType();
}

init();
