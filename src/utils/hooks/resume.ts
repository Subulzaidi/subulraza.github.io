import { useState } from "react";
import { downloadResume } from "../function/resumeDownloads";

type FormatType = "pdf" | "docx";

type DownloadResult = {
  success: boolean;
  message: string;
};

export const useResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadStatus, setDownloadStatus] = useState<DownloadResult | null>(
    null
  );

  const handleDownload = async (
    format: FormatType = "pdf"
  ): Promise<DownloadResult> => {
    setIsDownloading(true);
    setDownloadStatus(null);

    try {
      const result = await downloadResume(format);
      setDownloadStatus(result);
      return result;
    } catch {
      const failResult = {
        success: false,
        message: "Download failed. Please try again.",
      };
      setDownloadStatus(failResult);
      return failResult;
    } finally {
      setIsDownloading(false);
      // Clear status after 3 seconds
      setTimeout(() => setDownloadStatus(null), 3000);
    }
  };

  return {
    isDownloading,
    downloadStatus,
    handleDownload,
  };
};
