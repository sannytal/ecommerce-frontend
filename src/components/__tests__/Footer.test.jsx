import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders brand logo and name', () => {
    render(<Footer />);
    
    expect(screen.getByText('E-Store')).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/© 2024 E-Store/)).toBeInTheDocument();
    expect(screen.getByText(/Built with React & FakeStore API/)).toBeInTheDocument();
  });

  it('has proper footer styling', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    
    expect(footer).toHaveClass('bg-gray-800', 'text-white');
  });

  it('displays technology stack information', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Built with React & FakeStore API/)).toBeInTheDocument();
  });
});
