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
  "Use instant browser results": "ブラウザーで結果をすぐ確認する",
  "These calculators run in your browser using typed values. They do not require account creation or file uploads.":
    "これらの計算ツールは入力した値だけを使ってブラウザー上で動作します。アカウント作成やファイルアップロードは不要です。",
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
  "Count words, characters, sentences, paragraphs, and estimated reading time from pasted text.":
    "貼り付けたテキストの単語数、文字数、文数、段落数、推定読書時間を数えます。",

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
  "PPI describes image pixels per inch. DPI usually describes printer output. In many layout tools people use the terms together when checking print resolution.":
    "PPIは画像の1インチあたりのピクセル数を表します。DPIは通常プリンター出力を表します。多くのレイアウト作業では、印刷解像度を確認するときに両方の用語が近い意味で使われます。",
  "Should I trust this instead of my print shop?": "印刷会社の指定よりこの結果を信じてよいですか？",
  "Use these calculators for planning, then confirm final requirements with your printer or print shop.":
    "これらの計算ツールは計画用として使い、最終要件はプリンターや印刷会社に確認してください。",
  "Do these tools upload my files?": "これらのツールはファイルをアップロードしますか？",
  "No. The calculators use typed dimensions and run in your browser. They do not upload images or documents.":
    "いいえ。計算ツールは入力された寸法だけを使ってブラウザー上で動作し、画像や文書をアップロードしません。",
  "Paste or type your text into the box.": "ボックスにテキストを貼り付けるか入力します。",
  "Review the instant word, character, sentence, and paragraph counts.":
    "単語数、文字数、文数、段落数をすぐ確認します。",
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
    "単語数カウンターを使うと、チラシ、小冊子、ポスター、ラベル、Webレイアウトに文章を配置する前に長さを確認できます。",
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
  "Enter positive numbers to calculate a useful result.": "有用な結果を計算するには正の数を入力してください。",
  Reset: "リセット",
  "Copy result": "結果をコピー",
  Copied: "コピーしました",
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
  "Your text stays in your browser. Results update instantly.":
    "テキストはブラウザー内に残ります。結果はすぐ更新されます。",
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
  "Plain-English terms for using Print Layout Toolkit calculators and guides.":
    "Print Layout Toolkitの計算ツールとガイドを利用するためのわかりやすい利用規約です。",
  "Accessibility Statement": "アクセシビリティ声明",
  "Accessibility statement for Print Layout Toolkit and contact information for reporting issues.":
    "Print Layout Toolkitのアクセシビリティへの取り組みと、問題報告の連絡先です。",
};

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
