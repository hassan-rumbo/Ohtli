import React from 'react';
import Button from './Button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
          <h1 className="text-4xl font-serif italic mb-4">Algo salió mal.</h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Ocurrió un error inesperado. Por favor, recarga la página o intenta de nuevo más tarde.
            <br />
            <span className="text-red-500 text-xs">{this.state.error?.toString()}</span>
          </p>
          <Button 
            variant="primary" 
            onClick={() => window.location.reload()}
            className="rounded-full"
          >
            Recargar Página
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
