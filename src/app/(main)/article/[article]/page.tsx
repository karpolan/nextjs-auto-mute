import { Metadata, NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import { capitalizeAllWords } from '@/utils';
import Screenshot from '@/components/Screenshot';
import { getArticleList } from '../utils';
import BlockDownloadButtons from '../../download/BlockDownloadButtons';
import BlockRelativeArticles from '../BlockRelativeArticles';

export interface ArticleProps {
  params: {
    article: string;
  };
}

/**
 * Renders "Single Article" page
 * @page SingleArticle
 */
const SingleArticlePage: NextPage<ArticleProps> = async ({ params: { article } }) => {
  const text = article.replace(/-/g, ' ').replace(/   /g, ' - ');

  const title = capitalizeAllWords(text);

  // TODO: Make content dynamic based on the article
  return (
    <Wrapper tag="article">
      <Typo variant="header1">
        {title} using {APP_NAME}
      </Typo>
      <Typo variant="paragraph">
        {APP_NAME} stands out as a premier product in the market, making it an ideal fit for {text}. Explore the
        capabilities of this free software — a nimble yet robust tool crafted to elevate your comfort, particularly
        addressing {text} concerns.
      </Typo>
      <Stack alignItems="center" padding="1rem 0 0 0">
        <Screenshot
          alt={`Screenshot of ${APP_NAME} that solves ${text}`}
          title={`Solution for ${text} is ${APP_NAME} software`}
        />
      </Stack>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        Remember, {APP_NAME} transcends being a mere utility; it&apos;s a meticulously crafted solution to enhance your
        audio experience, offering a smoother and more intuitive interaction. Download it today to elevate your {text}{' '}
        encounters!
      </Typo>

      <Typo variant="header2">{title}</Typo>
      <Typo variant="paragraph">
        <strong>{title}</strong> is crucial for every computer. While some individuals may lack the knowledge of how to{' '}
        {text}, others are well-versed in the challenges associated with {text}. Fortunately, there is a ready software
        solution for addressing {text} - <Link href="https://software.karpolan.com">{APP_NAME} by KARPOLAN</Link>.
      </Typo>
      <Typo variant="paragraph">
        Additional <Link href="/article/">{text} documents and articles</Link> will be released shortly. Obtain more
        information about {text} and the product on the website.
      </Typo>

      <Typo variant="header2">More {title} documents</Typo>
      <Typo variant="paragraph">
        Numerous insightful documents related to the {APP_NAME} product and articles addressing {text} questions are
        available:
      </Typo>
      <BlockRelativeArticles article={article} />

      <Typo variant="paragraph">
        Additionally, consider exploring {APP_NAME} software — an out-of-the-box product designed for {text}.
      </Typo>
    </Wrapper>
  );
};

/**
 * Returns list of all mentioned categories to generate static pages.
 * @returns {Promise<{ article: string }[]>} List of all categories.
 */
export async function generateStaticParams() {
  const articles = await getArticleList();
  const result = articles.map((name) => ({ article: name.replace(/ /g, '-') }));
  IS_DEBUG && console.log('article.generateStaticParams()', JSON.stringify(result));
  return result;
}

/**
 * Generates MetaData for the page based on params
 */
export async function generateMetadata(
  { params: { article } }: ArticleProps
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const text = article.replace(/-/g, ' ').replace(/   /g, ' - ');
  const title = `${capitalizeAllWords(text)} - Article - ${APP_NAME}`;
  return { title };
}

export default SingleArticlePage;
