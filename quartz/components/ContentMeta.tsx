import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { getGenreOccurencesMap} from "../plugins/transformers/genrecount"
import { allowedGenreMap } from "../plugins/allowedGenreConfig"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

const MAINPAGE_FILENAME_SLUG = "index";

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
  showWordCount:boolean
  showGenreCount:boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
  showWordCount: true,
  showGenreCount: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }
      if(options.showWordCount){
        const wordCount = fileData.wordCount;
        segments.push(<span>Word Count: {wordCount}</span>)
      }
      if(options.showGenreCount){
        if(fileData.slug === MAINPAGE_FILENAME_SLUG){
          const genreOccurencesMap = getGenreOccurencesMap();
          if(Object.keys(genreOccurencesMap).length > 0){
            segments.push(<br/>);
            segments.push(<span> Genres Present in Setlist: </span>);
          }
          for (const genre of Object.keys(genreOccurencesMap)) {
            if(genreOccurencesMap[genre] > 0 && allowedGenreMap[genre]){
              segments.push(<br/>);
              segments.push(<span>{genre}: {genreOccurencesMap[genre]} songs in setlist</span>)
            }
          }
        }
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
