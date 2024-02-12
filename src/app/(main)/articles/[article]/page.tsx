import { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { ArticleProps } from '../../article/[article]/page';

export { generateStaticParams } from '../../article/[article]/page'; // For static generation

/**
 * Redirect to the Single article page
 */
const SingleArticleRedirect: NextPage<ArticleProps> = ({ params: { article } }) => {
  return redirect(`/article/${article}/`);
};

export default SingleArticleRedirect;
