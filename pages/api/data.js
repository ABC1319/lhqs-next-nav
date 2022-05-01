// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export function loadDataList() {
  return fetch('http://info.lhqs.ink/data/website.json').then(res => res.json());
}

// export function loadDataList() {
//   return fetch('http://10.0.0.128:4000/data/website.json').then(res => res.json());
// }

export function loadAllDataList() {
  return fetch('http://info.lhqs.ink/data/website.json').then(res => res.json());
}

export function loadSearchList() {
  return fetch('http://info.lhqs.ink/data/search.json').then(res => res.json());
}