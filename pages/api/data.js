// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'lhry' })
}

export function loadDataList() {
  return fetch('http://info.lhqs.ink/data/website.json').then(res => res.json());
}

export function loadSearchList() {
  return fetch('http://info.lhqs.ink/data/search.json').then(res => res.json());
}