export const fmtDate=(d:Date)=> new Intl.DateTimeFormat(undefined,{dateStyle:'medium', timeStyle:'short'}).format(d)
