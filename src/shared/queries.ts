export const dataTypes = {
  companyInfo: "companyInfo",
  spares: "spares",
  statements: "statements",
  supportTickets: "supportTickets",
};

function getFetchUrl(dataType, tenantId, ticketType) {
  return `${
    import.meta.env.VITE_APPS_SCRIPT_URL
  }?dataType=${dataType}&tenantId=${encodeURIComponent(tenantId)}&ticketType=${ticketType}`;
}

export async function getCompanyInfo(tenantId) {
  const response = await fetch(getFetchUrl(dataTypes.companyInfo, tenantId), {
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

export async function getCompanyData(
  dataType,
  tenantId,
  ticketType: string | null = null,
) {
  const response = await fetch(getFetchUrl(dataType, tenantId, ticketType), {
    method: "POST",
    mode: "cors",
    cache: "default",
  });

  if (!response.ok) {
    console.error("Apps Script lookup failed:", response.status);
    throw new Error("Apps Script call failed or returned empty response");
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
}
