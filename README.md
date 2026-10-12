# 研究者情報サイト（researchmap ミラー）

GitHub Pages（Jekyll）でそのまま公開できる構成です。
HTML を触らず、`_data/` の YAML ファイルを書き換えるだけで内容を更新できます。

## 公開の手順

1. GitHub で新しいリポジトリを作り、このフォルダの中身をすべてアップロード
   - リポジトリ名を `<ユーザー名>.github.io` にすると `https://<ユーザー名>.github.io/` で公開されます
2. リポジトリの **Settings → Pages** で
   **Source: Deploy from a branch / Branch: main /(root)** を選んで保存
3. `_config.yml` の `url` と `baseurl` を書き換え
   - リポジトリ名が `<ユーザー名>.github.io` 以外なら `baseurl: "/リポジトリ名"`
4. 数分後に公開URLで表示を確認

## どこを書き換えるか

| 変えたいもの | ファイル |
|---|---|
| 氏名・所属・学位・職歴・学歴・分野・リンク・メール | `_data/profile.yml` |
| 査読論文 | `_data/papers.yml` |
| 学会発表 | `_data/presentations.yml` |
| MISC | `_data/misc.yml` |
| 資料（ダウンロード） | `_data/materials.yml` ＋ ファイルを `assets/files/`、プレビュー画像を `assets/img/materials/` へ |
| 尺度使用上の注意 | `research/index.md` |
| OTHER の画像ギャラリー | `_data/gallery.yml` ＋ 画像を `assets/img/gallery/` へ |
| 最終更新日時（フッター） | `_config.yml` の `last_synced` |
| 配色・字間・左メニューの幅 | `assets/css/style.css` 冒頭の `:root` |
| 左メニューの項目 | `_data/nav.yml` |

### 業績の書き方（papers / presentations / misc 共通）

```yaml
- year: 2025
  apa: >-
    Yamada, T., & Suzuki, H. (2025). Title of the article. *Journal Name*,
    *12*(3), 45–60. https://doi.org/xx.xxxx/xxxxx
  summary: 平易な日本語の概要は、改行せず1行で書きます。
```

- `*…*` で囲んだ部分が斜体になります（誌名・巻など）
- `year` ごとに見出しがつき、新しい年が上に並びます。同じ年の中はファイルに書いた順です
- YAML は**字下げ（半角スペース）**で構造を表します。タブは使えません
- `apa: >-` の下は途中で改行しても半角スペース1つにまとめられます。そのため**日本語の文は改行せず1行で**書いてください（改行すると文中に空白が入ります）
- 文中に `: `（コロン＋空白）や ` #` を含む行は、`>-` の下に書けば問題ありません

### 資料のプレビュー画像

- PDF の1ページ目を PNG で書き出し（横幅 600px 程度で十分）、`assets/img/materials/` に置きます
  - Windows：PDF を Acrobat で開き「書き出し → 画像 → PNG」／ Mac：プレビューで「書き出す → PNG」
- `preview:` を書かなければ、ファイル形式（PDF など）の文字が入った枠が表示されます

## 注意

- 掲載中のデータ・画像・PDF はすべて**仮のもの**です（架空の文献・DOI）
- 公開リポジトリに置いたファイルは誰でも閲覧・取得できます
- フォントの Segoe UI・游ゴシック UI は Windows に入っている書体です。Mac・iPhone・Android では入っていないため、ヒラギノ角ゴや Noto Sans JP で表示されます
