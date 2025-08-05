export async function getCompanyInfo(tenantId) {
  const infoUrl = `${
    import.meta.env.VITE_APPS_SCRIPT_URL
  }?dataType=companyInfo&tenantId=${encodeURIComponent(tenantId)}`;

  const response = await fetch(infoUrl, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
  });
  const text = await response.text();
  if (!response.ok || !text) {
    console.error("Apps Script lookup failed:", response.status, text);
    throw new Error("Apps Script call failed or returned empty response");
  }

  const result = JSON.parse(text);
  return result;
}
