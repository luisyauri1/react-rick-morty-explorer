import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageHero from './PageHero';

describe('PageHero', () => {
  it('should render children', () => {
    render(
      <PageHero>
        <h1>Test Content</h1>
      </PageHero>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should have section element with correct class', () => {
    const { container } = render(
      <PageHero>
        <div>Content</div>
      </PageHero>
    );
    const section = container.querySelector('.page-hero');

    expect(section).toBeInTheDocument();
  });

  it('should render Container component', () => {
    const { container } = render(
      <PageHero>
        <div>Content</div>
      </PageHero>
    );
    const containerDiv = container.querySelector('.container');

    expect(containerDiv).toBeInTheDocument();
  });

  it('should have page-hero__container class on Container', () => {
    const { container } = render(
      <PageHero>
        <div>Content</div>
      </PageHero>
    );
    const containerDiv = container.querySelector('.page-hero__container');

    expect(containerDiv).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    render(
      <PageHero>
        <h1>Title</h1>
        <p>Description</p>
      </PageHero>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should pass through text content', () => {
    render(<PageHero>Simple text content</PageHero>);

    expect(screen.getByText('Simple text content')).toBeInTheDocument();
  });
});
