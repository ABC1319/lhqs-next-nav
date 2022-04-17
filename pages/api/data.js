// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export function loadDataList() {
  return fetch('http://info.lhqs.ink/data/site.json').then(res => res.json());
}