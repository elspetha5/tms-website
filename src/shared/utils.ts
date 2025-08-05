export function getTenantId(userObj) {
  if (userObj.tenantId) {
    return userObj.tenantId;
  } else if (userObj.tenantId === null) {
    return "tms-group-3ovbh";
  } else if (!userObj) {
    return undefined;
  }
}
