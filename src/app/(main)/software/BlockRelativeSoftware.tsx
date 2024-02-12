import { FunctionComponent, useMemo } from 'react';
import { Typo } from '@/components';
import { SOFTWARE } from './config';
import styles from './software.module.css';
import SoftwareListItem from './SoftwareListItem';

const DISTANCE_TO_NEXT = 9; // Number of Articles to skip to get to next link
const NUMBER_OF_LINKS = 6; // How many links on Article page

interface Props {
  skip?: number;
  software: string;
  total?: number;
}

/**
 * Renders a list of articles relative to the current article
 * @component BlockRelativeArticles
 * @param {string} article - Current article as a kebab-case-string.
 * @param {number} [skip=17] - How many articles to skip to get to the next link.
 * @param {number} [total=12] - How many links to render.
 */
const BlockRelativeSoftware: FunctionComponent<Props> = ({
  skip = DISTANCE_TO_NEXT,
  software,
  total = NUMBER_OF_LINKS,
}) => {
  const list = useMemo(() => {
    // Note: useMemo() is not actually needed, until the component become client-side rendered by 'use client' directive
    const text = software.replace(/-/g, ' ');
    const start = SOFTWARE.indexOf(text) ?? 0;
    const result = [];
    for (let i = 1; i <= total; i++) {
      const index = (start + i * skip) % SOFTWARE.length;
      result.push(SOFTWARE[index]);
    }
    return result;
  }, [skip, software, total]);

  return (
    <Typo variant="list" className={styles.list}>
      {list.map((name) => (
        <SoftwareListItem key={name} name={name} />
      ))}
    </Typo>
  );
};

export default BlockRelativeSoftware;
