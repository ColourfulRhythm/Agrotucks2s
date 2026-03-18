export function Footer() {
  return (
    <footer className="border-t border-[rgba(247,243,235,0.04)] py-10 text-center">
      <div className="mx-auto max-w-[900px] px-7">
        <p className="text-[0.82rem] text-[rgba(247,243,235,0.3)]">
          © 2026 AgroTucks — A{" "}
          <a href="https://focalpointdev.com" target="_blank" rel="noopener noreferrer" className="text-[#c96b3c] hover:underline">
            Focal Point Development
          </a>{" "}
          Initiative ·{" "}
          <a href="https://instagram.com/agrotucks" target="_blank" rel="noopener noreferrer" className="text-[#c96b3c] hover:underline">
            @agrotucks
          </a>
        </p>
      </div>
    </footer>
  );
}
