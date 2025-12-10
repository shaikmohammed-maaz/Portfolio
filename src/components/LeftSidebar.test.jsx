import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeftSidebar from './LeftSidebar';

test('renders sidebar with correct name and social media links', () => {
  render(<LeftSidebar />);
  
  const nameElement = screen.getByText(/Shaik Mohammed Maaz/i);
  expect(nameElement).toBeInTheDocument();

  const linkedinLink = screen.getByLabelText(/LinkedIn/i);
  expect(linkedinLink).toBeInTheDocument();

  const githubLink = screen.getByLabelText(/GitHub/i);
  expect(githubLink).toBeInTheDocument();

  const leetcodeLink = screen.getByLabelText(/LeetCode/i);
  expect(leetcodeLink).toBeInTheDocument();
});
