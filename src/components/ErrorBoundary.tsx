import React from 'react';

/**
 * Interface for the ErrorBoundary component props.
 *
 * The ErrorBoundary component props should include the children to render.
 *
 * @interface ErrorBoundaryProps
 * @property {React.ReactNode} children - The children to render.
 * @exports ErrorBoundaryProps
 */
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

/**
 * Interface for the ErrorBoundary component state.
 *
 * The ErrorBoundary component state should include a boolean indicating
 * whether an error has occurred.
 *
 * @interface ErrorBoundaryState
 * @property {boolean} hasError - Whether an error has occurred.
 * @exports ErrorBoundaryState
 */
interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * ErrorBoundary component.
 *
 * The ErrorBoundary component catches any errors that occur during rendering,
 * and displays a fallback UI instead of the app.
 *
 * @class ErrorBoundary
 * @extends {React.Component<ErrorBoundaryProps, ErrorBoundaryState>}
 * @exports ErrorBoundary
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service (e.g., Sentry)
    console.error(error, errorInfo);

    // Update state to display an error message to the user
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Display a fallback UI when an error occurs
      return <div>Something went wrong. Please try again later.</div>;
    }

    // If there's no error, render the children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
