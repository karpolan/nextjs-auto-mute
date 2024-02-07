import { render, screen } from '@testing-library/react';
import { randomText } from '@/utils/text';
import { PictureProps } from '@/utils/type';
import { SCREENSHOTS } from './config';
import Screenshot from '.';

const ComponentToTest = Screenshot;

/**
 * Tests for <Screenshot/> component
 */
describe('<Screenshot/> component', () => {
  it('renders itself', () => {
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} />);
    const image = screen.getByTestId(testId);
    expect(image).toBeDefined();
    expect(image.tagName.toLowerCase()).toBe('img');
  });

  it('supports .alt property', () => {
    const alt = 'Some text';
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} alt={alt} />);
    const image = screen.getByTestId(testId);
    expect(image).toBeDefined();
    expect(image).toHaveAttribute('alt', alt);
  });

  it('supports .className property', () => {
    let className = 'someClassName';
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} className={className} />);
    const image = screen.getByTestId(testId);
    expect(image).toBeDefined();
    expect(image).toHaveClass(className);
  });

  it('supports .height property', () => {
    [
      0, 100,
      // '200', '200px', '3rem' // Next.js Image component does not support string values
    ].forEach((height) => {
      const testId = randomText(8);
      render(<ComponentToTest data-testid={testId} height={height} />);
      const image = screen.getByTestId(testId);
      expect(image).toBeDefined();
      expect(image).toHaveAttribute('height', String(height));
    });
  });

  it('supports .href property', () => {
    let href = '/some-link/index.html';
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} href={href} />);
    const image = screen.getByTestId(testId);
    const link = image.parentElement;
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', href);
  });

  it('supports .title property', () => {
    const title = 'Some text';
    const testId = randomText(8);
    render(<ComponentToTest data-testid={testId} title={title} />);
    const image = screen.getByTestId(testId);
    expect(image).toBeDefined();
    expect(image).toHaveAttribute('title', title);
  });

  it('supports .variant property', () => {
    Object.keys(SCREENSHOTS).forEach((current) => {
      const variant = current as keyof typeof SCREENSHOTS;
      const screenshot: PictureProps = SCREENSHOTS[variant];
      const fileName = screenshot.src.split('/').pop();
      const testId = randomText(8);
      render(<ComponentToTest data-testid={testId} variant={variant} />);
      const image = screen.getByTestId(testId);
      expect(image).toBeDefined();
      expect(image).toHaveAttribute('src');
      expect(image.getAttribute('src')).toContain(fileName);
      expect(image).toHaveAttribute('width');
      expect(image).toHaveAttribute('height');
      screenshot.alt && expect(image).toHaveAttribute('alt', screenshot.alt);
      screenshot.title && expect(image).toHaveAttribute('title', screenshot.title);
    });
  });

  it('supports .width property', () => {
    [
      0, 100,
      // '200', '200px', '3rem' // Next.js Image component does not support string values
    ].forEach((width) => {
      const testId = randomText(8);
      render(<ComponentToTest data-testid={testId} width={width} />);
      const image = screen.getByTestId(testId);
      expect(image).toBeDefined();
      expect(image).toHaveAttribute('width', String(width));
    });
  });
});
