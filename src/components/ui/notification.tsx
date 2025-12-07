"use client";

import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

export function Notification({ message, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-dismiss after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-4 z-50 animate-slide-in-left">
      <div className="bg-card border border-border rounded-lg shadow-2xl p-4 flex items-center gap-3 min-w-[320px] max-w-md">
        <div className="flex-shrink-0">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

