export type Language = "en" | "ja";

const jaText: Record<string, string> = {
  "Print Layout Toolkit": "プリントレイアウトツールキット",
  "Fast print calculators. No uploads.": "高速な印刷計算ツール。アップロード不要。",
  "Free browser-based print helpers for paper sizes, DPI, images, booklets, posters, margins, and more.":
    "用紙サイズ、DPI、画像、小冊子、ポスター、余白などに使える無料のブラウザー印刷ヘルパーです。",
  "Browse tools": "ツールを見る",
  "Learn about DPI": "DPIについて学ぶ",
  "How it works": "使い方",
  "Choose a print tool": "印刷ツールを選ぶ",
  "Enter simple dimensions": "寸法を入力する",
  "Click Start to see results": "\u300c\u30b9\u30bf\u30fc\u30c8\u300d\u3092\u62bc\u3057\u3066\u7d50\u679c\u3092\u8868\u793a",
  "These calculators run in your browser using typed values. Press Start when you are ready; no account creation or file uploads are required.":
    "\u3053\u308c\u3089\u306e\u8a08\u7b97\u30c4\u30fc\u30eb\u306f\u5165\u529b\u3057\u305f\u5024\u3092\u4f7f\u3063\u3066\u30d6\u30e9\u30a6\u30b6\u30fc\u4e0a\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002\u6e96\u5099\u3067\u304d\u305f\u3089\u300c\u30b9\u30bf\u30fc\u30c8\u300d\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u3084\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306f\u4e0d\u8981\u3067\u3059\u3002",
  "Featured tools": "おすすめツール",
  "Start with the most common print questions": "よくある印刷の疑問から始める",
  "View all tools": "すべてのツールを見る",
  "Printing Guides": "印刷ガイド",
  "Simple explanations before you print": "印刷前に読めるシンプルな解説",
  "Learn the basics behind DPI, bleed, paper sizes, booklets, poster tiling, and image preparation.":
    "DPI、塗り足し、用紙サイズ、小冊子、ポスター分割、画像準備の基本を学べます。",
  "Frequently asked questions": "よくある質問",
  "What is DPI?": "DPIとは何ですか？",
  "DPI means dots per inch, but many people use it when planning image pixels per printed inch. It helps connect digital image size to physical print size.":
    "DPIは1インチあたりのドット数を意味しますが、画像を印刷するときは1インチあたりのピクセル数を考える場面でもよく使われます。デジタル画像のサイズと実際の印刷サイズを結びつける考え方です。",
  "What DPI should I use for printing?": "印刷には何DPIを使えばよいですか？",
  "300 DPI is a common target for close-view prints. Posters and large signs viewed from farther away can often use 150 to 200 DPI.":
    "近くで見る印刷物では300 DPIが一般的な目安です。離れて見るポスターや大きなサインでは150〜200 DPIでも十分な場合があります。",
  "What is the difference between DPI and PPI?": "DPIとPPIの違いは何ですか？",
  "PPI describes image pixels per inch. DPI usually describes printer dot output. For layout planning, effective PPI is often the number you need to check.":
    "PPIは画像の1インチあたりのピクセル数です。DPIは通常プリンターのドット出力を表します。レイアウト確認では、有効PPIを見るのが実用的です。",
  "Is DPI the same as PPI?": "DPI\u3068PPI\u306f\u540c\u3058\u3067\u3059\u304b\uff1f",
  "PPI describes image pixels per inch. DPI usually describes printer output. In many layout tools people use the terms together when checking print resolution.":
    "PPI\u306f\u753b\u50cf\u306e1\u30a4\u30f3\u30c1\u3042\u305f\u308a\u306e\u30d4\u30af\u30bb\u30eb\u6570\u3067\u3059\u3002DPI\u306f\u901a\u5e38\u30d7\u30ea\u30f3\u30bf\u30fc\u306e\u51fa\u529b\u3092\u8868\u3057\u307e\u3059\u3002\u591a\u304f\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u30c4\u30fc\u30eb\u3067\u306f\u3001\u5370\u5237\u89e3\u50cf\u5ea6\u3092\u78ba\u8a8d\u3059\u308b\u3068\u304d\u306b\u4e21\u65b9\u306e\u7528\u8a9e\u304c\u8fd1\u3044\u610f\u5473\u3067\u4f7f\u308f\u308c\u307e\u3059\u3002",
  "What are bleed and safe margins?": "塗り足しと安全余白とは何ですか？",
  "Bleed is extra artwork outside the final cut edge. Safe margins keep important text and graphics away from the edge.":
    "塗り足しは仕上がりの裁断線より外側に伸ばす余分なデザイン領域です。安全余白は重要な文字や画像を端から離して守るための内側の余白です。",
  "Which paper size should I use?": "どの用紙サイズを使えばよいですか？",
  "Use the paper your printer, audience, or print shop expects. A4 is common internationally, while Letter is common in the United States and Canada.":
    "プリンター、読者、印刷会社が想定している用紙を使いましょう。A4は国際的に広く使われ、Letterは米国やカナダで一般的です。",

  Tools: "ツール",
  Guides: "ガイド",
  About: "概要",
  Contact: "お問い合わせ",
  Theme: "テーマ",
  Light: "ライト",
  Dark: "ダーク",
  "All print calculators": "すべての印刷計算ツール",
  "Choose a calculator for paper sizes, DPI, print dimensions, bleed, margins, booklets, N-up layouts, posters, and aspect ratios.":
    "用紙サイズ、DPI、印刷寸法、塗り足し、余白、小冊子、面付け、ポスター、アスペクト比に使える計算ツールを選べます。",
  "Simple print guides": "やさしい印刷ガイド",
  "Learn the core print terms behind the calculators in plain language.":
    "計算ツールで使う基本的な印刷用語をわかりやすく学べます。",
  "Read guide": "ガイドを読む",
  "Popular tools": "人気のツール",
  "Free client-side calculators for common print layout decisions. No account, no uploads, no backend.":
    "一般的な印刷レイアウトの判断に使える無料のクライアント側計算ツールです。アカウント、アップロード、バックエンドは不要です。",
  Site: "サイト",
  "Privacy Policy": "プライバシーポリシー",
  "Terms of Service": "利用規約",
  Accessibility: "アクセシビリティ",
  Sitemap: "サイトマップ",
  Categories: "カテゴリー",
  "Open calculator": "計算ツールを開く",
  "Search tools": "ツールを検索",
  "Try DPI, booklet, bleed, poster, margin...": "DPI、小冊子、塗り足し、ポスター、余白などで検索...",
  "Filter by tool name, category, or print task.": "ツール名、カテゴリー、印刷作業で絞り込めます。",
  "No matching tools found.": "一致するツールがありません。",
  "Try a simpler word like paper, DPI, bleed, booklet, or poster.":
    "paper、DPI、bleed、booklet、poster など、より短い言葉で試してください。",

  Home: "ホーム",
  Breadcrumb: "パンくずリスト",
  "Print guide": "印刷ガイド",
  "Site information": "サイト情報",
  "Related tools": "関連ツール",
  "Private by design": "プライバシーに配慮した設計",
  "This calculator runs in your browser. It does not upload files, store project data, or require an account.":
    "この計算ツールはブラウザー上で動作します。ファイルをアップロードせず、プロジェクトデータを保存せず、アカウントも不要です。",
  "How to use this tool": "このツールの使い方",
  "Common use cases": "よくある用途",

  "Image & DPI": "画像とDPI",
  "Paper & Layout": "用紙とレイアウト",
  "Posters & Booklets": "ポスターと小冊子",
  "Writing & Text": "文章とテキスト",

  "DPI Calculator": "DPI計算ツール",
  "Pixels to Inches Converter": "ピクセルからインチ変換",
  "Inches to Pixels Converter": "インチからピクセル変換",
  "Pixels to Centimeters Converter": "ピクセルからセンチメートル変換",
  "Image Print Size Calculator": "画像印刷サイズ計算ツール",
  "Print Resolution Checker": "印刷解像度チェッカー",
  "Aspect Ratio Calculator": "アスペクト比計算ツール",
  "Image Crop Calculator": "画像トリミング計算ツール",
  "Paper Size Dimensions": "用紙サイズ寸法",
  "Paper Size Converter": "用紙サイズ変換",
  "Custom Paper Size Calculator": "カスタム用紙サイズ計算ツール",
  "Margin Calculator": "余白計算ツール",
  "Bleed Calculator": "塗り足し計算ツール",
  "Safe Area Calculator": "安全エリア計算ツール",
  "Printable Area Calculator": "印刷可能範囲計算ツール",
  "Sheet Yield Calculator": "シート取り数計算ツール",
  "Poster Tiling Calculator": "ポスター分割印刷計算ツール",
  "Booklet Page Count Calculator": "小冊子ページ数計算ツール",
  "Booklet Imposition Guide": "小冊子面付けガイド",
  "Signature Calculator": "折丁計算ツール",
  "Book Spine Width Calculator": "本の背幅計算ツール",
  "Label Sheet Calculator": "ラベルシート計算ツール",
  "Photo Print Layout Calculator": "写真印刷レイアウト計算ツール",
  "Word Counter": "文字数・単語数カウンター",

  "Calculate print size from pixels and DPI, or required pixels from print size and DPI.":
    "ピクセル数とDPIから印刷サイズを計算し、また印刷サイズとDPIから必要なピクセル数を計算します。",
  "Convert pixel dimensions to physical inches at a selected DPI.":
    "選択したDPIでピクセル寸法を実際のインチ寸法に変換します。",
  "Calculate required pixel dimensions from inches and DPI.":
    "インチ寸法とDPIから必要なピクセル寸法を計算します。",
  "Convert image pixels to centimeters using your chosen DPI.":
    "指定したDPIを使って画像ピクセルをセンチメートルに変換します。",
  "Find how large an image can print at 300 DPI, 200 DPI, 150 DPI, or a custom value.":
    "300 DPI、200 DPI、150 DPI、または任意のDPIで画像をどの大きさに印刷できるか確認します。",
  "Check effective PPI for a target print size and get a simple quality verdict.":
    "目標印刷サイズでの有効PPIを確認し、簡単な品質判定を表示します。",
  "Simplify width and height into an aspect ratio and scale dimensions proportionally.":
    "幅と高さからアスペクト比を求め、比率を保ったまま寸法を拡大縮小します。",
  "See whether an image will crop when fitted to a target print aspect ratio.":
    "目標の印刷アスペクト比に合わせると画像がどのようにトリミングされるか確認します。",
  "Look up A-series, B-series, US, and photo paper dimensions in multiple units.":
    "A判、B判、米国サイズ、写真サイズの寸法を複数の単位で確認できます。",
  "Convert paper dimensions between millimeters, centimeters, inches, and pixels.":
    "用紙寸法をミリメートル、センチメートル、インチ、ピクセルの間で変換します。",
  "Convert a custom paper size and calculate its aspect ratio and pixel dimensions.":
    "カスタム用紙サイズを変換し、アスペクト比とピクセル寸法を計算します。",
  "Calculate the content area left after top, right, bottom, and left margins.":
    "上下左右の余白を引いたあとのコンテンツ領域を計算します。",
  "Add bleed around a finished print size and calculate the full document size.":
    "仕上がりサイズの周囲に塗り足しを加え、全体のドキュメントサイズを計算します。",
  "Calculate the safe content area after trim size, bleed, and inner safe margins.":
    "仕上がりサイズ、塗り足し、内側の安全余白を考慮した安全エリアを計算します。",
  "Calculate usable print area after margins and printer non-printable edges.":
    "余白とプリンターの印刷不可領域を差し引いた使用可能な印刷範囲を計算します。",
  "Calculate how many smaller cards, labels, or images fit on one sheet.":
    "小さなカード、ラベル、画像が1枚のシートにいくつ入るか計算します。",
  "Calculate how many pages are needed to print a large poster on smaller sheets.":
    "大きなポスターを小さな用紙に分割印刷するために必要なページ数を計算します。",
  "Check whether a booklet page count is divisible by four and see blank pages needed.":
    "小冊子のページ数が4で割り切れるか確認し、必要な白紙ページ数を表示します。",
  "Enter a page count and see a logical page-order guide for booklet printing.":
    "ページ数を入力して、小冊子印刷用のページ順ガイドを確認します。",
  "Calculate book signatures from total pages and pages per signature.":
    "総ページ数と1折丁あたりのページ数から折丁を計算します。",
  "Estimate book spine width from page count, paper thickness, and cover thickness.":
    "ページ数、紙の厚み、表紙の厚みから本の背幅を見積もります。",
  "Calculate how many labels fit on a page using margins and gaps.":
    "余白と間隔を使って、1ページに入るラベル数を計算します。",
  "Calculate how many photos of a selected size fit on a selected paper size.":
    "選択した写真サイズが選択した用紙に何枚入るか計算します。",
  "This calculator compares the selected photo orientation with a rotated version and uses the layout that fits more photos.":
    "\u3053\u306e\u8a08\u7b97\u30c4\u30fc\u30eb\u306f\u3001\u9078\u629e\u3057\u305f\u5199\u771f\u306e\u5411\u304d\u3068\u56de\u8ee2\u3057\u305f\u5411\u304d\u3092\u6bd4\u8f03\u3057\u3001\u3088\u308a\u591a\u304f\u5165\u308b\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",
  "Count words, characters, sentences, paragraphs, and estimated reading time from pasted text.":
    "貼り付けたテキストの単語数、文字数、文数、段落数、推定読書時間を数えます。",
  "Convert between pixel dimensions, print size, and DPI.":
    "\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3001\u5370\u5237\u30b5\u30a4\u30ba\u3001DPI\u3092\u76f8\u4e92\u306b\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "Convert image pixels to inches at a chosen DPI.":
    "\u6307\u5b9a\u3057\u305fDPI\u3067\u753b\u50cf\u306e\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3092\u30a4\u30f3\u30c1\u306b\u5909\u63db\u3057\u307e\u3059\u3002",
  "Convert print inches to required pixel dimensions.":
    "\u5370\u5237\u30a4\u30f3\u30c1\u5bf8\u6cd5\u304b\u3089\u5fc5\u8981\u306a\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "Find the physical print size for image pixels and DPI.":
    "\u753b\u50cf\u306e\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3068DPI\u304b\u3089\u5b9f\u969b\u306e\u5370\u5237\u30b5\u30a4\u30ba\u3092\u6c42\u3081\u307e\u3059\u3002",
  "Check effective PPI and get a simple print quality verdict.":
    "\u6709\u52b9PPI\u3092\u78ba\u8a8d\u3057\u3001\u5370\u5237\u54c1\u8cea\u306e\u7c21\u5358\u306a\u5224\u5b9a\u3092\u8868\u793a\u3057\u307e\u3059\u3002",
  "Simplify a width and height, then scale without stretching.":
    "\u5e45\u3068\u9ad8\u3055\u304b\u3089\u6bd4\u7387\u3092\u6c42\u3081\u3001\u4f38\u3070\u3055\u305a\u306b\u30b5\u30a4\u30ba\u5909\u66f4\u3057\u307e\u3059\u3002",
  "Estimate how an image will crop to fit a target aspect ratio.":
    "\u76ee\u6a19\u306e\u30a2\u30b9\u30da\u30af\u30c8\u6bd4\u306b\u5408\u308f\u305b\u305f\u3068\u304d\u306e\u30c8\u30ea\u30df\u30f3\u30b0\u91cf\u3092\u898b\u7a4d\u3082\u308a\u307e\u3059\u3002",
  "Look up common paper sizes in print units and pixels.":
    "\u4e00\u822c\u7684\u306a\u7528\u7d19\u30b5\u30a4\u30ba\u3092\u5370\u5237\u5358\u4f4d\u3068\u30d4\u30af\u30bb\u30eb\u3067\u78ba\u8a8d\u3057\u307e\u3059\u3002",
  "Convert common paper sizes between units and pixels.":
    "\u4e00\u822c\u7684\u306a\u7528\u7d19\u30b5\u30a4\u30ba\u3092\u5358\u4f4d\u9593\u3068\u30d4\u30af\u30bb\u30eb\u306b\u5909\u63db\u3057\u307e\u3059\u3002",
  "Calculate custom size, aspect ratio, and pixels.":
    "\u30ab\u30b9\u30bf\u30e0\u30b5\u30a4\u30ba\u3001\u30a2\u30b9\u30da\u30af\u30c8\u6bd4\u3001\u30d4\u30af\u30bb\u30eb\u5bf8\u6cd5\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "Calculate where important content should stay.":
    "\u91cd\u8981\u306a\u5185\u5bb9\u3092\u914d\u7f6e\u3059\u3079\u304d\u5b89\u5168\u9818\u57df\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "See how much content area remains after margins are applied.":
    "\u4f59\u767d\u3092\u9069\u7528\u3057\u305f\u5f8c\u306b\u6b8b\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u9818\u57df\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",
  "Add bleed to each edge and calculate the full document size.":
    "\u5404\u8fba\u306b\u5857\u308a\u8db3\u3057\u3092\u52a0\u3048\u3001\u5168\u4f53\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30b5\u30a4\u30ba\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "Calculate how many items fit on a sheet.":
    "1\u679a\u306e\u30b7\u30fc\u30c8\u306b\u5165\u308b\u30a2\u30a4\u30c6\u30e0\u6570\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "Calculate how many labels fit on a sheet.":
    "1\u679a\u306e\u30b7\u30fc\u30c8\u306b\u5165\u308b\u30e9\u30d9\u30eb\u6570\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "Estimate how many common photo prints fit on a paper sheet.":
    "\u4e00\u822c\u7684\u306a\u5199\u771f\u30d7\u30ea\u30f3\u30c8\u304c\u7528\u7d19\u306b\u4f55\u679a\u5165\u308b\u304b\u898b\u7a4d\u3082\u308a\u307e\u3059\u3002",
  "Estimate sheets needed to print a large poster on smaller paper.":
    "\u5927\u304d\u306a\u30dd\u30b9\u30bf\u30fc\u3092\u5c0f\u3055\u306a\u7528\u7d19\u306b\u5206\u5272\u5370\u5237\u3059\u308b\u3068\u304d\u306b\u5fc5\u8981\u306a\u679a\u6570\u3092\u898b\u7a4d\u3082\u308a\u307e\u3059\u3002",
  "Check booklet page count and blank pages needed.":
    "\u5c0f\u518a\u5b50\u306e\u30da\u30fc\u30b8\u6570\u3068\u5fc5\u8981\u306a\u767d\u7d19\u30da\u30fc\u30b8\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",
  "See a simple logical page-order guide for booklet printing.":
    "\u5c0f\u518a\u5b50\u5370\u5237\u7528\u306e\u7c21\u5358\u306a\u30da\u30fc\u30b8\u9806\u30ac\u30a4\u30c9\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",
  "Calculate signatures from page count and pages per signature.":
    "\u30da\u30fc\u30b8\u6570\u30681\u6298\u4e01\u3042\u305f\u308a\u306e\u30da\u30fc\u30b8\u6570\u304b\u3089\u6298\u4e01\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",
  "Estimate spine width from page count and paper thickness.":
    "\u30da\u30fc\u30b8\u6570\u3068\u7d19\u306e\u539a\u3055\u304b\u3089\u80cc\u5e45\u3092\u898b\u7a4d\u3082\u308a\u307e\u3059\u3002",

  "Choose whether you know pixels or print size.": "ピクセル数または印刷サイズのどちらを知っているか選びます。",
  "Enter your width, height, and DPI.": "幅、高さ、DPIを入力します。",
  "Read the calculated print size or required pixel dimensions.": "計算された印刷サイズまたは必要なピクセル寸法を確認します。",
  "Photo printing": "写真印刷",
  "Poster planning": "ポスター計画",
  "Creating print-ready image exports": "印刷用画像の書き出し",
  "Why DPI matters": "DPIが重要な理由",
  "DPI planning connects digital pixels to physical inches. More pixels per inch usually means sharper detail when the print is viewed up close.":
    "DPIの計画はデジタルのピクセル数と実際のインチ寸法をつなげます。1インチあたりのピクセル数が多いほど、近くで見たときに細部がシャープになりやすくなります。",
  "For many photos and flyers, 300 DPI is a practical target. Large posters can often use less because people stand farther away.":
    "写真やチラシでは300 DPIが実用的な目安です。大きなポスターは離れて見ることが多いため、より低いDPIでも使える場合があります。",
  "Should I trust this instead of my print shop?": "印刷会社の指定よりこの結果を信じてよいですか？",
  "Use these calculators for planning, then confirm final requirements with your printer or print shop.":
    "これらの計算ツールは計画用として使い、最終要件はプリンターや印刷会社に確認してください。",
  "Do these tools upload my files?": "これらのツールはファイルをアップロードしますか？",
  "No. The calculators use typed dimensions and run in your browser. They do not upload images or documents.":
    "いいえ。計算ツールは入力された寸法だけを使ってブラウザー上で動作し、画像や文書をアップロードしません。",
  "Paste or type your text into the box.": "ボックスにテキストを貼り付けるか入力します。",
  "Click Start to review the word, character, sentence, and paragraph counts.":
    "「スタート」をクリックして、単語数、文字数、文数、段落数を確認します。",
  "Use Reset to clear the text or Copy result to save the summary.":
    "リセットでテキストを消去し、結果をコピーで概要を保存できます。",
  "Checking article length": "記事の長さ確認",
  "Preparing print copy": "印刷用コピーの準備",
  "Estimating reading time": "読書時間の見積もり",
  "Keeping text within layout limits": "レイアウト内に文章を収める",
  "Why word count helps print layouts": "単語数が印刷レイアウトに役立つ理由",
  "Text length affects page count, column height, and how comfortably content fits inside a design.":
    "文章の長さはページ数、段組みの高さ、デザイン内での収まりやすさに影響します。",
  "A word counter helps you check copy before placing it into a flyer, booklet, poster, label, or website layout.":
    "単語数カウンターを使うと、チラシ、小冊子、ポスター、ラベル、ウェブレイアウトに文章を配置する前に長さを確認できます。",
  "Does this upload my text?": "入力したテキストはアップロードされますか？",
  "No. The word counter runs in your browser and does not upload or save the text you type.":
    "いいえ。単語数カウンターはブラウザー上で動作し、入力したテキストをアップロードしたり保存したりしません。",
  "How is reading time estimated?": "読書時間はどのように見積もりますか？",
  "Reading time is estimated using about 200 words per minute, which is a common general-purpose reading speed.":
    "読書時間は一般的な目安として1分あたり約200語で見積もります。",

  "DPI vs PPI Guide": "DPIとPPIガイド",
  "Print Bleed Guide": "印刷の塗り足しガイド",
  "Print Margins Guide": "印刷余白ガイド",
  "Paper Sizes Guide": "用紙サイズガイド",
  "Booklet Printing Guide": "小冊子印刷ガイド",
  "Poster Printing Guide": "ポスター印刷ガイド",
  "Print Resolution Guide": "印刷解像度ガイド",
  "Understand the difference between DPI and PPI, and how both affect print size and image sharpness.":
    "DPIとPPIの違い、そして印刷サイズや画像のシャープさへの影響を理解できます。",
  "Learn what bleed is, why printers ask for it, and how to calculate document size with bleed.":
    "塗り足しとは何か、なぜ必要なのか、塗り足し込みのドキュメントサイズを計算する方法を学べます。",
  "Learn how margins and safe areas keep text and important graphics away from trim and printer limits.":
    "余白と安全エリアが、文字や重要な画像を裁断線やプリンターの制限から守る仕組みを学べます。",
  "Compare A-series, B-series, US paper, and photo sizes for common print projects.":
    "一般的な印刷プロジェクト向けに、A判、B判、米国用紙、写真サイズを比較できます。",
  "Understand booklet page counts, folded sheets, imposition, signatures, and simple print planning.":
    "小冊子のページ数、折り、面付け、折丁、基本的な印刷計画を理解できます。",
  "Learn how poster size, resolution, tiling, overlap, and viewing distance affect print planning.":
    "ポスターサイズ、解像度、分割、重なり、視認距離が印刷計画にどう影響するかを学べます。",
  "Learn how pixels, DPI, print size, and viewing distance work together when preparing images.":
    "画像準備で、ピクセル、DPI、印刷サイズ、視認距離がどう関係するかを学べます。",

  "The short version": "短く言うと",
  "PPI means pixels per inch. It describes how many image pixels are used in one printed inch.":
    "PPIは1インチあたりのピクセル数です。印刷された1インチに画像ピクセルが何個使われるかを表します。",
  "DPI means dots per inch. It usually describes printer output. In everyday print planning, people often use DPI when they mean the image resolution target.":
    "DPIは1インチあたりのドット数です。通常はプリンター出力を表します。日常的な印刷計画では、画像解像度の目標値を指してDPIと言うこともよくあります。",
  "What number should you use?": "どの数値を使えばよいですか？",
  "300 PPI is a common target for sharp close-view prints such as photos, flyers, and brochures.":
    "写真、チラシ、パンフレットなど近くで見る印刷物では、300 PPIが一般的な目安です。",
  "Large posters can often use less because people view them from farther away.":
    "大きなポスターは離れて見ることが多いため、より低い数値でも使える場合があります。",
  "300 PPI: sharp close-view prints": "300 PPI：近くで見る印刷物をシャープに",
  "200 PPI: good for many everyday prints": "200 PPI：多くの日常印刷に適した品質",
  "150 PPI: often acceptable for large posters": "150 PPI：大きなポスターでは許容されることが多い",
  "Is 300 DPI always required?": "300 DPIは常に必要ですか？",
  "No. It is a common target, but large prints viewed from farther away can often use lower effective resolution.":
    "いいえ。一般的な目安ではありますが、離れて見る大きな印刷物ではより低い有効解像度でも十分な場合があります。",
  "Can changing DPI make a small image sharper?": "DPIを変えるだけで小さな画像はシャープになりますか？",
  "Changing the DPI number alone does not add real detail. You need enough pixel dimensions for the chosen print size.":
    "DPIの数値だけを変えても実際の細部は増えません。選んだ印刷サイズに十分なピクセル寸法が必要です。",

  "What bleed does": "塗り足しの役割",
  "Bleed is extra artwork that extends past the final cut edge. It protects the design from tiny trimming shifts.":
    "塗り足しは仕上がりの裁断線を越えて伸ばす余分なデザイン領域です。わずかな裁断ズレからデザインを守ります。",
  "If color or an image is meant to touch the edge, extend it into the bleed area instead of stopping exactly at the trim line.":
    "色や画像を端まで届かせたい場合は、裁断線で止めずに塗り足し領域まで伸ばします。",
  "Common bleed amounts": "一般的な塗り足し量",
  "Many printers ask for 3 mm or 0.125 inches on each side. Always check the print shop requirement before exporting final files.":
    "多くの印刷会社では各辺3 mmまたは0.125インチの塗り足しを求めます。最終ファイルを書き出す前に必ず印刷会社の指定を確認してください。",
  "Do all designs need bleed?": "すべてのデザインに塗り足しは必要ですか？",
  "No. Bleed is mainly needed when artwork, color, or images extend to the edge of the finished piece.":
    "いいえ。塗り足しは主に、アートワーク、色、画像が仕上がりの端まで届く場合に必要です。",
  "Is bleed the same as safe margin?": "塗り足しは安全余白と同じですか？",
  "No. Bleed extends outside the cut edge. Safe margin keeps important content inside the cut edge.":
    "いいえ。塗り足しは裁断線の外側へ伸ばす部分です。安全余白は重要な内容を裁断線の内側に保つための余白です。",

  "Margins protect important content": "余白は重要な内容を守ります",
  "Margins are the empty or safe space inside the page edge. They help keep text, logos, and important artwork from being cut off or too close to the edge.":
    "余白はページ端の内側にある空きスペースまたは安全スペースです。文字、ロゴ、重要な画像が切れたり端に近づきすぎたりするのを防ぎます。",
  "For home printing, margins also help avoid printer non-printable edge areas.":
    "家庭用プリンターでは、余白が印刷不可領域を避ける助けにもなります。",
  "Margin, safe area, and bleed": "余白、安全エリア、塗り足し",
  "These terms are related, but they are not the same.": "これらの用語は関連していますが、同じものではありません。",
  "How much margin should I use?": "余白はどれくらい必要ですか？",
  "It depends on the item. Many simple documents use at least 0.25 to 0.5 inches, while print shops may provide exact safe area rules.":
    "制作物によります。一般的な文書では少なくとも0.25〜0.5インチを使うことが多く、印刷会社が正確な安全エリアを指定する場合もあります。",
  "Can a printer print to the edge?": "プリンターは端まで印刷できますか？",
  "Some printers can, but many cannot. Use the printable area calculator if your printer has non-printable edges.":
    "可能なプリンターもありますが、多くはできません。プリンターに印刷不可領域がある場合は印刷可能範囲計算ツールを使ってください。",

  "A4 and Letter are not the same": "A4とLetterは同じではありません",
  "A4 is 210 x 297 mm. US Letter is 8.5 x 11 inches, or about 216 x 279 mm.":
    "A4は210 x 297 mmです。US Letterは8.5 x 11インチ、約216 x 279 mmです。",
  "They are close enough to cause confusion, but different enough to affect layout, page breaks, and print scaling.":
    "混同しやすいほど近いサイズですが、レイアウト、改ページ、印刷倍率に影響する程度には異なります。",
  "Choose the paper people will actually print": "実際に使われる用紙を選ぶ",
  "If you are making a downloadable document, choose the paper size your audience expects. If you are sending a file to a print shop, use the shop's requested size.":
    "ダウンロード用文書を作る場合は、読者が想定する用紙サイズを選びます。印刷会社に送る場合は、その会社が指定するサイズを使ってください。",
  "Can I print A4 on Letter paper?": "A4をLetter用紙に印刷できますか？",
  "Usually yes, but the printer may scale or crop the page. Check the print preview before printing.":
    "通常は可能ですが、プリンターが拡大縮小または切り取りを行う場合があります。印刷前にプレビューを確認してください。",
  "What paper size should I use for photos?": "写真にはどの用紙サイズを使えばよいですか？",
  "Common photo sizes include 4x6, 5x7, and 8x10 inches. Match the photo aspect ratio to avoid cropping.":
    "一般的な写真サイズには4x6、5x7、8x10インチがあります。トリミングを避けるには写真のアスペクト比に合わせてください。",

  "Booklet pages come in fours": "小冊子のページは4の倍数",
  "A folded sheet creates four booklet pages: two on the front and two on the back.":
    "1枚の紙を折ると、表に2ページ、裏に2ページ、合計4ページの小冊子ページになります。",
  "That is why simple saddle-stitch booklets need a page count divisible by four.":
    "そのため、シンプルな中綴じ小冊子ではページ数が4で割り切れる必要があります。",
  "Imposition changes page order": "面付けはページ順を変えます",
  "Booklet printing places pages in a special order so they read correctly after folding. Many printer drivers or print shops handle this automatically.":
    "小冊子印刷では、折ったあと正しい順番で読めるようにページを特別な順番で配置します。多くのプリンタードライバーや印刷会社がこれを自動で処理します。",
  "A page-order guide is useful for checking manual layouts and understanding what the printer is doing.":
    "ページ順ガイドは、手動レイアウトの確認やプリンターが行っている処理の理解に役立ちます。",
  "What if my booklet has 10 pages?": "小冊子が10ページの場合は？",
  "It usually needs two blank pages added so the total becomes 12 pages.":
    "通常は白紙を2ページ追加して、合計12ページにします。",
  "Do I need to impose pages myself?": "自分で面付けする必要がありますか？",
  "Often no. Many print services prefer normal reading order and handle imposition themselves. Always ask first.":
    "多くの場合は不要です。多くの印刷サービスは通常の読み順のファイルを好み、面付けを自社で行います。必ず事前に確認してください。",

  "Viewing distance matters": "視認距離が重要です",
  "A small photo print is viewed up close, so it usually needs high effective PPI. A wall poster is often viewed from farther away and can be acceptable at lower PPI.":
    "小さな写真プリントは近くで見るため、高い有効PPIが必要になりやすいです。壁のポスターは離れて見ることが多く、低めのPPIでも許容される場合があります。",
  "Tiling large posters": "大きなポスターを分割する",
  "Tiling means printing a large poster across multiple sheets. Overlap helps you align sheets when trimming and taping them together.":
    "分割印刷とは、大きなポスターを複数枚の用紙に分けて印刷することです。重なり部分があると、切り貼りして合わせるときに位置合わせしやすくなります。",
  "Use overlap for easier assembly": "組み立てやすくするために重なりを使う",
  "Check printer margins": "プリンターの余白を確認する",
  "Print a small test if color matching matters": "色合わせが重要なら小さなテスト印刷を行う",
  "Can I print a poster on Letter or A4 paper?": "LetterやA4用紙でポスターを印刷できますか？",
  "Yes, by tiling it across multiple sheets, but alignment and trimming take extra care.":
    "はい、複数枚に分割すれば可能です。ただし位置合わせと裁断には注意が必要です。",
  "What resolution is good for a poster?": "ポスターにはどの解像度がよいですか？",
  "150 to 200 PPI is often usable for larger posters, but close-view art prints may need more.":
    "大きなポスターでは150〜200 PPIが使えることが多いですが、近くで見るアートプリントではより高い解像度が必要な場合があります。",

  "Start with pixel dimensions": "まずピクセル寸法を確認する",
  "The pixel width and height of an image determine how much real detail is available. Metadata alone is not enough.":
    "画像のピクセル幅と高さが、実際に使える細部の量を決めます。メタデータだけでは不十分です。",
  "Use the target print size to calculate effective PPI before sending a file to print.":
    "印刷用ファイルを送る前に、目標印刷サイズから有効PPIを計算してください。",
  "Practical resolution targets": "実用的な解像度の目安",
  "Use these as planning targets, not universal rules. Print method, paper, image quality, and viewing distance all matter.":
    "これらは万能のルールではなく、計画用の目安として使ってください。印刷方式、紙、画像品質、視認距離がすべて影響します。",
  "What is effective PPI?": "有効PPIとは何ですか？",
  "It is the actual pixels per printed inch after the image is placed at its final physical size.":
    "画像を最終的な実寸で配置したときの、印刷1インチあたりの実際のピクセル数です。",
  "Should I upscale a low-resolution image?": "低解像度画像を拡大してよいですか？",
  "Upscaling can help in some workflows, but it cannot fully replace real detail from a larger original image.":
    "ワークフローによっては拡大が役立つ場合もありますが、大きな元画像に含まれる本当の細部を完全に置き換えることはできません。",

  "Check your inputs": "入力を確認してください",
  "Use positive sizes, zero or positive spacing/bleed/margins, and make sure the remaining area is larger than zero.":
    "\u30b5\u30a4\u30ba\u306f\u6b63\u306e\u6570\u3001\u9593\u9694\u30fb\u5857\u308a\u8db3\u3057\u30fb\u4f59\u767d\u306f0\u4ee5\u4e0a\u306b\u3057\u3001\u6b8b\u308b\u9818\u57df\u304c0\u3088\u308a\u5927\u304d\u304f\u306a\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
  "Ready to calculate": "計算の準備ができました",
  "Adjust the inputs, then click Start. Results stay unchanged until you start again.":
    "入力を調整してから「スタート」をクリックしてください。もう一度スタートするまで結果は変わりません。",
  "Adjust the inputs, then click Start. Change values and click Start again whenever you want a fresh result.":
    "入力を調整してから「スタート」をクリックしてください。新しい結果が必要なときは、値を変更してもう一度スタートをクリックできます。",
  Start: "スタート",
  "Processing...": "処理中...",
  Reset: "リセット",
  "Copy result": "結果をコピー",
  Copied: "コピーしました",
  "Copy failed": "\u30b3\u30d4\u30fc\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
  "Calculation type": "計算タイプ",
  "Choose the direction to calculate.": "計算する方向を選びます。",
  "Pixels to print size": "ピクセルから印刷サイズ",
  "Print size to pixels": "印刷サイズからピクセル",
  "Target resolution.": "目標解像度。",
  Unit: "単位",
  "Print size unit.": "印刷サイズの単位。",
  "Image width in pixels.": "画像の幅（ピクセル）。",
  "Image height in pixels.": "画像の高さ（ピクセル）。",
  "Pixel width": "ピクセル幅",
  "Pixel height": "ピクセル高さ",
  "Desired print width.": "希望する印刷幅。",
  "Desired print height.": "希望する印刷高さ。",
  "Print width": "印刷幅",
  "Print height": "印刷高さ",
  "Print size": "印刷サイズ",
  "Required pixels": "必要なピクセル数",
  Inches: "インチ",
  Millimeters: "ミリメートル",
  Centimeters: "センチメートル",
  "Print resolution.": "印刷解像度。",
  Width: "幅",
  Height: "高さ",
  "Target print resolution.": "目標印刷解像度。",
  "Try 300, 200, or 150.": "300、200、150などを試してください。",
  "Quality verdict": "品質判定",
  "Excellent for close viewing": "近くで見る印刷に最適",
  "This is a strong resolution target for photos, flyers, and detailed prints.":
    "写真、チラシ、細部の多い印刷に向いた強い解像度目標です。",
  "Good for many prints": "多くの印刷に良好",
  "This should work for many everyday prints, especially when viewed at normal distance.":
    "通常の距離で見る多くの日常的な印刷で使いやすい品質です。",
  "Usable for larger prints": "大きな印刷では使用可能",
  "This may be acceptable for posters or prints viewed from farther away.":
    "ポスターや離れて見る印刷物では許容される場合があります。",
  "May look soft": "少しぼやける可能性があります",
  "This is likely low for close-view print work. Consider a smaller print size or a larger image.":
    "近くで見る印刷物には低い可能性があります。印刷サイズを小さくするか、より大きな画像を検討してください。",
  "Width PPI": "幅のPPI",
  "Height PPI": "高さのPPI",
  "Original width.": "元の幅。",
  "Original height.": "元の高さ。",
  "Optional new width.": "任意の新しい幅。",
  "Optional new height.": "任意の新しい高さ。",
  "New width": "新しい幅",
  "New height": "新しい高さ",
  "Aspect ratio": "アスペクト比",
  "Height for new width": "新しい幅に対する高さ",
  "Width for new height": "新しい高さに対する幅",
  "Source image width.": "元画像の幅。",
  "Source image height.": "元画像の高さ。",
  "Target print width.": "目標の印刷幅。",
  "Target print height.": "目標の印刷高さ。",
  "Image width": "画像幅",
  "Image height": "画像高さ",
  "Target width": "目標幅",
  "Target height": "目標高さ",
  "Crop estimate": "トリミング見積もり",
  "Cropped image area": "トリミング後の画像領域",
  "Crop direction": "トリミング方向",
  "Left and right sides": "左右",
  "Top and bottom": "上下",
  "Estimated loss": "推定損失",
  "Paper size": "用紙サイズ",
  "A-series, B-series, US, and photo sizes.": "A判、B判、米国サイズ、写真サイズ。",
  Orientation: "向き",
  "Portrait": "縦",
  "Landscape": "横",
  "Paper dimensions": "用紙寸法",
  "Pixels at DPI": "DPIでのピクセル",
  "Converted paper size": "変換後の用紙サイズ",
  "Converted in": "インチ換算",
  "Converted mm": "ミリメートル換算",
  "Converted cm": "センチメートル換算",
  "Custom size result": "カスタムサイズ結果",
  "Pixel dimensions": "ピクセル寸法",
  "Content area": "コンテンツ領域",
  "Safe content area": "安全コンテンツ領域",
  "Top margin": "上余白",
  "Right margin": "右余白",
  "Bottom margin": "下余白",
  "Left margin": "左余白",
  "Document size with bleed": "塗り足し込みのドキュメントサイズ",
  "Finished width": "仕上がり幅",
  "Finished height": "仕上がり高さ",
  "Bleed per edge": "各辺の塗り足し",
  "Added width": "追加される幅",
  "Added height": "追加される高さ",
  "Printable area": "印刷可能範囲",
  "Page width": "ページ幅",
  "Page height": "ページ高さ",
  Margin: "余白",
  "Non-printable edge": "印刷不可領域",
  "Total inset on each side": "各辺の合計内側余白",
  "Sheet yield": "シート取り数",
  "Item width": "アイテム幅",
  "Item height": "アイテム高さ",
  "Sheet width": "シート幅",
  "Sheet height": "シート高さ",
  Gap: "間隔",
  "Sheet margin": "シート余白",
  "Item bleed": "アイテム塗り足し",
  "Columns x rows": "列 x 行",
  "Effective item size": "有効アイテムサイズ",
  "Estimated area use": "推定面積使用率",
  "Photo size": "写真サイズ",
  "Photo layout": "写真レイアウト",
  "Best orientation": "\u6700\u9069\u306a\u5411\u304d",
  "Selected orientation": "\u9078\u629e\u3057\u305f\u5411\u304d",
  Rotated: "\u56de\u8ee2",
  Paper: "用紙",
  "Poster width": "ポスター幅",
  "Poster height": "ポスター高さ",
  "Paper width": "用紙幅",
  "Paper height": "用紙高さ",
  Overlap: "重なり",
  "Tiling result": "分割結果",
  "Effective sheet coverage": "有効シートカバー範囲",
  "Page count": "ページ数",
  "Booklet page count": "小冊子ページ数",
  "Original pages": "元のページ数",
  "Printable page count": "印刷用ページ数",
  "Blank pages needed": "必要な白紙ページ",
  "Folded sheets": "折りシート数",
  "Imposition summary": "面付け概要",
  "Blank pages added": "追加される白紙ページ",
  "Many printer drivers and print shops handle imposition automatically. Use this as a planning guide.":
    "多くのプリンタードライバーや印刷会社は面付けを自動で処理します。これは計画用のガイドとして使ってください。",
  Sheet: "シート",
  "Front side": "表面",
  "Back side": "裏面",
  Blank: "白紙",
  "Pages per signature": "1折丁あたりのページ数",
  Signatures: "折丁数",
  "Total capacity": "合計容量",
  "Blank pages": "白紙ページ",
  "Paper thickness input": "紙厚の入力方法",
  "Estimate from GSM": "GSMから推定",
  "Enter thickness": "厚みを入力",
  "Paper GSM": "紙のGSM",
  "Sheet thickness (mm)": "1枚の紙厚（mm）",
  "Cover thickness (mm)": "表紙の厚み（mm）",
  "Estimated spine width": "推定背幅",
  "Estimated sheet thickness": "推定紙厚",
  "This is only a planning estimate. Actual paper thickness varies by stock, coating, humidity, and printer.":
    "これは計画用の見積もりです。実際の紙厚は用紙、コーティング、湿度、プリンターによって変わります。",
  "Count words, characters, sentences, paragraphs, and estimated reading time.":
    "単語数、文字数、文数、段落数、推定読書時間を数えます。",
  "Text to count": "数えるテキスト",
  "Paste or type your text here...": "ここにテキストを貼り付けるか入力してください...",
  "Your text stays in your browser. Results update only after you click Start.":
    "テキストはブラウザー内に残ります。結果は「スタート」をクリックした後だけ更新されます。",
  "Text summary": "テキスト概要",
  Words: "単語数",
  Characters: "文字数",
  "Characters without spaces": "スペースを除いた文字数",
  Sentences: "文数",
  Paragraphs: "段落数",
  "Estimated reading time": "推定読書時間",
  "Less than 1 minute": "1分未満",
  "0 minutes": "0分",
  "Paste your text here to count words, characters, sentences, paragraphs, and estimated reading time.":
    "単語数、文字数、文数、段落数、推定読書時間を数えるには、ここにテキストを貼り付けてください。",

  "About Print Layout Toolkit": "Print Layout Toolkitについて",
  "Learn about Print Layout Toolkit, a browser-based collection of practical print calculators and guides.":
    "実用的な印刷計算ツールとガイドを集めたブラウザーベースのPrint Layout Toolkitについて説明します。",
  "What this site does": "このサイトでできること",
  "Print Layout Toolkit provides simple calculators and reference guides for common print-layout tasks, including DPI, paper sizes, margins, bleed, booklets, posters, labels, and image sizing.":
    "Print Layout Toolkitは、DPI、用紙サイズ、余白、塗り足し、小冊子、ポスター、ラベル、画像サイズなど、一般的な印刷レイアウト作業に使えるシンプルな計算ツールと参考ガイドを提供します。",
  "The goal is to make print planning easier for students, small businesses, designers, creators, and anyone preparing files for home printing or a print shop.":
    "学生、小規模事業者、デザイナー、クリエイター、家庭用印刷や印刷会社向けのファイルを準備するすべての人にとって、印刷計画を簡単にすることが目的です。",
  "How the tools work": "ツールの仕組み",
  "Most tools run entirely in your browser using the dimensions you type into the form. The site does not require an account, login, database, or file upload to use the calculators.":
    "ほとんどのツールは、フォームに入力した寸法だけを使って完全にブラウザー上で動作します。計算ツールの利用にアカウント、ログイン、データベース、ファイルアップロードは不要です。",
  "The results are meant for planning and education. Always confirm final production rules with your printer or print shop before ordering professional work.":
    "結果は計画と学習のためのものです。専門的な印刷を注文する前に、最終的な制作ルールをプリンターや印刷会社に必ず確認してください。",
  Email: "メール",
  "Email:": "メール：",
  "Contact Print Layout Toolkit for corrections, accessibility issues, and practical feedback.":
    "修正、アクセシビリティの問題、実用的なフィードバックについてPrint Layout Toolkitへ連絡できます。",
  "For corrections, feedback, accessibility issues, or general questions, email kharhystudio@gmail.com.":
    "修正、フィードバック、アクセシビリティの問題、一般的な質問は kharhystudio@gmail.com へメールしてください。",
  "This page uses a direct email address instead of a fake contact form because the site does not have a backend service for sending messages.":
    "このサイトにはメッセージ送信用のバックエンドがないため、送信できないフォームではなく直接メールアドレスを掲載しています。",
  "Helpful details to include": "含めると役立つ情報",
  "If you are reporting a calculator issue, include the page URL, the values you entered, the result you expected, and the result you saw.":
    "計算ツールの問題を報告する場合は、ページURL、入力した値、期待した結果、表示された結果を含めてください。",
  Overview: "概要",
  "Privacy information for Print Layout Toolkit, including browser-based calculators, future analytics, and advertising notes.":
    "ブラウザー上の計算ツール、将来のアナリティクス、広告に関するPrint Layout Toolkitのプライバシー情報です。",
  "Print Layout Toolkit is a browser-based utility website. The calculators use the values you type into the page and show results after you press Start.":
    "Print Layout Toolkit\u306f\u30d6\u30e9\u30a6\u30b6\u30fc\u30d9\u30fc\u30b9\u306e\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30b5\u30a4\u30c8\u3067\u3059\u3002\u8a08\u7b97\u30c4\u30fc\u30eb\u306f\u30da\u30fc\u30b8\u306b\u5165\u529b\u3057\u305f\u5024\u3092\u4f7f\u3044\u3001\u300c\u30b9\u30bf\u30fc\u30c8\u300d\u3092\u62bc\u3057\u305f\u5f8c\u306b\u7d50\u679c\u3092\u8868\u793a\u3057\u307e\u3059\u3002",
  "Plain-English terms for using Print Layout Toolkit calculators and guides.":
    "Print Layout Toolkitの計算ツールとガイドを利用するためのわかりやすい利用規約です。",
  "Accessibility Statement": "アクセシビリティ声明",
  "Accessibility statement for Print Layout Toolkit and contact information for reporting issues.":
    "Print Layout Toolkitのアクセシビリティへの取り組みと、問題報告の連絡先です。",
};

Object.assign(
  jaText,
  {
    "The site is designed so that common calculator use does not require login, account creation, file upload, or a database.":
      "このサイトは、一般的な計算ツールをログイン、アカウント作成、ファイルアップロード、データベースなしで使えるように設計されています。",
    "Information you enter": "入力した情報",
    "Calculator values are processed in your browser. They are not intentionally saved by this website or sent to a custom backend database.":
      "計算に入力した値はブラウザー内で処理されます。このサイトが意図的に保存したり、独自のバックエンドデータベースへ送信したりすることはありません。",
    "If a future tool clearly requires file upload or server processing, that tool should explain what is uploaded before you use it.":
      "将来、ファイルアップロードやサーバー処理が必要なツールを追加する場合は、使用前に何がアップロードされるかを明確に説明します。",
    "Hosting, logs, analytics, and ads": "ホスティング、ログ、解析、広告",
    "Like most websites, the hosting provider may process basic technical information such as IP address, browser type, requested pages, timestamps, and error logs for security and reliability.":
      "多くのウェブサイトと同様に、ホスティング事業者はセキュリティと信頼性のため、アイピーアドレス、ブラウザー種別、要求されたページ、時刻、エラーログなどの基本的な技術情報を処理する場合があります。",
    "Google Analytics, Google Search Console, or Google AdSense may be added later through environment variables. If analytics or advertising is enabled, this policy should be updated to describe those services and any cookies or identifiers they use.":
      "Google アナリティクス、Google Search Console、Google AdSense は、後から環境変数で追加される場合があります。解析や広告を有効にする場合は、それらのサービスと使用されるCookieや識別子について、このポリシーを更新する必要があります。",
    "Privacy questions can be sent to kharhystudio@gmail.com.":
      "プライバシーに関する質問は kharhystudio@gmail.com へ送信できます。",
    "Educational use": "教育目的での利用",
    "Print Layout Toolkit provides calculators and guides for general educational and planning purposes.":
      "プリントレイアウトツールキットは、一般的な学習と計画のための計算ツールとガイドを提供します。",
    "The results may help you estimate sizes, page counts, margins, bleed, resolution, and layout needs, but they are not a guarantee that a file is suitable for every printer, paper stock, binding method, or professional print job.":
      "結果は、サイズ、ページ数、余白、塗り足し、解像度、レイアウト要件の見積もりに役立ちますが、すべてのプリンター、用紙、製本方法、専門的な印刷案件に適していることを保証するものではありません。",
    "Your responsibility": "利用者の責任",
    "You are responsible for checking printer settings, print-shop specifications, proof files, trim requirements, color settings, paper stock, binding rules, and any other production requirements before printing or ordering.":
      "印刷または注文の前に、プリンター設定、印刷会社の仕様、校正ファイル、断裁条件、カラー設定、用紙、製本ルール、その他の制作条件を確認する責任は利用者にあります。",
    "No warranty": "保証について",
    "The site is provided as-is. We try to keep the tools accurate and useful, but we do not promise that every calculation, guide, or result will be error-free or appropriate for your specific project.":
      "このサイトは現状のまま提供されます。ツールを正確で役立つものに保つよう努めていますが、すべての計算、ガイド、結果が誤りなく、特定のプロジェクトに適していることを保証するものではありません。",
    "Our effort": "アクセシビリティへの取り組み",
    "Print Layout Toolkit aims to be readable, keyboard accessible, responsive, and usable with clear labels, semantic page structure, and strong color contrast.":
      "プリントレイアウトツールキットは、読みやすく、キーボードで操作でき、画面幅に対応し、明確なラベル、意味のあるページ構造、十分な色のコントラストで使いやすいサイトを目指しています。",
    "The calculators are designed with visible labels and helper text so users can understand inputs without guessing.":
      "各計算ツールは、入力内容を推測せず理解できるよう、見えるラベルと補足説明を付けて設計しています。",
    "Report an issue": "問題を報告する",
    "If you find an accessibility barrier, please email kharhystudio@gmail.com with the page URL and a short description of the issue.":
      "アクセシビリティ上の問題を見つけた場合は、ページURLと問題の簡単な説明を添えて kharhystudio@gmail.com へメールしてください。",

    "Pixels become inches through DPI": "ピクセルはDPIでインチに変換されます",
    "A 3000 pixel wide image at 300 DPI prints 10 inches wide. The same image at 150 DPI prints 20 inches wide, but with less detail per inch.":
      "幅3000ピクセルの画像は、300 DPIでは幅10インチで印刷されます。同じ画像を150 DPIで印刷すると幅20インチになりますが、1インチあたりの細部は少なくなります。",
    "Enter the image width and height in pixels.": "画像の幅と高さをピクセルで入力します。",
    "Enter the DPI you want to use.": "使用したいDPIを入力します。",
    "Use the result to understand the physical print size.": "結果を使って、実際の印刷サイズを確認します。",
    "Checking photo size": "写真サイズの確認",
    "Estimating print size": "印刷サイズの見積もり",
    "Planning image exports": "画像書き出しサイズの計画",
    "Print width in inches.": "印刷幅をインチで入力します。",
    "Print height in inches.": "印刷高さをインチで入力します。",
    "How the conversion works": "変換の仕組み",
    "Pixels are calculated by multiplying physical inches by DPI. For example, 8 inches at 300 DPI needs 2400 pixels.":
      "ピクセル数は、実寸のインチ数にDPIを掛けて計算します。たとえば300 DPIで8インチなら、2400ピクセルが必要です。",
    "Enter the desired print width and height in inches.": "希望する印刷幅と高さをインチで入力します。",
    "Enter your target DPI.": "目標DPIを入力します。",
    "Create or export your image at the calculated pixel size.": "計算されたピクセルサイズで画像を作成または書き出します。",
    "New image canvases": "新しい画像キャンバス",
    "Print file exports": "印刷用ファイルの書き出し",
    "Photo sizing": "写真サイズ調整",
    "Convert image pixels to centimeters at a chosen DPI.": "指定したDPIで画像ピクセルをセンチメートルに変換します。",
    "Centimeters and DPI": "センチメートルとDPI",
    "The calculator converts pixels to inches first, then inches to centimeters. This keeps the math consistent with DPI, which is based on inches.":
      "この計算ツールは、まずピクセルをインチに変換し、その後センチメートルに変換します。DPIはインチを基準にしているため、この方法で計算を一貫させます。",
    "Enter image width and height in pixels.": "画像の幅と高さをピクセルで入力します。",
    "Enter the print DPI.": "印刷DPIを入力します。",
    "Read the print size in centimeters.": "印刷サイズをセンチメートルで確認します。",
    "Metric print planning": "メートル法での印刷計画",
    "International paper layouts": "国際的な用紙レイアウト",
    "Choosing a practical print size": "実用的な印刷サイズの選び方",
    "A larger print size spreads the same pixels over more inches. That lowers effective resolution and can make the print softer up close.":
      "印刷サイズを大きくすると、同じピクセル数がより広い範囲に広がります。その結果、有効解像度が下がり、近くで見るとややぼやけて見えることがあります。",
    "Choose a DPI target.": "目標DPIを選びます。",
    "Compare the print size across common units.": "よく使う単位で印刷サイズを比較します。",
    "Photo prints": "写真プリント",
    "Art prints": "アートプリント",
    "Checking image readiness": "画像が印刷に向いているかの確認",
    "Effective resolution": "有効解像度",
    "Effective PPI is the actual pixels per printed inch after the image is placed at a physical size. It is often more useful than metadata stored inside the file.":
      "有効PPIは、画像を実際の物理サイズに配置したときの1インチあたりのピクセル数です。ファイル内のメタデータより実用的な確認値になることがよくあります。",
    "Enter image pixel dimensions.": "画像のピクセル寸法を入力します。",
    "Enter the desired print size.": "希望する印刷サイズを入力します。",
    "Review the effective PPI and quality message.": "有効PPIと品質メッセージを確認します。",
    "Client image checks": "入稿画像の確認",
    "Poster proofing": "ポスター校正",
    "Avoiding blurry prints": "ぼやけた印刷の回避",
    "Avoid stretching artwork": "デザインの引き伸ばしを防ぐ",
    "Aspect ratio is the relationship between width and height. Keeping the same ratio prevents unwanted stretching.":
      "アスペクト比は幅と高さの関係です。同じ比率を保つことで、意図しない引き伸ばしを防げます。",
    "Enter the current width and height.": "現在の幅と高さを入力します。",
    "Optionally enter a new width or height.": "必要に応じて新しい幅または高さを入力します。",
    "Use the scaled result to resize without stretching.": "拡大縮小結果を使って、引き伸ばさずにサイズ変更します。",
    "Cropping images": "画像のトリミング",
    "Resizing artwork": "デザインのサイズ変更",
    "Keeping photos proportional": "写真の比率を保つ",
    "What is an aspect ratio?": "アスペクト比とは何ですか？",
    "Why does aspect ratio matter for print?": "印刷でアスペクト比が重要なのはなぜですか？",
    "Cropping versus fitting": "トリミングとフィット",
    "If the image and target print have different aspect ratios, the image must either crop, stretch, or leave empty space. Cropping keeps the image proportional.":
      "画像と目標印刷サイズのアスペクト比が異なる場合、画像はトリミング、引き伸ばし、または余白付き配置のいずれかになります。トリミングは画像の比率を保ちます。",
    "Enter the source image width and height.": "元画像の幅と高さを入力します。",
    "Enter the target print width and height.": "目標の印刷幅と高さを入力します。",
    "Review which edges would be cropped.": "どの端がトリミングされるか確認します。",
    "Photo crop previews": "写真トリミングの確認",
    "Print aspect matching": "印刷アスペクト比の確認",
    "Social-to-print resizing": "交流サイト画像から印刷用へのサイズ調整",
    "Does this edit my image?": "このツールは画像を編集しますか？",
    "What if I do not want cropping?": "トリミングしたくない場合はどうすればよいですか？",

    "Page direction.": "ページの向きです。",
    "Display unit.": "表示する単位です。",
    "Used for pixel dimensions.": "ピクセル寸法の計算に使います。",
    "Paper sizes are regional": "用紙サイズは地域によって異なります",
    "A-series sizes are common internationally, while Letter and Legal are common in North America. Always choose the size your printer will use.":
      "A判は国際的に広く使われ、レターやリーガルは北米でよく使われます。必ず使用するプリンターに合ったサイズを選んでください。",
    "Choose a paper size.": "用紙サイズを選びます。",
    "Select the unit and orientation.": "単位と向きを選びます。",
    "Optionally set DPI to see pixel dimensions.": "必要に応じてDPIを設定し、ピクセル寸法を確認します。",
    "Choosing document size": "ドキュメントサイズの選択",
    "Comparing paper formats": "用紙形式の比較",
    "Setting canvas dimensions": "キャンバス寸法の設定",
    "Choose a common paper size.": "一般的な用紙サイズを選びます。",
    "From unit": "変換元の単位",
    "Original display unit.": "元の表示単位です。",
    "To unit": "変換先の単位",
    "Converted display unit.": "変換後の表示単位です。",
    "Needed for pixels.": "ピクセル変換に必要です。",
    "Use the same unit as your print provider": "印刷会社と同じ単位を使う",
    "Many print shops provide requirements in millimeters or inches. Converting before layout helps avoid scaling mistakes.":
      "多くの印刷会社は、要件をミリメートルまたはインチで示します。レイアウト前に変換しておくと、拡大縮小のミスを避けやすくなります。",
    "Choose a common paper size or enter custom dimensions.": "一般的な用紙サイズを選ぶか、カスタム寸法を入力します。",
    "Select the output unit.": "出力単位を選びます。",
    "Set DPI if converting to pixels.": "ピクセルに変換する場合はDPIを設定します。",
    "Document setup": "ドキュメント設定",
    "Print layout conversion": "印刷レイアウトの変換",
    "Pixel canvas planning": "ピクセルキャンバスの計画",
    "Custom width.": "カスタム幅です。",
    "Custom height.": "カスタム高さです。",
    "Measurement unit.": "測定単位です。",
    "For pixel dimensions.": "ピクセル寸法に使います。",
    "Custom sizes need extra checking": "カスタムサイズは追加確認が必要です",
    "Before ordering a custom print size, confirm minimum and maximum sizes with the print shop and check whether special trimming is needed.":
      "カスタム印刷サイズを注文する前に、最小・最大サイズを印刷会社に確認し、特別な断裁が必要かどうかも確認してください。",
    "Enter your custom width and height.": "カスタム幅と高さを入力します。",
    "Choose the measurement unit.": "測定単位を選びます。",
    "Set DPI to see pixel dimensions.": "DPIを設定してピクセル寸法を確認します。",
    "Custom invitations": "カスタム招待状",
    "Packaging inserts": "パッケージ同梱物",
    "Non-standard print pieces": "規格外の印刷物",
    "Total page width.": "ページ全体の幅です。",
    "Total page height.": "ページ全体の高さです。",
    "Space at the top.": "上側の余白です。",
    "Space at the right.": "右側の余白です。",
    "Space at the bottom.": "下側の余白です。",
    "Space at the left.": "左側の余白です。",
    "Margins keep text, logos, and important artwork away from trim edges and printer limits.":
      "余白は、文字、ロゴ、重要なデザインを断裁端やプリンターの制限から離して守ります。",
    "Enter the page width and height.": "ページの幅と高さを入力します。",
    "Enter margins for each side.": "各辺の余白を入力します。",
    "Check the remaining content area.": "残りのコンテンツ領域を確認します。",
    "Page layout planning": "ページレイアウト計画",
    "Safe zones": "安全ゾーン",
    "Avoiding content near edges": "端に近すぎる配置の回避",
    "Trim width": "仕上がり幅",
    "Final cut width.": "最終断裁後の幅です。",
    "Trim height": "仕上がり高さ",
    "Final cut height.": "最終断裁後の高さです。",
    Bleed: "塗り足し",
    "Bleed added to every edge.": "各辺に追加する塗り足しです。",
    "Use your printer's unit.": "プリンターまたは印刷会社の単位を使います。",
    "Bleed prevents white edges": "塗り足しは白い端を防ぎます",
    "Bleed is extra artwork outside the final cut line. A common amount is 3 mm or 0.125 inches, but your printer may ask for something different.":
      "塗り足しは、最終断裁線の外側に伸ばす余分なデザイン領域です。一般的には3 mmまたは0.125インチですが、プリンターや印刷会社によって指定が異なる場合があります。",
    "Enter the finished trim size.": "仕上がりサイズを入力します。",
    "Enter the bleed added to each edge.": "各辺に追加する塗り足しを入力します。",
    "Use the total size as your document or export size.": "合計サイズをドキュメントまたは書き出しサイズとして使います。",
    "Business cards": "名刺",
    Flyers: "チラシ",
    "Edge-to-edge print artwork": "端まで印刷するデザイン",
    "Is bleed the same as margin?": "塗り足しは余白と同じですか？",
    "Safe area is for important content": "安全エリアは重要な内容のための領域です",
    "Background color can extend into bleed, but text and logos should stay inside the safe area so trimming does not cut them off.":
      "背景色は塗り足しまで伸ばせますが、文字やロゴは断裁で切れないよう安全エリア内に置く必要があります。",
    "Enter finished size and safe margin.": "仕上がりサイズと安全余白を入力します。",
    "Add bleed if your artwork reaches the edge.": "デザインが端まで届く場合は塗り足しを追加します。",
    "Keep important content inside the safe area result.": "重要な内容は計算された安全エリア内に収めます。",
    Postcards: "ポストカード",
    "Flyer text placement": "チラシ本文の配置",
    "Paper width.": "用紙の幅です。",
    "Paper height.": "用紙の高さです。",
    "Your layout margin.": "レイアウト上の余白です。",
    "Printer edge limit.": "プリンターの端の制限です。",
    "Printers may not print to the edge": "プリンターは端まで印刷できない場合があります",
    "Many printers have a non-printable edge area. This calculator combines those limits with your chosen margins.":
      "多くのプリンターには印刷できない端の領域があります。この計算ツールは、その制限と指定した余白を組み合わせて計算します。",
    "Enter page size.": "ページサイズを入力します。",
    "Enter printer edge limits and layout margins.": "プリンターの端の制限とレイアウト余白を入力します。",
    "Use the result as the safest printable area.": "結果を安全な印刷可能領域として使います。",
    "Home printer layouts": "家庭用プリンターのレイアウト",
    Worksheets: "ワークシート",
    "Border-sensitive documents": "枠線位置が重要な文書",

    "Width of one item.": "1つのアイテムの幅です。",
    "Height of one item.": "1つのアイテムの高さです。",
    "Width of the sheet.": "シートの幅です。",
    "Height of the sheet.": "シートの高さです。",
    "Space between items.": "アイテム同士の間隔です。",
    "Outer sheet margin.": "シート外周の余白です。",
    "Optional bleed around each item.": "各アイテム周囲の任意の塗り足しです。",
    "Yield depends on spacing": "取れる数は間隔で変わります",
    "Small gaps and margins can reduce how many pieces fit. Always leave enough room for cutting or printer limits.":
      "小さな間隔や余白でも、配置できる数が減ることがあります。断裁やプリンター制限のため、十分な余裕を残してください。",
    "Enter the item size and sheet size.": "アイテムサイズとシートサイズを入力します。",
    "Add spacing, margins, and optional bleed.": "間隔、余白、必要に応じた塗り足しを追加します。",
    "Review rows, columns, and total pieces per sheet.": "行数、列数、1シートあたりの合計数を確認します。",
    Labels: "ラベル",
    Coupons: "クーポン",
    "Small photo prints": "小さな写真プリント",
    "Final poster width.": "完成ポスターの幅です。",
    "Final poster height.": "完成ポスターの高さです。",
    "Paper sheet width.": "用紙シートの幅です。",
    "Paper sheet height.": "用紙シートの高さです。",
    "Shared overlap between sheets.": "シート同士で重ねる幅です。",
    "Overlap helps alignment": "重なりは位置合わせに役立ちます",
    "Overlap gives neighboring sheets shared artwork so you can trim and align them more easily.":
      "重なりを付けると隣り合うシートに共通部分ができ、断裁や位置合わせがしやすくなります。",
    "Enter final poster size.": "完成ポスターサイズを入力します。",
    "Enter paper sheet size.": "用紙シートサイズを入力します。",
    "Add overlap for trimming and taping sheets together.": "断裁と貼り合わせのために重なりを追加します。",
    "DIY posters": "手作りポスター",
    "Classroom displays": "教室掲示",
    "Large signs on home printers": "家庭用プリンターで作る大型掲示",
    "Total pages in normal reading order.": "通常の読む順番での総ページ数です。",
    "Booklets use groups of four pages": "小冊子は4ページ単位で作られます",
    "One folded sheet creates four pages. That is why simple saddle-stitch booklets need page counts divisible by four.":
      "1枚の紙を折ると4ページになります。そのため、一般的な中綴じ小冊子は4で割り切れるページ数が必要です。",
    "Enter your page count.": "ページ数を入力します。",
    "See the next valid booklet page count.": "次に有効な小冊子ページ数を確認します。",
    "Add blank pages if needed before printing.": "必要に応じて印刷前に白紙ページを追加します。",
    Zines: "ジン",
    Programs: "プログラム",
    "Small booklets": "小冊子",
    "Use total pages in reading order.": "読む順番での総ページ数を使います。",
    "Booklet pages print in a special order so they read correctly after folding. Many printer drivers handle this automatically, but a logical guide helps you check the result.":
      "小冊子のページは、折った後に正しい順番で読めるよう特別な順番で印刷されます。多くのプリンタードライバーが自動処理しますが、論理的なガイドがあると結果を確認しやすくなります。",
    "Enter total page count.": "総ページ数を入力します。",
    "Review front and back page pairings.": "表面と裏面のページ組み合わせを確認します。",
    "Use the output as a planning guide, not a replacement for printer software.":
      "出力結果は計画用のガイドとして使い、プリンターソフトの代わりとしては使わないでください。",
    "Manual booklet checks": "手動小冊子チェック",
    "Folded programs": "折りプログラム",
    "Total pages in the book.": "本の総ページ数です。",
    "Usually a multiple of four.": "通常は4の倍数です。",
    "Signatures are folded page groups": "折丁は折りたたまれたページのまとまりです",
    "A signature is a group of pages printed and folded together before binding. Signature sizes are usually multiples of four.":
      "折丁は、製本前にまとめて印刷・折り加工されるページのまとまりです。折丁のページ数は通常4の倍数です。",
    "Enter pages per signature.": "1折丁あたりのページ数を入力します。",
    "Check the number of signatures and blanks.": "折丁数と白紙ページ数を確認します。",
    "Book planning": "本の計画",
    "Booklet production": "小冊子制作",
    "Print estimating": "印刷見積もり",
    "Total interior pages.": "本文ページの総数です。",
    "Use GSM estimate or exact thickness.": "GSMによる推定または正確な厚みを使います。",
    "80 gsm is common office paper.": "80 gsmは一般的なコピー用紙の目安です。",
    "One cover side thickness in mm.": "表紙片面の厚みをmmで入力します。",
    "Spine width is only an estimate": "背幅はあくまで見積もりです",
    "Actual paper thickness varies by stock, coating, humidity, and printer. Always use the printer's final specification for production covers.":
      "実際の紙厚は、用紙、コーティング、湿度、プリンターによって変わります。制作用の表紙には、必ず印刷会社の最終仕様を使ってください。",
    "Enter paper thickness or estimate from GSM.": "紙厚を入力するか、GSMから推定します。",
    "Add cover thickness if needed.": "必要に応じて表紙の厚みを追加します。",
    "Paperback covers": "ペーパーバック表紙",
    "Book mockups": "本のモックアップ",
    "Print planning estimates": "印刷計画の見積もり",
    "Width of one label.": "1枚のラベルの幅です。",
    "Height of one label.": "1枚のラベルの高さです。",
    "Label layouts need consistent gaps": "ラベルレイアウトには一定の間隔が必要です",
    "Gaps between labels help with cutting and alignment. A small gap change can change the number of labels that fit.":
      "ラベル同士の間隔は、断裁と位置合わせに役立ちます。小さな間隔変更でも、配置できるラベル数が変わることがあります。",
    "Enter label size.": "ラベルサイズを入力します。",
    "Enter page size, margins, and gaps.": "ページサイズ、余白、間隔を入力します。",
    "Read rows, columns, and labels per sheet.": "行数、列数、1シートあたりのラベル数を確認します。",
    "Sticker sheets": "ステッカーシート",
    "Address labels": "宛名ラベル",
    "Product labels": "商品ラベル",
    "Choose a common photo size.": "一般的な写真サイズを選びます。",
    "Choose a sheet size.": "シートサイズを選びます。",
    "Gap in inches.": "間隔をインチで入力します。",
    "Sheet margin in inches.": "シート余白をインチで入力します。",
    "Photo layouts depend on orientation": "写真レイアウトは向きで変わります",
    "Choose a photo size.": "写真サイズを選びます。",
    "Add gap and margin settings to estimate photo yield.": "間隔と余白を設定して、配置できる写真数を見積もります。",
    "Photo contact sheets": "写真コンタクトシート",
    "Wallet prints": "ウォレットサイズ写真",
    "Home photo printing": "家庭での写真印刷",

    "Term": "用語",
    "Simple meaning": "簡単な意味",
    "Useful when": "役立つ場面",
    "Image pixels per inch": "1インチあたりの画像ピクセル数",
    "Checking if a photo has enough detail": "写真に十分な細部があるか確認するとき",
    "Printer dots per inch": "1インチあたりのプリンタードット数",
    "Talking about printer output or export settings": "プリンター出力や書き出し設定を話すとき",
    "Common bleed": "一般的な塗り足し",
    "Where it sits": "位置",
    Purpose: "目的",
    "Inside the page": "ページの内側",
    "Keeps content readable and safe": "内容を読みやすく安全に保つ",
    "Safe area": "安全エリア",
    "Inside the trim edge": "断裁線の内側",
    "Protects important content": "重要な内容を守る",
    "Outside the trim edge": "断裁線の外側",
    "Prevents white edges after cutting": "断裁後の白い端を防ぐ",
    Size: "サイズ",
    Dimensions: "寸法",
    "Common region": "主な地域",
    "Many countries outside North America": "北米以外の多くの国",
    "United States and Canada": "米国とカナダ",
    "US legal and office documents": "米国の法務・オフィス文書",
    "Effective PPI": "有効PPI",
    "Typical use": "一般的な用途",
    "Sharp close-view photos and flyers": "近くで見る写真やチラシ",
    "Good everyday print quality": "日常的な印刷に適した品質",
    "Large prints viewed from a distance": "離れて見る大型印刷物",
    "Under 150": "150未満",
    "May look soft up close": "近くで見るとぼやける可能性があります",
  } satisfies Record<string, string>,
);

Object.assign(
  jaText,
  {
    "Cookie notice": "Cookieに関するお知らせ",
    "Print Layout Toolkit uses local storage for language, theme, and cookie choices. If analytics or ads are enabled later, cookies may be used for measurement and third-party advertising, including Google.":
      "Print Layout Toolkitは、言語、テーマ、Cookie選択の保存にローカルストレージを使用します。今後、解析や広告を有効にした場合、測定やGoogleを含む第三者広告のためにCookieが使われることがあります。",
    Accept: "同意する",
    "Last updated:": "最終更新日:",
    "July 3, 2026": "2026年7月3日",
    "Who it is for": "このサイトが役立つ人",
    "The site is built for people who need quick, practical answers while preparing layouts, images, booklets, posters, labels, written copy, or other print-ready files.":
      "このサイトは、レイアウト、画像、小冊子、ポスター、ラベル、文章、その他の印刷用データを準備するときに、すばやく実用的な答えが必要な人のために作られています。",
    "It is useful for early planning, checking assumptions, and learning print terms before confirming final specifications with a printer or production partner.":
      "印刷会社や制作パートナーと最終仕様を確認する前の初期計画、前提条件の確認、印刷用語の学習に役立ちます。",
    "Information you enter into tools": "ツールに入力する情報",
    "Contact email": "連絡先メール",
    "The Contact page provides an email address instead of a contact form. If you send an email, your message, email address, and any details you include are handled by your email provider and the receiving inbox.":
      "お問い合わせページでは、送信できないフォームではなくメールアドレスを掲載しています。メールを送る場合、本文、メールアドレス、記載した情報は、利用しているメールサービスと受信側のメールボックスで扱われます。",
    "Google Search Console may be used to understand search visibility. Google Analytics or Google AdSense may be added later through environment variables. If analytics or advertising is enabled, this policy should be updated to describe those services and any cookies or identifiers they use.":
      "検索での表示状況を確認するためにGoogle Search Consoleを使用する場合があります。Google アナリティクスやGoogle AdSenseは、後から環境変数で追加される場合があります。解析や広告を有効にする場合は、それらのサービスと使用されるCookieや識別子について、このポリシーを更新する必要があります。",
    "If advertising is enabled later, third-party vendors, including Google, may use cookies or similar technologies to serve and measure ads based on visits to this and other websites.":
      "今後広告を有効にした場合、Googleを含む第三者事業者が、このサイトや他のサイトへの訪問情報に基づいて広告の配信や測定を行うため、Cookieや類似技術を使用することがあります。",
    "Cookies and local storage": "Cookieとローカルストレージ",
    "The site may use local storage or similar browser storage to remember preferences such as language, theme, and cookie notice acknowledgement.":
      "このサイトは、言語、テーマ、Cookie通知への同意などの設定を保存するために、ローカルストレージまたは同様のブラウザー保存機能を使用する場合があります。",
    "If analytics or advertising tools are added later, they may use cookies for measurement, fraud prevention, personalization, or ad delivery. You can control cookies through your browser settings and any consent controls shown on the site.":
      "今後、解析ツールや広告ツールを追加した場合、測定、不正防止、パーソナライズ、広告配信のためにCookieが使われることがあります。Cookieはブラウザー設定やサイト上に表示される同意管理で調整できます。",
    "External links": "外部リンク",
    "Some pages may link to external websites or services for reference. Those websites have their own privacy practices and are not controlled by Print Layout Toolkit.":
      "一部のページには参考として外部サイトやサービスへのリンクが含まれる場合があります。それらのサイトには独自のプライバシー方針があり、Print Layout Toolkitが管理するものではありません。",
    Children: "子どもについて",
    "This site is intended as a general print-layout utility and is not directed to children. Do not send personal information through email if you are not allowed to do so.":
      "このサイトは一般的な印刷レイアウト用ユーティリティであり、子どもを対象にしたものではありません。許可されていない場合は、メールで個人情報を送らないでください。",
    "Policy updates": "ポリシーの更新",
    "This policy may be updated as the website changes, especially if analytics, advertising, new tools, or third-party services are added.":
      "このポリシーは、サイトの変更に応じて更新される場合があります。特に解析、広告、新しいツール、第三者サービスを追加する場合に更新が必要です。",
    "Using this website": "このウェブサイトの利用",
    "By using Print Layout Toolkit, you agree to use the calculators, guides, and reference pages responsibly and only for lawful purposes.":
      "Print Layout Toolkitを利用することで、計算ツール、ガイド、参考ページを責任を持って合法的な目的にのみ使用することに同意したものとします。",
    "You may not misuse the site, interfere with its operation, attempt to access systems that are not public, or use automated traffic in a way that harms availability for other visitors.":
      "サイトを不正利用したり、運営を妨害したり、公開されていないシステムへアクセスを試みたり、他の利用者の利用を妨げる自動アクセスを行ったりしてはいけません。",
    "Informational tools": "情報提供用ツール",
    "Intellectual property": "知的財産",
    "The website design, text, calculator structure, and original content belong to Print Layout Toolkit or its owner unless otherwise stated.":
      "特に明記されていない限り、サイトのデザイン、文章、計算ツールの構成、独自コンテンツはPrint Layout Toolkitまたはその所有者に属します。",
    "You may use calculator results for your own projects, but you may not copy or republish the website as a competing service without permission.":
      "計算結果は自分のプロジェクトに利用できますが、許可なくこのウェブサイトをコピーしたり、競合サービスとして再公開したりすることはできません。",
    "Third-party links": "第三者リンク",
    "The website may link to third-party resources. Those links are provided for convenience, and Print Layout Toolkit is not responsible for third-party content, policies, or services.":
      "このウェブサイトは第三者の資料へリンクする場合があります。これらのリンクは利便性のために提供されており、Print Layout Toolkitは第三者のコンテンツ、方針、サービスについて責任を負いません。",
    "Limitation of liability": "責任の制限",
    "To the fullest extent allowed by applicable law, Print Layout Toolkit is not responsible for printing costs, production mistakes, missed deadlines, business losses, or other damages that result from relying only on website calculations.":
      "適用法で認められる最大限の範囲で、Print Layout Toolkitは、このサイトの計算結果だけに依存したことによる印刷費用、制作ミス、納期遅延、事業上の損失、その他の損害について責任を負いません。",
    "Changes to the service": "サービスの変更",
    "The website, tools, guides, and terms may be changed over time. Continued use of the site after updates means you accept the updated terms.":
      "ウェブサイト、ツール、ガイド、利用規約は時間とともに変更される場合があります。更新後もサイトを利用し続ける場合、更新された規約に同意したものとみなされます。",
    "Questions about these terms can be sent to kharhystudio@gmail.com.":
      "この規約に関する質問は kharhystudio@gmail.com まで送信できます。",
    "Page not found": "ページが見つかりません",
    "We could not find that page.": "そのページは見つかりませんでした。",
    "The page may have moved, or the address may be incorrect. You can go back to the homepage or browse all print tools.":
      "ページが移動したか、アドレスが間違っている可能性があります。ホームページに戻るか、すべての印刷ツールを確認できます。",
    "Go home": "ホームへ戻る",
  } satisfies Record<string, string>,
);

const dynamicReplacements: Array<[RegExp, string]> = [
  [/\bImage & DPI\b/g, "画像とDPI"],
  [/\bPaper & Layout\b/g, "用紙とレイアウト"],
  [/\bPosters & Booklets\b/g, "ポスターと小冊子"],
  [/\bWriting & Text\b/g, "文章とテキスト"],
  [/\bA series\b/g, "A判"],
  [/\bB series\b/g, "B判"],
  [/\bPhoto\b/g, "写真"],
  [/\bUS\b/g, "米国"],
  [/\bitems per sheet\b/g, "個/シート"],
  [/\blabels per sheet\b/g, "ラベル/シート"],
  [/\bphotos per sheet\b/g, "写真/シート"],
  [/\bphotos\b/g, "写真"],
  [/\blabels\b/g, "ラベル"],
  [/\bitems\b/g, "個"],
  [/\bsheets\b/g, "枚"],
  [/\bpages\b/g, "ページ"],
  [/\bblanks\b/g, "白紙"],
  [/\btools\b/g, "ツール"],
  [/\btool\b/g, "ツール"],
  [/\bWords\b/g, "単語数"],
  [/\bCharacters\b/g, "文字数"],
  [/\bSentences\b/g, "文数"],
  [/\bParagraphs\b/g, "段落数"],
  [/\bminutes\b/g, "分"],
  [/\bminute\b/g, "分"],
  [/\bper sheet\b/g, "/シート"],
  [/\bLeft and right sides\b/g, "左右"],
  [/\bTop and bottom\b/g, "上下"],
];

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function translateText(value: string, language: Language) {
  if (language === "en") return value;

  const normalized = normalizeText(value);
  if (!normalized) return value;

  const exact = jaText[normalized];
  if (exact) return exact;

  const replaced = dynamicReplacements.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    normalized,
  );

  return replaced === normalized ? value : replaced;
}
