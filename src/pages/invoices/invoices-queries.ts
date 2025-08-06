export async function getStatments(tenantId) {
  const invoiceUrl = `${
    import.meta.env.VITE_APPS_SCRIPT_URL
  }?dataType=statements&tenantId=${encodeURIComponent(tenantId)}`;

  const response = await fetch(invoiceUrl, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
  });

  if (!response.ok) {
    console.error("Apps Script lookup failed:", response.status, text);
    throw new Error("Apps Script call failed or returned empty response");
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
}
