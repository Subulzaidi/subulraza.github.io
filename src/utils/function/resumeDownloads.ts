// Type definitions for analytics
interface GtagFunction {
  (command: string, eventName: string, parameters: {
    event_category: string;
    event_label: string;
    value: number;
  }): void;
}

interface Analytics {
  track: (eventName: string, properties: {
    format: string;
    timestamp: string;
    userAgent: string;
  }) => void;
}

declare global {
  interface Window {
    gtag?: GtagFunction;
    analytics?: Analytics;
  }
}

export const downloadResume = async (format: "pdf" | "docx" = "pdf") => {
  try {
    const response = await fetch(`/resume/subul-raza-resume.${format}`);
    
    if (!response.ok) {
      throw new Error("Resume file not found");
    }
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Subul-Raza-Resume.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    // Optional: Track download analytics
    trackResumeDownload(format);
    
    return { success: true, message: "Resume downloaded successfully" };
  } catch (error) {
    console.error("Download failed:", error);
    return { success: false, message: "Download failed. Please try again." };
  }
};

// Analytics tracking function
const trackResumeDownload = (format: string) => {
  // Google Analytics tracking
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "resume_download", {
      event_category: "engagement",
      event_label: format,
      value: 1,
    });
  }
  
  // Custom analytics
  if (typeof window !== "undefined" && window.analytics) {
    window.analytics.track("Resume Downloaded", {
      format: format,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    });
  }
};