export const formatCurrency=(n:number,c='USD')=> new Intl.NumberFormat(undefined,{style:'currency',currency:c}).format(n)
