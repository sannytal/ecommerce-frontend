import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<LoadingSpinner text="Please wait..." />);
    
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('renders without text when text prop is empty', () => {
    render(<LoadingSpinner text="" />);
    
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<LoadingSpinner size="small" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="medium" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="large" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('has correct CSS classes for spinner animation', () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector('.animate-spin');
    
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('rounded-full', 'border-4', 'border-gray-200', 'border-t-primary-600');
  });

  it('centers content properly', () => {
    const { container } = render(<LoadingSpinner />);
    const wrapper = container.firstChild;
    
    expect(wrapper).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center');
  });
});
