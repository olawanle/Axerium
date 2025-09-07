export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} Axerium. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:underline" href="/privacy">Privacy</a>
          <a className="hover:underline" href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}


