import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { ResumeVariant } from "@/lib/content/resumes";
import { resumes } from "@/lib/content/resumes";

export function ResumePreview({ variant }: { variant: ResumeVariant }) {
  const content = resumes[variant];

  return (
    <Card className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/3 aspect-[3/4] bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant/40 flex-none">
        <object
          data={`${content.pdfPath}#toolbar=0&navpanes=0`}
          type="application/pdf"
          className="w-full h-full"
          aria-label={`${content.label} preview`}
        >
          <div className="w-full h-full flex items-center justify-center text-center p-4">
            <p className="text-xs text-on-surface-variant">
              PDF preview unavailable in this browser.{" "}
              <a
                href={content.pdfPath}
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the PDF
              </a>
              .
            </p>
          </div>
        </object>
      </div>

      <div className="flex-1 w-full">
        <h3 className="text-xl font-semibold text-primary">
          {content.previewTitle}
        </h3>
        <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
          {content.previewDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            href={content.pdfPath}
            variant="primary"
            download={content.pdfFileName}
          >
            <Icon name="download" className="h-4 w-4" />
            Download PDF
          </Button>
          <Button
            href={content.pdfPath}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="eye" className="h-4 w-4" />
            View Fullscreen
          </Button>
        </div>
      </div>
    </Card>
  );
}
