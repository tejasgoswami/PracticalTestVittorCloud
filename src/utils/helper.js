export const setToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const removeToken = () => localStorage.removeItem("token");

export const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const setQuoteid = (quoteid) => localStorage.setItem("quoteid", quoteid);

export const getQuoteid = () => {
  return localStorage.getItem("quoteid");
};

export const setPolicytype = (policyType) =>
  localStorage.setItem("policyType", policyType);

export const getPolicytype = () => localStorage.getItem("policyType");

export const setSI = (sI) => localStorage.setItem("sI", sI);

export const getSI = () => localStorage.getItem("sI");

export const setProposalID = (proposalID) => {
  localStorage.setItem("proposal_id", proposalID);
};

export const getProposalID = () => {
  return localStorage.getItem("proposal_id");
};
export const setSelfSI = (selfSI) => localStorage.setItem("selfSI", selfSI);

export const getSelfSI = () => localStorage.getItem("selfSI");

export const setSpouseSI = (spouseSI) =>
  localStorage.setItem("spouseSI", spouseSI);

export const getSpouseSI = () => localStorage.getItem("spouseSI");

export const setSonSI = (sonSI) => localStorage.setItem("sonSI", sonSI);

export const getSonSI = () => localStorage.getItem("sonSI");

export const numberFormat = (value) => {
  let val = Math.abs(value);
  if (val >= 10000000) {
    val = `${(val / 10000000).toFixed(2)} Cr`;
  } else if (val >= 100000) {
    val = `${(val / 100000).toFixed(2)} Lac`;
  }
  return val;
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
