import { FunctionComponent, useMemo } from 'react';
import { Typo } from '@/components';
import { ARTICLES } from './config';
import styles from './article.module.css';
import ArticleListItem from './ArticleListItem';

const DISTANCE_TO_NEXT = 9; // Number of Articles to skip to get to next link
const NUMBER_OF_LINKS = 6; // How many links on Article page

interface Props {
  article: string;
  skip?: number;
  total?: number;
}

/**
 * Renders a list of articles relative to the current article
 * @component BlockRelativeArticles
 * @param {string} article - Current article as a kebab-case-string.
 * @param {number} [skip=17] - How many articles to skip to get to the next link.
 * @param {number} [total=12] - How many links to render.
 */
const BlockRelativeArticles: FunctionComponent<Props> = ({
  article,
  skip = DISTANCE_TO_NEXT,
  total = NUMBER_OF_LINKS,
}) => {
  const list = useMemo(() => {
    // Note: useMemo() is not actually needed, until the component become client-side rendered by 'use client' directive
    const text = article.replace(/-/g, ' ');
    const start = ARTICLES.indexOf(text) ?? 0;
    const result = [];
    for (let i = 1; i <= total; i++) {
      const index = (start + i * skip) % ARTICLES.length;
      result.push(ARTICLES[index]);
    }
    return result;
  }, [article, skip, total]);

  return (
    <Typo variant="list" className={styles.list}>
      {list.map((name) => (
        <ArticleListItem key={name} name={name} />
      ))}
    </Typo>
  );
};

export default BlockRelativeArticles;
