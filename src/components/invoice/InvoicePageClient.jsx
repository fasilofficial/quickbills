"use client";

import React, { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BiInfoCircle } from "react-icons/bi";
import InvoiceForm from "../InvoiceForm";
import { templatesData } from "../../data/templatesData";

function InvoiceFormWithParams() {
  const searchParams = useSearchParams();
  const templateSlug = searchParams.get("template");

  const initialData = useMemo(() => {
    if (templateSlug) {
      const found = templatesData.find((t) => t.slug === templateSlug);
      if (found) return found.prefillData;
    }
    return null;
  }, [templateSlug]);

  return (
    <>
      {initialData && (
        <div className="alert alert-info d-flex align-items-center gap-2 mb-4 py-2 px-3 small border-0 bg-primary-subtle text-primary rounded-3">
          <BiInfoCircle size={18} className="flex-shrink-0" />
          <span>
            Invoice pre-filled from template. You can customize any field below.
          </span>
        </div>
      )}
      <InvoiceForm initialData={initialData} />
    </>
  );
}

export default function InvoicePageClient() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-5 text-muted">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading generator...</span>
          </div>
        </div>
      }
    >
      <InvoiceFormWithParams />
    </Suspense>
  );
}
