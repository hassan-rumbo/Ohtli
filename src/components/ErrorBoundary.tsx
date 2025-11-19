import { Component, ReactNode, ErrorInfo } from "react";
import Button from "./Button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
          <h1 className="text-4xl font-serif italic mb-4">Algo salió mal.</h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Ocurrió un error inesperado. Por favor, recarga la página o intenta
            de nuevo más tarde.
            <br />
            <span className="text-red-500 text-xs">
              {this.state.error?.toString()}
            </span>
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
