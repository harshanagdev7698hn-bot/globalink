export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="dark:border-slate-800 dark:bg-slate-950">
        <div className="container-page py-10 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="muted">© {new Date().getFullYear()} GlobaLink. Compliance made simple.</p>
          <p className="muted">BIS • ISO • GeM • Labs • Global Consulting</p>
        </div>
      </div>
    </footer>
  );
}
